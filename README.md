# KanchanFlow: Marketing Site

A three-page marketing website for **KanchanFlow**, a CRM for manufacturers
covering quotes, BOMs, work orders and the shop-floor sales pipeline. Built for
the Meru Technosoft frontend assignment.

- **Live site:** _add your Vercel URL here_
- **Pages:** Home (`/`), Features (`/features`), Pricing (`/pricing`)

## Running the project

Requires [Bun](https://bun.sh) 1.3+ (or Node 20+ with npm).

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build
bun run start    # serve the production build
bun run lint
```

With npm, use `npm install` and `npm run <script>` instead.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, with design tokens defined once in `app/globals.css` |
| Fonts | `next/font/google`: Archivo, IBM Plex Sans, IBM Plex Mono |
| Images | `next/image` with Unsplash photos (AVIF/WebP, responsive `sizes`) |
| Icons | Lucide; social icons are inline SVG paths from Simple Icons (CC0) |
| Motion | CSS keyframes only, all turned off under `prefers-reduced-motion` |

No UI kit or template was used. Every component is written from scratch.

## Folder structure

```
app/                    Routes, root layout, metadata, sitemap, robots, OG image
  features/page.tsx
  pricing/page.tsx
  globals.css           Design tokens (colour, type, spacing) + base styles
components/
  ui/                   Generic building blocks: Button, Section, TextInput…
  drawing/              The drawing language: TitleBlock, DimensionLine, Callout, Stamp, Figure…
  layout/               Navbar, MobileMenu, ThemeToggle, Footer, Logo…
  shared/               Sections reused across pages: PageHero, FaqSection, CtaBanner
  sections/home/        Home-only sections (Hero, ProductTour, RevisionTable…)
  sections/features/    Features-only sections (FeatureRow, ComparisonTable…)
  sections/pricing/     Pricing-only sections (PricingPlans, BillingToggle…)
  mockups/              HTML/CSS product UI mockups (pipeline, quote, BOM…)
data/                   All page copy and content, kept apart from markup
lib/                    Small helpers: fonts, class joining, formatting, theme
docs/lighthouse/        Lighthouse mobile score screenshots
```

Each component lives in its own file. Content (features, plans, FAQs,
industries, mockup data) sits in `data/`, so copy changes never touch
component code.

## Design decisions

### Concept: the site as a set of engineering drawings

KanchanFlow's buyers live with drawings, job cards and parts lists every day,
so the site borrows their visual language instead of a generic SaaS template.
Each section uses a different drawing convention:

| Section | Drawing idea |
| --- | --- |
| Hero | A printed **job card** stamped APPROVED, plus a **dimension line** from RFQ to dispatch |
| Key figures | A drawing **title block** (the ruled box in a drawing's corner) |
| Product tour | The pipeline screen with numbered **callout balloons** |
| Problem / solution | A **revision table**: Rev A (today) vs Rev B (with KanchanFlow) |
| Modules | A **parts list** (bill of materials) with item numbers |
| Industries | Photos captioned as **figures** (FIG. 1.1, 1.2…) |
| Pricing teaser | Our prices written out as a **quotation** |
| Features page | A **sheet index**, numbered sections (2.1…), and figures framed with crop marks |
| Pricing page | Plan cards laid out like **spec sheets**, and a numbered **Notes** block |

Varying the convention per section avoids the repetitive "label, heading,
paragraph, card grid" rhythm that makes template sites feel generated.

### Colour

Light by default: steel "drafting paper" with black ink, and gold used like a
rubber stamp or highlighter pen.

| Token | Hex | Use |
| --- | --- | --- |
| `steel-100` | `#eceef1` | Page background (paper) |
| `graphite-950` | `#15171a` | Ink: text, rules, primary buttons, footer |
| `steel-300` | `#c3c9d1` | Fine rules |
| `gold-500` | `#e5a218` | Stamps, highlighter marks, button hover |
| `gold-700` | `#8a5c08` | Gold text on paper (4.9:1 contrast) |

Primary buttons are ink and turn molten gold on hover. There are no
gradients; texture comes from a faint graph-paper grid behind the page heroes.

Components never use raw palette values for surfaces and text. They use
semantic tokens (`bg-surface`, `text-ink`, `border-line-strong`,
`bg-highlight`), so the dark theme is one block of CSS variables.

### Typography

- **Archivo** (variable) for headings. Page titles run at 112% width, like
  the lettering in a title block. Section headings stay at normal width.
- **IBM Plex Sans** for body text. It's highly legible and has an engineering
  heritage that suits a credible B2B product.
- **IBM Plex Mono** for annotations: figure numbers, table labels, part and
  quote numbers.

The type scale is fluid (`text-display`, `text-h2`, `text-h3`, `text-lead`,
`text-label`) and sized with `clamp()` between 360px and 1440px. Vertical
rhythm between sections uses one token, `py-section`.

### Product mockups

The hero pipeline, quote builder, BOM tree, WhatsApp thread, reports dashboard
and mobile app are all built in HTML/CSS instead of screenshots. They stay
sharp at any size, cost no image bytes, and use believable data (Indian
customers, EN8 steel, ₹ pricing, rupee-lakh totals) whose numbers add up.
Each mockup is one `role="img"` element with a descriptive `aria-label`, so
screen readers hear a summary instead of dozens of fragments.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), one `h1`
  per page, and sections labelled by their headings.
