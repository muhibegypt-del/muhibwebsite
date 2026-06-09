import { T, WORK } from "./tokens";
import { Reveal, Section, SectionHeadInline } from "./ui";

export function Work() {
    return (
        <Section id="work">
            <SectionHeadInline tag="Work" />
            <div>
                {WORK.map((w, i) => (
                    <Reveal key={w.title} delay={i * 0.05}>
                        <div
                            className="work-item"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "200px 1fr",
                                gap: 40,
                                padding: "38px 0",
                                borderTop: `1px solid ${T.border}`,
                                ...(i === WORK.length - 1
                                    ? { borderBottom: `1px solid ${T.border}` }
                                    : {}),
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontFamily: T.font.display,
                                        fontSize: 22,
                                        lineHeight: 1.3,
                                        color: T.text,
                                        fontWeight: 400,
                                    }}
                                >
                                    {w.title}
                                </div>
                                <small
                                    style={{
                                        display: "block",
                                        marginTop: 8,
                                        fontFamily: T.font.body,
                                        fontSize: 11.5,
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        color: T.sand,
                                        fontWeight: 500,
                                    }}
                                >
                                    {w.sub}
                                </small>
                            </div>
                            <p
                                style={{
                                    fontFamily: T.font.body,
                                    fontSize: T.type.body.size,
                                    lineHeight: T.type.body.leading,
                                    color: T.textSecondary,
                                    fontWeight: 300,
                                    maxWidth: "54ch",
                                }}
                            >
                                {w.desc}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
