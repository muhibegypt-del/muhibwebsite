import { HERO_IMG } from "./tokens";

export function HeroImage() {
    return (
        <div className="hero-photo">
            <img src={HERO_IMG.src} alt={HERO_IMG.alt} />
        </div>
    );
}
