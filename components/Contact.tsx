import { SITE } from "./tokens";

export function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="label label-center"><span>Contact</span></div>
            <p>For seminars, publishing or consultancy — or simply to say salaam:</p>
            <a className="email" href={`mailto:${SITE.email}`}>
                {SITE.email}
            </a>
        </section>
    );
}
