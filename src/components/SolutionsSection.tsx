"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./icons";

interface CardData {
  tag: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundStyle?: string;
  darkBackground?: boolean;
  linkText: string;
  href: string;
  mockupContent?: string;
}

const CARDS: CardData[] = [
  {
    tag: "Global Payments",
    title: "Accept and optimise payments globally – online and in person",
    backgroundImage: "/images/payment-bento-background.jpg",
    darkBackground: true,
    linkText: "Explore Payments",
    href: "#",
  },
  {
    tag: "Billing",
    title: "Enable any billing model",
    backgroundStyle: "linear-gradient(135deg, #F6F9FC, #EEF2FF)",
    darkBackground: false,
    mockupContent: "Pro Plan · Billed monthly · Tokens: A$0.02 per 1,000 units",
    linkText: "Explore Billing",
    href: "#",
  },
  {
    tag: "New",
    title: "Monetise through agentic commerce",
    backgroundStyle: "linear-gradient(135deg, #0A2540 80%, #1a3d6e)",
    darkBackground: true,
    linkText: "Explore Agentic",
    href: "#",
  },
  {
    tag: "Issuing",
    title: "Create a card issuing programme",
    backgroundStyle: "linear-gradient(135deg, #EEF2FF, #F0F4FF)",
    darkBackground: false,
    linkText: "Explore Issuing",
    href: "#",
  },
  {
    tag: "Crypto",
    title: "Access borderless money movement with stablecoins and crypto",
    backgroundStyle: "linear-gradient(135deg, #0A2540 60%, #0d3d3a)",
    darkBackground: true,
    linkText: "Learn more",
    href: "#",
  },
  {
    tag: "Connect",
    title: "Embed payments in your platform",
    backgroundImage: "/images/connect-bento-background.jpg",
    darkBackground: true,
    linkText: "Explore Connect",
    href: "#",
  },
];

interface SolutionCardProps {
  card: CardData;
}

function SolutionCard({ card }: SolutionCardProps) {
  const isDark = card.darkBackground;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border p-8 transition-all duration-200",
        "hover:-translate-y-0.5",
        isDark
          ? "border-transparent text-white"
          : "border-[#E3E8EE] bg-white text-[#0A2540]"
      )}
      style={{
        minHeight: "220px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        background: card.backgroundStyle ?? (isDark ? "#0A2540" : "#FFFFFF"),
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 24px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 8px rgba(0,0,0,0.08)";
      }}
    >
      {/* Background image (fills bottom half of card) */}
      {card.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={card.backgroundImage}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            aria-hidden="true"
          />
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10, 37, 64, 0.65)" }}
          />
        </div>
      )}

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Tag */}
        <span
          className={cn(
            "mb-3 inline-block text-xs font-semibold uppercase tracking-widest",
            isDark ? "text-white/60" : "text-[#635BFF]"
          )}
        >
          {card.tag}
        </span>

        {/* Title */}
        <h3
          className={cn(
            "text-xl font-bold leading-snug",
            isDark ? "text-white" : "text-[#0A2540]"
          )}
          style={{ marginBottom: "12px" }}
        >
          {card.title}
        </h3>

        {/* Optional description */}
        {card.description && (
          <p
            className={cn(
              "text-sm leading-relaxed",
              isDark ? "text-white/80" : "text-[#425466]"
            )}
          >
            {card.description}
          </p>
        )}

        {/* Mockup content */}
        {card.mockupContent && (
          <p
            className="mt-3 rounded-md bg-white/60 px-3 py-2 text-xs font-medium text-[#425466]"
            style={{ border: "1px solid #E3E8EE" }}
          >
            {card.mockupContent}
          </p>
        )}

        {/* CTA link */}
        <a
          href={card.href}
          className={cn(
            "mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium transition-colors duration-150",
            isDark
              ? "text-white/80 hover:text-white"
              : "text-[#635BFF] hover:text-[#4f46e5]"
          )}
        >
          {card.linkText}
          <ArrowRightIcon width={14} height={14} />
        </a>
      </div>
    </div>
  );
}

export function SolutionsSection() {
  return (
    <section
      style={{
        background: "#F6F9FC",
      }}
      className="py-16 md:py-24"
      aria-labelledby="solutions-heading"
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "1200px" }}
      >
        {/* Section header */}
        <div>
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#635BFF" }}
          >
            Products
          </p>

          <h2
            id="solutions-heading"
            className="font-bold leading-tight md:text-[40px]"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0A2540",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: "600px",
            }}
          >
            Flexible solutions for every business model
          </h2>

          <p
            className="mt-4 text-lg leading-relaxed"
            style={{
              color: "#425466",
              maxWidth: "560px",
            }}
          >
            Grow your business with a comprehensive set of payments and financial
            tools – designed to work individually or together.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((card) => (
            <SolutionCard key={card.tag} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
