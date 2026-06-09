import { T, SITE } from "./tokens";

export function Footer() {
    return (
        <footer
            style={{
                borderTop: `1px solid ${T.border}`,
                padding: `30px ${T.space.page}px 38px`,
                maxWidth: T.space.maxW,
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 8,
            }}
        >
            <span
                style={{
                    fontFamily: T.font.body,
                    fontSize: 12.5,
                    letterSpacing: "0.08em",
                    color: T.textSecondary,
                    fontWeight: 400,
                }}
            >
                © {new Date().getFullYear()} {SITE.name}
            </span>
            <span
                style={{
                    fontFamily: T.font.body,
                    fontSize: 12.5,
                    letterSpacing: "0.08em",
                    color: T.textSecondary,
                    fontWeight: 400,
                }}
            >
                {SITE.city}
            </span>
        </footer>
    );
}
