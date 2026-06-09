import { T, JOURNEY } from "./tokens";

export function Journey() {
    return (
        <section
            aria-label="Places studied and worked"
            style={{
                borderTop: `1px solid ${T.border}`,
                borderBottom: `1px solid ${T.border}`,
                padding: "16px 0",
                overflow: "hidden",
            }}
        >
            <div
                className="journey-row"
                style={{
                    maxWidth: T.space.maxW,
                    margin: "0 auto",
                    padding: `0 ${T.space.page}px`,
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "6px 0",
                }}
            >
                {JOURNEY.map((city, i) => {
                    const isLast = i === JOURNEY.length - 1;
                    return (
                        <span
                            key={city}
                            style={{
                                fontFamily: T.font.body,
                                fontSize: T.type.label.size,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: isLast ? T.accent : T.textSecondary,
                                whiteSpace: "nowrap",
                                display: "inline-flex",
                                alignItems: "center",
                                fontWeight: 500,
                            }}
                        >
                            {i > 0 && (
                                <span
                                    aria-hidden
                                    style={{
                                        display: "inline-block",
                                        width: "2.4rem",
                                        height: 1,
                                        margin: "0 .9rem",
                                        backgroundImage: `linear-gradient(to right, ${T.sand} 40%, transparent 0%)`,
                                        backgroundSize: "6px 1px",
                                        backgroundRepeat: "repeat-x",
                                    }}
                                />
                            )}
                            {city}
                        </span>
                    );
                })}
            </div>
        </section>
    );
}
