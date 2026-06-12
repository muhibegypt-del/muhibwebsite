import { SEMINARS } from "./tokens";

export function Seminars() {
    return (
        <section id="year">
            <div className="label"><span>This Year</span></div>
            <div className="narrow">
                {SEMINARS.map((s) => (
                    <div className="seminar" key={s.title}>
                        <div className="tag">{s.tag}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
                <p className="year-note">
                    To hear when and where, get in touch below.
                </p>
            </div>
        </section>
    );
}
