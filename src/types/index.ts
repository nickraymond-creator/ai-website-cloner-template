// Stripe AU homepage — TypeScript interfaces

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  backgroundImage: string;
}

export interface LogoItem {
  name: string;
  src: string;
  href?: string;
  width: number;
  height: number;
}

export interface SolutionCard {
  id: string;
  title: string;
  description?: string;
  href: string;
  backgroundImage?: string;
  tag?: string;
  size: "large" | "medium" | "small";
}

export interface StatItem {
  value: string;
  label: string;
}

export interface EnterpriseCase {
  id: string;
  company: string;
  stat: string;
  statLabel?: string;
  description: string;
  products: string[];
  image: string;
  href?: string;
}

export interface SupportOption {
  title: string;
  description: string;
  href: string;
}

export interface StartupItem {
  name: string;
  stat: string;
  description: string;
  href?: string;
}

export interface TestimonialItem {
  company: string;
  author: string;
  role: string;
  quote: string;
  logo?: string;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