- A skip link to the main content, and one consistent gold `:focus-visible`
  ring site-wide.
- **Mobile menu:** `aria-expanded` and `aria-controls`, focus moves into the
  menu, Escape closes it and returns focus, page scroll is locked while it's
  open, and it closes automatically past the tablet breakpoint.
- **FAQ accordion:** real buttons inside headings, `aria-expanded`, labelled
  regions, and collapsed answers are `inert` so they can't be tabbed into.
- **Billing toggle:** native radio inputs styled as a segmented control, so
  keyboard and screen reader support comes for free.
- **Revision table:** a real `<table>` with a caption and row headers; on
  phones each row stacks and `data-label` shows the column name.
- **Comparison table:** a caption, `scope` on headers, icon cells with
  screen-reader text, and a focusable scroll region on small screens (the page
  itself never scrolls sideways).
- **Forms:** a visible label, `aria-invalid`, an error message linked with
  `aria-describedby`, and a `role="status"` success message.
- Body text contrast is at least 4.5:1 in both themes.

## SEO

- A unique `title` and `description` per page through the Metadata API, with
  a title template, canonical URLs, and Open Graph and Twitter tags.
- A generated Open Graph image (`app/opengraph-image.tsx`), plus `sitemap.xml`
  and `robots.txt`.
- Descriptive link text, for example "BOM management details" instead of
  "Learn more".

## Performance

Lighthouse (mobile), on a local production build:

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Home | 92 | 100 | 100 | 100 |
| Features | 95 | 100 | 100 | 100 |
| Pricing | 91 | 100 | 100 | 100 |

Screenshots are in [`docs/lighthouse/`](docs/lighthouse). What helped:

- Every page is statically prerendered.
- Fonts are self-hosted through `next/font` with `display: swap`.
- Images are lazy-loaded and served as AVIF/WebP at responsive sizes.
- Mockups are HTML instead of images.
- Hero text has no entrance animation. It's the LCP element, so it paints at
  once. Only the decorative stamp and dimension line animate.

## Bonus features

- **Dark mode toggle:** opt-in from the navbar (light paper is the default).
  The choice is saved to `localStorage`, and a tiny inline script applies it
  before first paint, so there's no flash of the wrong theme.
- **Small animated hero:** the dimension line draws itself from RFQ to
  dispatch, and the APPROVED stamp lands on the job card, telling the
  product story in one moment.

## Assumptions

- **Audience and currency:** KanchanFlow sells to Indian SME manufacturers, so
  pricing is in ₹ (per user per month, excluding GST), and the copy references
  Tally, MIDC estates and WhatsApp-first communication.
- **Plans:** Workshop (₹999 monthly / ₹799 annual), Factory (₹1,899 /
  ₹1,499) and Enterprise (custom). Annual billing saves 20% and is selected by
  default.
- **No sign-up flow:** the brief is frontend-only, so "Start free trial" goes
  to the pricing plans, and plan CTAs open a pre-filled email to sales.
- **Illustrative content:** customer names, stats ("640+ plants", "6 days to
  go live") and mockup data are placeholders that sound realistic for a
  fictional brand.
- **Newsletter form:** it validates on the client and simulates a network
  request, since there's no backend.
- **Footer links:** footer and social links point to real sections on the
  site or to placeholder profiles, as the brief allows.

## What I'd improve with more time

- A real "Book a demo" page with a date and time slot picker, and a form
  wired to an email or CRM endpoint.
- Customer case studies and logos once real customers exist, plus a
  testimonials section.
- Scroll-triggered reveals using the View Transitions or Intersection Observer
  APIs (still respecting reduced motion), and smooth page transitions.
- Self-host the Unsplash photos in a CDN with blur placeholders to cut LCP
  further on slow networks.
- Visual regression tests (Playwright screenshots at the four breakpoints) and
  automated axe checks in CI.
- An MDX blog for the "Shop Floor Notes" content, for SEO.
