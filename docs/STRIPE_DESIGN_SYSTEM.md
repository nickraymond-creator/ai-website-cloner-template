# Stripe Design System
> Extracted from stripe.com/au — reverse-engineered for the clone project.

---

## Typography

### Typefaces
| Role | Stripe Original | Clone Substitute |
|------|----------------|-----------------|
| Body / UI | `sohne-var, "Helvetica Neue", Arial, sans-serif` | **Inter** (Google Fonts) |
| Code / Mono | `sohne-mono-var, "Courier New", monospace` | **JetBrains Mono** (Google Fonts) |

Inter is the closest free match to Sohne — same geometric proportions, similar weight distribution.

### Scale
| Token | Size (desktop) | Size (mobile) | Weight | Usage |
|-------|---------------|--------------|--------|-------|
| `hero-h1` | 56px | 36px | 800 | Hero headline |
| `section-h2` | 40px | 28px | 700 | Section headings |
| `card-h3` | 24px | 20px | 600 | Card titles, subheadings |
| `body` | 17px | 17px | 400 | Body copy |
| `label` | 15px | 15px | 500 | Nav links, button labels |
| `small` | 14px | 14px | 400 | Secondary labels |
| `caption` | 12px | 12px | 400 | Timestamps, metadata |

### Key Properties
- **Letter spacing:** `-0.02em` on headings, `-0.03em` on wordmark/logo
- **Line height:** `1.15` headings, `1.6` body
- **Anti-aliasing:** `-webkit-font-smoothing: antialiased`

---

## Color

### Brand Palette
| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Stripe Indigo | `#635BFF` | `--stripe-indigo` | Primary buttons, links, highlights, final CTA section bg |
| Downriver | `#0A2540` | `--stripe-dark` | Dark section backgrounds, footer, headings on light |
| Black Squeeze | `#F6F9FC` | `--stripe-light` | Light section backgrounds |
| White | `#FFFFFF` | — | Cards, nav (scrolled), enterprise section |
| Cyan | `#1CA8FF` | `--stripe-cyan` | Gradient accent, hero |
| Slate | `#425466` | `--stripe-slate` | Body text on light backgrounds |
| Muted | `#6B7C93` | `--stripe-muted` | Secondary/muted text |
| Border | `#E3E8EE` | `--stripe-border` | Card borders, dividers |
| Indigo Hover | `#7B73FF` | `--stripe-indigo-hover` | Primary button hover state |

### Gradients
```css
/* Hero background */
linear-gradient(120deg, #5E46BF, #1CA8FF, #5533FF, #84F6D5)

/* Hero is also layered with wave-fallback-desktop.png from stripeassets.com */
```

### Section Background Map
| Section | Background | Text |
|---------|-----------|------|
| Hero | `#0A2540` + gradient mesh + wave image | White |
| Logo Carousel | `#FFFFFF` | Dark |
| Solutions Bento | `#F6F9FC` | Dark |
| Stats | `#0A2540` | White |
| Enterprise | `#FFFFFF` | Dark |
| Support | `#F6F9FC` | Dark |
| Startups | `#0A2540` | White |
| Platform | `#0A2540` | White |
| Testimonials | `#FFFFFF` | Dark |
| Developer | `#F6F9FC` | Dark |
| News | `#FFFFFF` | Dark |
| Book | `#0A2540` | White |
| Final CTA | `#635BFF` | White |
| Footer | `#0A2540` | White |

The alternating dark/light/dark rhythm is intentional — it creates visual cadence and separates sections without hard borders.

---

## Spacing

Base unit: **8px**

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Icon gaps, tight padding |
| `sm` | 8px | Internal component spacing |
| `md` | 16px | Standard element gaps |
| `lg` | 24px | Container padding (desktop) |
| `xl` | 32px | Card padding, component gaps |
| `2xl` | 48px | Section sub-group gaps |
| `3xl` | 64px | Section padding (mobile) |
| `4xl` | 96px | Section padding (desktop) |

