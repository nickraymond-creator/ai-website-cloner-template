# Stripe AU — Behavior Bible

## Global Behaviors

### Scroll-triggered navbar
- **Trigger:** Page scroll > ~20px
- **State A (top):** background: transparent, no shadow, white text/logo
- **State B (scrolled):** background: #FFFFFF, box-shadow: 0 2px 12px rgba(0,0,0,0.08), dark text
- **Transition:** background 0.2s ease, box-shadow 0.2s ease
- **Implementation:** JS scroll listener + CSS transition on nav element

### Scroll-in animations (section content)
- **Trigger:** Element enters viewport (IntersectionObserver, threshold ~0.1)
- **State A:** opacity: 0, transform: translateY(20px)
- **State B:** opacity: 1, transform: translateY(0)
- **Transition:** 0.4s ease, staggered 0.1s per child
- **Implementation:** IntersectionObserver + CSS class toggle

## Section-Specific Behaviors

### Logo Carousel (section 2)
- **Type:** Continuous horizontal auto-scroll (marquee)
- **Direction:** right to left, infinite loop
- **Speed:** ~40s per full cycle
- **Pause on hover:** yes
- **Implementation:** CSS animation `@keyframes marquee` with `animation-play-state: paused` on hover
- **Content:** Two copies of logo list for seamless loop

### Enterprise Accordion (section 5)
- **Type:** Click-driven vertical accordion / tabs
- **Default state:** First case study (Hertz) open
- **Behavior:** Click a case study title → expands with image + stats visible
- **Animation:** height transition 0.3s ease, opacity 0.3s ease
- **Implementation:** React useState, CSS max-height transition

### Testimonials Carousel (section 9)
- **Type:** Click-driven horizontal carousel (4 cards visible on desktop)
- **Navigation:** Previous/next arrow buttons
- **Mobile:** Single card, swipeable
- **Animation:** slide left/right, 0.3s ease
- **Implementation:** React useState + CSS transform/translateX

### News Carousel (section 11)
- **Type:** Click-driven horizontal scroll (shows ~3-4 cards at once on desktop)
- **Navigation:** Previous/next arrow buttons
- **Animation:** scroll left/right, 0.3s ease
- **Implementation:** React useState + CSS scroll behavior

## Hover States

### Primary CTA Button (#635BFF)
- Background: #635BFF → #7B73FF (lighter on hover)
- Transform: scale(1.01)
- Transition: 0.15s ease

### Secondary/Ghost Button
- Border: #635BFF
- Background: transparent → rgba(99,91,255,0.06)
- Transition: 0.15s ease

### Nav links
- Color: inherit → #635BFF
- Transition: 0.15s ease

### Card hover (bento/solution cards)
- box-shadow: elevated variant
- Transform: translateY(-2px)
- Transition: 0.2s ease

### Footer links
- Color: #8898AA → #FFFFFF
- Transition: 0.15s ease

## Responsive Breakpoints
- **Mobile:** < 768px — single column, stacked layout
- **Tablet:** 768px–1024px — 2 columns where applicable
- **Desktop:** > 1024px — full multi-column layouts
- **Wide:** > 1440px — layout maxes out at 1200px container

### Key Responsive Changes
- Navbar: hamburger menu on mobile
- Hero: heading font size 56px→36px, single column
- Solutions bento: 3×2 grid → single column stack
- Stats: 4-column → 2×2 → single column
- Enterprise accordion: side-by-side → stacked
- Testimonials: 4 cards → 1 card + arrows
- News: 3 cards → 1 card + arrows
- Footer: 7-column → 2-column → single column
