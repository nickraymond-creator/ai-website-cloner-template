# Stripe Design Tokens

Extracted from stripe.com/au via WebFetch + design system research.

## Typography

### Font Families
- **Body/UI:** `sohne-var, "Helvetica Neue", Arial, sans-serif`
  → Clone uses **Inter** (Google Fonts) as closest free substitute
- **Mono/Code:** `sohne-mono-var, "Courier New", monospace`
  → Clone uses **JetBrains Mono** (Google Fonts)

### Font Weights Used
- 400 — body text, secondary labels
- 500 — nav links, button labels, card titles
- 600 — subheadings, stat labels
- 700 — section headings
- 800 — hero headline

### Font Sizes (approximate from visual inspection)
- Hero h1: ~56px (desktop), ~36px (mobile)
- Section h2: ~40px (desktop), ~28px (mobile)
- Section h3: ~24px
- Body: ~17px
- Small/label: ~14px
- Caption: ~12px

## Colors

### Brand Palette
| Name | Hex | Usage |
|------|-----|-------|
| Stripe Indigo | `#635BFF` | Primary CTA buttons, links, highlights |
| Downriver | `#0A2540` | Dark section backgrounds, enterprise section |
| Black Squeeze | `#F6F9FC` | Light section backgrounds |
| White | `#FFFFFF` | Cards, nav background (scrolled) |
| Cyan | `#1CA8FF` | Gradient accent |
| Slate | `#425466` | Body text on light backgrounds |
| Muted | `#6B7C93` | Secondary/muted text |
| Border | `#E3E8EE` | Card borders, dividers |

### Hero Gradient
```css
background: linear-gradient(120deg, #5E46BF, #1CA8FF, #5533FF, #84F6D5);
```
Background image overlay: `wave-fallback-desktop.png` from stripeassets.com

### Section Backgrounds
- Hero: `#0A2540` base with gradient mesh + wave image
- Carousel/logo section: `#FFFFFF`
- Solutions bento: `#F6F9FC`
- Stats ("backbone"): `#0A2540` (dark)
- Enterprise: `#FFFFFF`
- Support: `#F6F9FC`
- Startups: `#0A2540` (dark)
- Platform: `#0A2540` (dark)
- Testimonials: `#FFFFFF`
- Developer: `#F6F9FC`
- News: `#FFFFFF`
- Book: `#0A2540` (dark)
- Final CTA: `#635BFF` (indigo)
- Footer: `#0A2540` (dark)

## Spacing
Base unit: 8px
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px
- section-padding-y: 96px (desktop), 64px (mobile)
- container-max-width: 1200px
- container-padding-x: 24px (desktop), 16px (mobile)

## Border Radius
- buttons: 6px
- cards: 8px
- large cards/bento: 12px
- pill badges: 100px

## Shadows
- card: `0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)`
- elevated card: `0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)`
- nav (scrolled): `0 2px 12px rgba(0,0,0,0.08)`

## Animations
- Fade-up on scroll: `translateY(20px) → translateY(0)`, opacity 0→1, 0.4s ease
- CTA button hover: slight scale(1.02) + brightness
- Nav transition on scroll: background fade-in 0.2s ease
- Logo carousel: continuous horizontal scroll (marquee)
- Tab/accordion transitions: 0.25s ease height + opacity
