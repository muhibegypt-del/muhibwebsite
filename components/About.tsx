import { T } from "./tokens";
import { Reveal, Section, SectionHeadInline } from "./ui";

export function About() {
    return (
        <Section id="about">
            <SectionHeadInline tag="About" />
            <div
                className="about-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: 28,
                    maxWidth: "62ch",
                }}
            >
                <Reveal>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 21,
                            lineHeight: 1.55,
                            color: T.text,
                            fontWeight: 400,
                        }}
                    >
                        Two through-lines run through my work: books that endure, and the
                        practice of writing as a way of knowing oneself. Books I have
                        published have become worldwide bestsellers; the journaling
                        curricula I built across five years in inner-city Birmingham now
                        reach youth programmes across the UK.
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: T.type.body.size,
                            lineHeight: T.type.body.leading,
                            color: T.textSecondary,
                            fontWeight: 300,
                        }}
                    >
                        My education has taken me across four continents, studying with
                        leading philosophers and scholars of the Islamic world. I am due
                        to begin a{" "}
                        <strong style={{ fontWeight: 500, color: T.text }}>
                            master&rsquo;s degree in philosophy
                        </strong>
                        , and I run seminars throughout the year for readers, writers and
                        parents.
                    </p>
                </Reveal>
            </div>
        </Section>
    );
}
