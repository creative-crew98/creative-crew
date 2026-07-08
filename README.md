# Creative Crew — Website

A React + Vite + Tailwind CSS site with real page routing (react-router-dom) and
fade animations (framer-motion).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/siteData.js       ← EDIT HERE for all text, links, prices, team, testimonials, etc.
  components/            ← shared UI: Navbar, Footer, CtaBanner, SectionHeading, Reveal...
  pages/                 ← one file per route: Home, About, Services, Portfolio, Contact
  App.jsx                ← routes are defined here
  main.jsx               ← app entry point
```

## How to edit content

Almost everything on the site (nav links, footer links, services, team members,
testimonials, FAQs, portfolio items, stats, timeline, contact details) lives in
**`src/data/siteData.js`**. Change the text or arrays there and every page that
uses it updates automatically — no need to touch component code.

## How routing works

Each page in `src/pages/` maps to a route declared in `src/App.jsx`:

| Route         | File                  |
|---------------|-----------------------|
| `/`           | `src/pages/Home.jsx`      |
| `/about`      | `src/pages/About.jsx`     |
| `/services`   | `src/pages/Services.jsx`  |
| `/portfolio`  | `src/pages/Portfolio.jsx` |
| `/contact`    | `src/pages/Contact.jsx`   |

Navbar and Footer links are generated from `navLinks` / `footerColumns` in
`siteData.js`, so adding a new route + a new entry in that array is all you
need to add a new page to the whole site's navigation.

## Animations

- **Page transitions**: every page is wrapped in `<PageTransition>` — a
  fade + slight rise-in that plays whenever you navigate to a new route.
  Tweak the animation in `src/components/PageTransition.jsx`.
- **Scroll reveals**: sections and cards are wrapped in `<Reveal>` — they fade
  and rise into view the first time they scroll into the viewport. Tweak in
  `src/components/Reveal.jsx`.
- Both respect the visitor's OS-level "reduce motion" setting.

## Connecting the contact form

The form in `src/pages/Contact.jsx` currently only validates and shows a
success state locally. To actually send messages, wire the `handleSubmit`
function up to a service like Formspree, Resend, or your own API endpoint.

## Notes

- Images currently use free Unsplash placeholder photos — swap the `img` URLs
  in `siteData.js` for your own assets whenever you're ready.
- Icons are from [lucide-react](https://lucide.dev); swap any icon by
  importing a different name.
