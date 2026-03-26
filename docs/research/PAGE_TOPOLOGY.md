# Stripe AU — Page Topology

## Page Structure
- Single-page layout, standard block flow (no scroll-snap on body)
- Max content width: ~1200px, centered
- No smooth scroll library detected (standard browser scroll)
- Header is fixed/sticky overlay (z-index high)

## Sections (Top → Bottom)

| # | Name | Component | Position | Theme | Interaction Model |
|---|------|-----------|----------|-------|-------------------|
| 0 | **Navigation** | `<Navbar>` | fixed top, z-50 | transparent→white on scroll | scroll-driven |
| 1 | **Hero** | `<HeroSection>` | flow | dark (0A2540 + gradient) | static + animated gradient |
| 2 | **Customer Logos** | `<LogoCarousel>` | flow | white | time-driven (auto-scroll marquee) |
| 3 | **Solutions Bento** | `<SolutionsSection>` | flow | light (F6F9FC) | static (hover on cards) |
| 4 | **Stats ("Backbone")** | `<StatsSection>` | flow | dark (0A2540) | static (scroll-in animation) |
| 5 | **Enterprise** | `<EnterpriseSection>` | flow | white | click-driven (accordion tabs) |
| 6 | **Support** | `<SupportSection>` | flow | light (F6F9FC) | static |
| 7 | **Startups** | `<StartupsSection>` | flow | dark (0A2540) | static |
| 8 | **Platform/SaaS** | `<PlatformSection>` | flow | dark (0A2540) | static |
| 9 | **Testimonials** | `<TestimonialsSection>` | flow | white | click-driven (carousel) |
| 10 | **Developer** | `<DeveloperSection>` | flow | light (F6F9FC) | static |
| 11 | **News/Happenings** | `<NewsSection>` | flow | white | click-driven (carousel) |
| 12 | **Book of the Week** | `<BookSection>` | flow | dark (0A2540) | static |
| 13 | **Final CTA** | `<CtaSection>` | flow | indigo (635BFF) | static |
| 14 | **Footer** | `<Footer>` | flow | dark (0A2540) | static (hover links) |

## Z-Index Layers
1. Footer: z-0
2. Page content: z-10
3. Sticky header: z-50

## Key Dependencies
- Navbar must be built first (used on all pages)
- HeroSection needs wave background image from public/images/
- LogoCarousel needs company logo images
- All sections use shared container width + section padding utilities from globals.css

## Container Pattern
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.section {
  padding: 96px 0;
}
```