### Container
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;          /* desktop */
padding: 0 16px;          /* mobile (< 768px) */
```

### Section Padding
```css
padding: 96px 0;          /* desktop */
padding: 64px 0;          /* mobile (< 768px) */
```

---

## Border Radius
| Context | Value |
|---------|-------|
| Buttons | 6px |
| Cards (small) | 8px |
| Cards (bento / large) | 12px |
| Pill badges / tags | 100px |

---

## Shadows / Elevation
| Name | Value |
|------|-------|
| Card (resting) | `0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)` |
| Card (hover/elevated) | `0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)` |
| Nav (scrolled) | `0 2px 12px rgba(0,0,0,0.08)` |

---

## Buttons

### Primary
```css
background: #635BFF;
color: #FFFFFF;
font-size: 15px;
font-weight: 500;
padding: 10px 20px;
border-radius: 6px;
transition: background-color 0.15s ease, transform 0.15s ease;

/* Hover */
background: #7B73FF;
transform: scale(1.01);
```

### Secondary (on dark backgrounds)
```css
background: transparent;
color: #FFFFFF;
border: 1.5px solid rgba(255,255,255,0.3);
padding: 10px 20px;
border-radius: 6px;

/* Hover */
border-color: rgba(255,255,255,0.6);
background: rgba(255,255,255,0.05);
```

### Ghost (on light backgrounds)
```css
background: transparent;
color: #635BFF;
border: 1.5px solid #635BFF;
padding: 10px 20px;
border-radius: 6px;

/* Hover */
background: rgba(99,91,255,0.06);
```

### Arrow Link
```css
color: #635BFF;
font-weight: 500;
font-size: 15px;
display: inline-flex;
align-items: center;
gap: 4px;
transition: gap 0.15s ease;

/* Hover */
gap: 8px;   /* arrow shifts right */
```

---

## Cards

### Standard Card
```css
background: #FFFFFF;
border: 1px solid #E3E8EE;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
overflow: hidden;
transition: box-shadow 0.2s ease, transform 0.2s ease;

/* Hover */
box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
transform: translateY(-2px);
```

---

## Animations

### Scroll-in (fade up)
Elements enter from below when they enter the viewport.
```css
/* Initial state (IntersectionObserver sets this) */
opacity: 0;
transform: translateY(20px);

/* Revealed state */
opacity: 1;
transform: translateY(0);
transition: opacity 0.4s ease, transform 0.4s ease;

/* Stagger delay: 0.1s per child */
```

### Hero Gradient Shift
```css
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
background-size: 400% 400%;
animation: gradientShift 8s ease infinite;
```

### Logo Carousel (Marquee)
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
animation: marquee 40s linear infinite;

/* Pause on hover */
&:hover { animation-play-state: paused; }
```
Two copies of the logo list are rendered side-by-side — when the first completes its scroll, the second takes over seamlessly.

