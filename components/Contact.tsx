import { useState } from "react";
import { T, SITE } from "./tokens";
import { Reveal, Section, SectionHeadInline } from "./ui";

export function Contact() {
    const [hov, setHov] = useState(false);
    return (
        <Section id="contact">
            <SectionHeadInline tag="Contact" />
            <Reveal>
                <p
                    style={{
                        fontFamily: T.font.body,
                        fontSize: T.type.body.size,
                        lineHeight: T.type.body.leading,
                        color: T.textSecondary,
                        fontWeight: 300,
                        maxWidth: "50ch",
                    }}
                >
                    For seminars, consultancy, or writing enquiries — or if you&rsquo;ve come from
                    one of my talks and want to say salaam — write to me.
                </p>
            </Reveal>
            <Reveal delay={0.1}>
                <a
                    href={`mailto:${SITE.email}`}
                    onMouseEnter={() => setHov(true)}
                    onMouseLeave={() => setHov(false)}
                    style={{
                        display: "inline-block",
                        marginTop: 26,
                        fontFamily: T.font.display,
                        fontSize: "clamp(22px, 3.5vw, 30px)",
                        color: hov ? T.accent : T.text,
                        borderBottom: `1px solid ${hov ? T.accent : T.sand}`,
                        paddingBottom: 3,
                        textDecoration: "none",
                        transition: "color 0.3s, border-color 0.3s",
                    }}
                >
                    {SITE.email}
                </a>
            </Reveal>
        </Section>
    );
}
