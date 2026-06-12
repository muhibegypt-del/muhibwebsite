import { SITE } from "./tokens";

export function Footer() {
    return (
        <footer>
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <span>{SITE.cities}</span>
        </footer>
    );
}
