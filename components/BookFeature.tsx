import { BOOK } from "./tokens";

export function BookFeature() {
    return (
        <section id="book">
            <div className="book">
                <div className="kicker">{BOOK.kicker}</div>
                <h2>{BOOK.title}</h2>
                <div className="subtitle">{BOOK.subtitle}</div>
                <p className="desc">{BOOK.desc}</p>
                <div className="year">{BOOK.attribution}</div>
            </div>
        </section>
    );
}
