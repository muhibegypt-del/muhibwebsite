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
                        For more than a decade I have made my living by the written word — as
                        an author, a teacher of journaling, and a consultant to charities on
                        their campaigns and copy.
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
                        I spent five years as a journaling instructor, and went on to design
                        curricula and pedagogy for youth centres in inner-city Birmingham —
                        teaching young people to put their inner lives on paper, and watching
                        what happens when they do. That work now reaches youth programmes
                        across the UK.
                    </p>
                </Reveal>
                <Reveal delay={0.15}>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: T.type.body.size,
                            lineHeight: T.type.body.leading,
                            color: T.textSecondary,
                            fontWeight: 300,
                        }}
                    >
                        My published essays have reached the{" "}
                        <strong style={{ fontWeight: 500, color: T.text }}>
                            Amazon bestseller lists
                        </strong>
                        , and my education has taken me across four continents, studying
                        with some of the leading philosophers and scholars of the Islamic
                        world. I am due to begin a{" "}
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
