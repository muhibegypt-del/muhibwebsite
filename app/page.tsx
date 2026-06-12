import { Masthead } from "@/components/Masthead";
import { HeroImage } from "@/components/HeroImage";
import { About } from "@/components/About";
import { BookFeature } from "@/components/BookFeature";
import { Seminars } from "@/components/Seminars";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Masthead />
      <HeroImage />
      <main className="wrap">
        <About />
        <BookFeature />
        <Seminars />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
