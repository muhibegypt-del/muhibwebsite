import { ABOUT, PHOTOS } from "./tokens";

export function About() {
    return (
        <section id="about">
            <div className="label"><span>About</span></div>
            <div className="narrow prose">
                {ABOUT.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
            <div className="pair">
                {PHOTOS.map((photo) => (
                    <figure key={photo.src}>
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                        <figcaption>{photo.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
