import { useState, useEffect } from "react";
import { T, NAV_LINKS, SITE } from "./tokens";

function NavLink({ label, href }: { label: string; href: string }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={href}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontFamily: T.font.body,
                fontSize: 14,
                fontWeight: 400,
                color: hov ? T.accent : T.textSecondary,
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "color 0.25s",
                position: "relative",
                paddingBottom: 2,
            }}
        >
            {label}
        </a>
    );
}

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 100);
        const h = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", h, { passive: true });
        return () => {
            clearTimeout(t);
            window.removeEventListener("scroll", h);
        };
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: scrolled
                    ? `14px ${T.space.page}px`
                    : `22px ${T.space.page}px`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                background: scrolled ? "rgba(250, 250, 246, 0.88)" : "transparent",
                backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
                borderBottom: scrolled
                    ? `1px solid ${T.border}`
                    : "1px solid transparent",
                transition: `all 0.4s ${T.ease}`,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-20px)",
            }}
        >
            <a
                href="#top"
                style={{
                    fontFamily: T.font.display,
                    fontSize: 18,
                    fontWeight: 400,
                    color: T.text,
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                }}
            >
                {SITE.name}
            </a>
            <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
                {NAV_LINKS.map((l) => (
                    <NavLink key={l.label} label={l.label} href={l.href} />
                ))}
            </div>
        </nav>
    );
}
