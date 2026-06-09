import { T } from "./tokens";
import { Reveal } from "./ui";

export function NowWriting() {
    return (
        <section
            aria-label="Current book"
            style={{
                padding: `${T.space.section}px ${T.space.page}px`,
                background: T.dark,
                color: T.bg,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: T.space.maxW,
                    margin: "0 auto",
                }}
            >
                <Reveal>
                    <span
                        style={{
                            display: "block",
                            fontFamily: T.font.body,
                            fontSize: T.type.label.size,
                            letterSpacing: T.type.label.tracking,
                            textTransform: "uppercase",
                            color: T.sand,
                            fontWeight: 500,
                            marginBottom: 22,
                        }}
                    >
                        Now writing
                    </span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2
                        style={{
                            fontFamily: T.font.display,
                            fontWeight: 400,
                            fontSize: "clamp(30px, 4.5vw, 46px)",
                            lineHeight: 1.15,
                            color: T.bg,
                            maxWidth: "18ch",
                        }}
                    >
                        <em style={{ fontStyle: "italic" }}>The Camel to Medina</em> — Essays in Migration
                    </h2>
                </Reveal>
                <Reveal delay={0.18}>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            marginTop: 24,
                            maxWidth: "52ch",
                            color: "#C9CFC9",
                            fontSize: T.type.body.size,
                            lineHeight: T.type.body.leading,
                            fontWeight: 300,
                        }}
                    >
                        A collection of essays for Muslims on movement, belonging and the journeys
                        — outward and inward — that make a life. Forthcoming.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
