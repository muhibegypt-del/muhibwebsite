import { useState, useEffect } from "react";
import { T, SITE } from "./tokens";

export function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 200);
        return () => clearTimeout(t);
    }, []);

    const fu = (d: number) => ({
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translate3d(0,0,0)" : "translate3d(0,18px,0)",
        transition: `opacity 0.8s ${T.ease} ${d}s, transform 0.8s ${T.ease} ${d}s`,
    });

    return (
        <section
            className="hero"
            style={{
                padding: `190px ${T.space.page}px 130px`,
                maxWidth: T.space.maxW,
                margin: "0 auto",
            }}
        >
            <div>
                <span
                    style={{
                        display: "block",
                        fontFamily: T.font.body,
                        fontSize: T.type.label.size,
                        letterSpacing: T.type.label.tracking,
                        textTransform: "uppercase",
                        color: T.textSecondary,
                        fontWeight: 500,
                        marginBottom: 28,
                        ...fu(0.15),
                    }}
                >
                    {SITE.tagline}
                </span>
                <h1
                    style={{
                        fontFamily: T.font.display,
                        fontWeight: T.type.h1.weight,
                        fontSize: T.type.h1.size,
                        lineHeight: T.type.h1.leading,
                        letterSpacing: T.type.h1.tracking,
                        color: T.text,
                        maxWidth: "14ch",
                        ...fu(0.3),
                    }}
                >
                    Words, carefully kept, change the people who keep them.
                </h1>
                <p
                    style={{
                        fontFamily: T.font.body,
                        marginTop: 34,
                        maxWidth: "46ch",
                        fontSize: "clamp(19px, 2.2vw, 22px)",
                        lineHeight: 1.55,
                        color: T.textSecondary,
                        fontWeight: 300,
                        ...fu(0.45),
                    }}
                >
                    I&rsquo;m Muhib Idris — a writer and educator of fifteen years, working at the meeting point of{" "}
                    <em style={{ fontStyle: "italic", color: T.text }}>
                        journaling, pedagogy and the essay
                    </em>
                    .
                </p>
            </div>
        </section>
    );
}
