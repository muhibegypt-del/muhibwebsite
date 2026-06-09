"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui";
import { T } from "@/components/tokens";

export default function Home() {
  return (
    <main
      id="top"
      style={{
        background: T.bg,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <ScrollProgress />
      <Nav />
      <Hero />
      <Journey />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
