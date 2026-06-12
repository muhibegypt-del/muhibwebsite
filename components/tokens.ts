/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS + CONTENT
   ═══════════════════════════════════════════════════════════════ */

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (path: string) => `${BASE}${path}`;

export const T = {
  bg: "#FAF7F0",
  ink: "#1C2B2D",
  tealDeep: "#14424A",
  teal: "#2E8B94",
  ochre: "#C9952E",
  faint: "#8A8579",
  rule: "#DDD6C7",
} as const;

export const SITE = {
  name: "Muhib Idris",
  email: "hello@muhibidris.com",
  cities: "Kuala Lumpur & Manchester",
  taglineParts: ["Publisher", "Writer", "Educator", "Kuala Lumpur & Manchester"],
};

export const ABOUT = [
  "Muhib Idris is a publisher, writer and educator based between Kuala Lumpur and Manchester. He has been writing for fifteen years — publishing books, appearing on television and radio, and advising Muslim charities and public figures. He serves as COO of Briggs Book Club and of The Latif Foundation, a charity.",
  "His teaching draws on years of study with scholars of the Islamic tradition across four continents. He has taught at Blue Lantern, at Mukha Tree and Mukha Cafe in Malaysia, and as a guest lecturer on Soul Caravan retreats in Morocco; he leads men's retreats and day-long journalling retreats, and recently delivered a seminar on Malcolm X for Imam Ghazali Publications.",
  "He is currently reading for an MA in philosophy.",
];

export const BOOK = {
  kicker: "Forthcoming 2026",
  title: "The Camel to Medina",
  subtitle: "Essays on Meaning, Migration & Movement",
  desc: "Essays on the British Muslim experience, the rise of Islamophobia, and the longing for hijra — on what it means to stay, to leave, and to belong.",
  attribution: "Muhib Idris",
};

export const SEMINARS = [
  {
    tag: "Seminar series",
    title: "The History of Muslims in Britain",
    desc: "The story we were never taught — sources, people, and how we got here.",
  },
  {
    tag: "Seminar series",
    title: "The Way Back: Restoring Your Relationship with Your Teen",
    desc: "For parents and anyone who works with young people.",
  },
];

export const PHOTOS = [
  {
    src: asset("/images/photo-1.jpg"),
    alt: "Muhib Idris in conversation alongside a shaykh",
    caption: "In conversation, Kuala Lumpur",
  },
  {
    src: asset("/images/photo-2.jpg"),
    alt: "Muhib Idris speaking to an audience",
    caption: "Teaching, Kuala Lumpur",
  },
  {
    src: asset("/images/photo-3.jpg"),
    alt: "Muhib Idris leading a journalling retreat",
    caption: "Leading a single-day journalling retreat, Kuala Lumpur",
  },
  {
    src: asset("/images/photo-4.jpg"),
    alt: "Muhib Idris walking with Shaykh Mustafa Briggs",
    caption: "With Shaykh Mustafa Briggs, en route to a radio interview",
  },
];

export const HERO_IMG = {
  src: asset("/images/hero.jpg"),
  alt: "Muhib Idris teaching a seminar at Imam Ghazali Publications",
};
