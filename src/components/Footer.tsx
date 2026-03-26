import Link from "next/link";
import { StripeLogo, TwitterIcon, LinkedInIcon, FacebookIcon, GlobeIcon } from "./icons";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    heading: "Products & Pricing",
    links: [
      { label: "Pricing", href: "#" },
      { label: "Atlas", href: "#" },
      { label: "Billing", href: "#" },
      { label: "Capital", href: "#" },
      { label: "Checkout", href: "#" },
      { label: "Climate", href: "#" },
      { label: "Connect", href: "#" },
      { label: "Data Pipeline", href: "#" },
      { label: "Elements", href: "#" },
      { label: "Financial Connections", href: "#" },
      { label: "Identity", href: "#" },
      { label: "Invoicing", href: "#" },
      { label: "Issuing", href: "#" },
      { label: "Link", href: "#" },
      { label: "Payments", href: "#" },
      { label: "Payment Links", href: "#" },
      { label: "Radar", href: "#" },
      { label: "Revenue Recognition", href: "#" },
      { label: "Stripe Sigma", href: "#" },
      { label: "Tax", href: "#" },
      { label: "Terminal", href: "#" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Enterprises", href: "#" },
      { label: "Startups", href: "#" },
      { label: "Agentic Commerce", href: "#" },
      { label: "E-commerce", href: "#" },
      { label: "Embedded Finance", href: "#" },
      { label: "Finance Automation", href: "#" },
      { label: "Global Businesses", href: "#" },
      { label: "Marketplaces", href: "#" },
      { label: "Platforms", href: "#" },
      { label: "SaaS", href: "#" },
      { label: "AI Companies", href: "#" },
      { label: "Non-profits", href: "#" },
      { label: "Retail", href: "#" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "API Status", href: "#" },
      { label: "API Changelog", href: "#" },
      { label: "Libraries/SDKs", href: "#" },
      { label: "Developer Blog", href: "#" },
    ],
  },
  {
    heading: "Integrations",
    links: [
      { label: "Stripe App Marketplace", href: "#" },
      { label: "Partner Ecosystem", href: "#" },
      { label: "Professional Services", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Guides", href: "#" },
      { label: "Customer Stories", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Sessions", href: "#" },
      { label: "Newsroom", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Jobs", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Stripe Press", href: "#" },
      { label: "Contact Sales", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Get Support", href: "#" },
      { label: "Managed Support Plans", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: TwitterIcon, label: "X (Twitter)", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
] as const;

const legalLinks: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookie Settings", href: "#" },
  { label: "Sitemap", href: "#" },
];

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0A2540", color: "#FFFFFF" }}
      className="px-6 pt-16 pb-10"
    >
      <div style={{ maxWidth: "1200px" }} className="mx-auto">
        {/* Top row: logo + locale selector */}
        <div
          className="flex justify-between items-center mb-12 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Logo */}
          <Link href="#" aria-label="Stripe home">
            <StripeLogo size={60} style={{ color: "#FFFFFF" }} />
          </Link>

          {/* Locale selector */}
          <div
            className="flex items-center gap-2 text-sm cursor-default select-none"
            style={{
              color: "rgba(255,255,255,0.6)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px",
              padding: "8px 14px",
            }}
          >
            <GlobeIcon size={16} />
            <span>Australia</span>
          </div>
        </div>

        {/* Links grid */}
        <div
          className="
            grid gap-y-8 gap-x-4
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-4
            xl:grid-cols-7
          "
        >
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3
                className="mb-4 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#FFFFFF", letterSpacing: "0.1em" }}
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-[10px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm no-underline transition-colors duration-150 ease-linear hover:text-white"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-wrap justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Left: social icons + copyright */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-colors duration-150 ease-linear hover:text-white"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              © 2026 Stripe, LLC
            </span>
          </div>

          {/* Right: legal links */}
          <div className="flex flex-wrap gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] no-underline transition-colors duration-150 ease-linear hover:[color:rgba(255,255,255,0.7)]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
