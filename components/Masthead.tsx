import { SITE } from "./tokens";

export function Masthead() {
    return (
        <header id="top">
            <div className="masthead">
                <h1>{SITE.name}</h1>
                <p>
                    {SITE.taglineParts.map((part, i) => (
                        <span key={part} style={{ color: "inherit", padding: 0 }}>
                            {i > 0 && <span>·</span>}
                            {part}
                        </span>
                    ))}
                </p>
            </div>
        </header>
    );
}
