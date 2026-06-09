# Muhib Idris — Writer, Educator, Researcher

An editorial Next.js website for [muhibidris.com](https://www.muhibidris.com).

## Design

- **Typography**: Marcellus (display) + Newsreader (body) via Google Fonts
- **Color**: Deep ink `#17211C` + paper `#FAFAF6` + green accent `#2E5E4B` + sand `#B9A77E`
- **Motion**: Scroll-triggered reveals, magnetic buttons, sand-dotted rule between cities
- **Principles**: Editorial restraint, generous negative space, serif quietness

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Project Structure

```
├── app/
│   ├── globals.css       # Reset + global styles + keyframes
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   └── page.tsx          # Homepage — composes all sections
├── components/
│   ├── tokens.ts         # Design tokens + content
│   ├── hooks.ts          # useReveal, useMagnetic, useScrollProgress
│   ├── ui.tsx            # Reveal, Tag, Section, Btn, Arr
│   ├── Nav.tsx           # Frosted glass navigation
│   ├── Hero.tsx          # Editorial hero with staggered entrance
│   ├── Journey.tsx       # Dotted strip of cities studied & worked
│   ├── About.tsx         # Three-paragraph biography
│   ├── Work.tsx          # Four-item work list
│   ├── NowWriting.tsx    # Full-bleed dark current-book feature
│   ├── Contact.tsx       # Email contact
│   └── Footer.tsx        # Footer
├── tsconfig.json
└── package.json
```
