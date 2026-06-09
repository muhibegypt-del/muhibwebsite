/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
   Single source of truth for colors, typography, spacing, and motion.
   ═══════════════════════════════════════════════════════════════ */

export const T = {
  // ── Colors ──────────────────────────────────────────
  bg: "#FAFAF6",
  surface: "#FFFFFF",
  dark: "#17211C",
  darkSoft: "#1F2A24",
  text: "#17211C",
  textSecondary: "#3D4A43",
  textTertiary: "#6F7973",
  border: "#D9DAD2",
  borderHover: "#C9CABF",
  borderStrong: "#B9BAAD",
  accent: "#2E5E4B",
  accentSoft: "#E8EDE5",
  sand: "#B9A77E",
  sandSoft: "#E8E0CD",

  // ── Radii ───────────────────────────────────────────
  radius: { sm: 8, md: 12, lg: 20, xl: 28, full: 9999 },

  // ── Typography ──────────────────────────────────────
  font: {
    display: "'Marcellus', Georgia, 'Times New Roman', serif",
    body: "'Newsreader', Georgia, 'Times New Roman', serif",
  },
  type: {
    h1:      { size: "clamp(44px, 6.4vw, 74px)", weight: 400, leading: 1.06, tracking: "0.005em" },
    h2:      { size: "clamp(30px, 3.6vw, 48px)", weight: 400, leading: 1.12, tracking: "0.005em" },
    h3:      { size: 22, weight: 400, leading: 1.25, tracking: "0.005em" },
    quote:   { size: "clamp(26px, 3.2vw, 42px)", weight: 400, leading: 1.25, tracking: "0.005em" },
    body:    { size: 17, weight: 300, leading: 1.7, tracking: "0em" },
    bodySmall: { size: 15, weight: 300, leading: 1.65, tracking: "0em" },
    caption: { size: 13, weight: 500, leading: 1.4, tracking: "0.02em" },
    label:   { size: 11.5, weight: 500, leading: 1.2, tracking: "0.22em" },
    small:   { size: 12.5, weight: 400, leading: 1.4, tracking: "0.02em" },
  },

  // ── Spacing (semantic) ──────────────────────────────
  space: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 48,
    xl: 80,
    section: 110,
    sectionSm: 72,
    page: 48,
    pageMobile: 20,
    pageXs: 16,
    maxW: 1100,
    cardPad: 24,
    cardGap: 20,
    tagGap: 22,
    headingGap: 44,
    prose: 640,
    proseWide: 880,
  },

  // ── Breakpoints ─────────────────────────────────────
  bp: {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
  },

  // ── Easing ──────────────────────────────────────────
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

/* ═══════════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════════ */

export const JOURNEY = [
  "Birmingham",
  "Fes",
  "Granada",
  "Nouakchott",
  "Dakar",
  "Kuala Lumpur",
  "New York",
  "Medina",
];

export const WORK = [
  {
    title: "Publishing",
    sub: "Books · Authors",
    desc: "I commission and publish books, and stay close to the writers I work with long after the print run.",
  },
  {
    title: "Journaling pedagogy",
    sub: "Youth education",
    desc: "Curricula and teaching methods built across five years in inner-city Birmingham youth centres, now used by youth programmes across the UK.",
  },
  {
    title: "Charity consultancy",
    sub: "Campaigns · Copy",
    desc: "I help charities clarify their message — campaigns, copy, and the way they ask.",
  },
  {
    title: "Seminars",
    sub: "Year-round",
    desc: "For readers, writers and parents, drawing on years of study with scholars across the Muslim world.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const SITE = {
  name: "Muhib Idris",
  tagline: "Independent Publisher · Educator · Birmingham",
  email: "hello@muhibidris.com",
  city: "Birmingham, United Kingdom",
};