### Nav Scroll Transition
```css
/* At top */
background: transparent;
box-shadow: none;

/* After scrollY > 20px */
background: #FFFFFF;
box-shadow: 0 2px 12px rgba(0,0,0,0.08);
transition: background 0.2s ease, box-shadow 0.2s ease;
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout behavior |
|-----------|-------|----------------|
| Mobile | < 768px | Single column, stacked |
| Tablet | 768px–1024px | 2 columns where applicable |
| Desktop | > 1024px | Full multi-column |
| Wide | > 1440px | Maxes at 1200px container |

### Key Responsive Changes
| Component | Desktop | Mobile |
|-----------|---------|--------|
| Navbar | Full links + CTAs | Hamburger menu |
| Hero h1 | 56px | 36px |
| Solutions bento | 3×2 grid | Single column stack |
| Stats | 4-column row | 2×2 then single column |
| Enterprise accordion | Image + text side-by-side | Stacked |
| Testimonials | 4 cards visible | 1 card + prev/next arrows |
| News | 3 cards visible | 1 card + prev/next arrows |
| Footer | 7-column link grid | 2-column then single column |

---

## Page Architecture

### Section Order
```
Navbar (fixed, z-50)
├── Hero           — dark,   #0A2540 + gradient
├── Logo Carousel  — white,  #FFFFFF
├── Solutions      — light,  #F6F9FC
├── Stats          — dark,   #0A2540
├── Enterprise     — white,  #FFFFFF
├── Support        — light,  #F6F9FC
├── Startups       — dark,   #0A2540
├── Platform       — dark,   #0A2540
├── Testimonials   — white,  #FFFFFF
├── Developer      — light,  #F6F9FC
├── News           — white,  #FFFFFF
├── Book           — dark,   #0A2540
├── Final CTA      — indigo, #635BFF
└── Footer         — dark,   #0A2540
```

### Z-Index Layers
| Layer | z-index |
|-------|---------|
| Footer | 0 |
| Page content | 10 |
| Sticky navbar | 50 |

---

## Component Interaction Models

| Component | Trigger | Animation |
|-----------|---------|-----------|
| Navbar | scroll > 20px | bg + shadow fade, 0.2s ease |
| Section content | IntersectionObserver (threshold 0.1) | fadeUp 0.4s ease, staggered 0.1s |
| Logo carousel | time-based | marquee 40s linear infinite |
| Enterprise accordion | click | height + opacity, 0.3s ease |
| Testimonials | click arrows | translateX slide, 0.3s ease |
| News carousel | click arrows | scroll, 0.3s ease |
| Cards | hover | translateY(-2px) + elevated shadow, 0.2s ease |
| Primary button | hover | bg lighten + scale(1.01), 0.15s ease |
| Arrow link | hover | gap 4px → 8px, 0.15s ease |
| Footer links | hover | color `#8898AA` → `#FFFFFF`, 0.15s ease |

---

## Assets

All images live in `public/images/`. CDN source: `images.stripeassets.com` (Imgix-powered — strip query params for full resolution).

| File | Section | Dimensions |
|------|---------|-----------|
| `wave-fallback-desktop.png` | Hero background | 1392px wide |
| `payment-bento-background.jpg` | Solutions — Payments card | 860px wide |
| `connect-bento-background.jpg` | Solutions — Connect card | — |
| `dataviz-static.png` | Stats section | — |
| `enterprise-hertz.png` | Enterprise — Hertz | — |
| `enterprise-urbn.png` | Enterprise — URBN | — |
| `enterprise-instacart.png` | Enterprise — Instacart | — |
| `enterprise-lemonde.png` | Enterprise — Le Monde | — |
| `platform-graphic-background.png` | Platform section | — |
| `news-*.png` (7 files) | News cards | — |
| `book-how-buildings-learn.png` | Book section | — |
| `work-in-progress-icon.png` | Various | — |
| `favicon.svg` | Browser tab | — |

---

## CSS Custom Properties Reference

```css
:root {
  /* Brand */
  --stripe-indigo:       #635BFF;
  --stripe-indigo-hover: #7B73FF;
  --stripe-dark:         #0A2540;
  --stripe-light:        #F6F9FC;
  --stripe-cyan:         #1CA8FF;
  --stripe-slate:        #425466;
  --stripe-muted:        #6B7C93;
  --stripe-border:       #E3E8EE;

  /* shadcn tokens (mapped to Stripe palette) */
  --background:          #FFFFFF;
  --foreground:          #0A2540;
  --primary:             #635BFF;
  --primary-foreground:  #FFFFFF;
  --secondary:           #F6F9FC;
  --muted:               #F6F9FC;
  --muted-foreground:    #6B7C93;
  --border:              #E3E8EE;
  --ring:                #635BFF;
  --radius:              0.5rem;

  /* Hero gradient */
  --stripe-gradient: linear-gradient(120deg, #5E46BF, #1CA8FF, #5533FF, #84F6D5);
}
```
