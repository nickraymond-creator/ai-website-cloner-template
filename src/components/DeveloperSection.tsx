import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./icons";

interface ApiMetric {
  value: string;
  label: string;
}

interface IntegrationCard {
  cardLabel: string;
  title: string;
  desc: string;
}

const apiMetrics: ApiMetric[] = [
  { value: "500M+", label: "API requests per day" },
  { value: "10K+", label: "API requests per second" },
  { value: "150K+", label: "transactions per minute" },
];

const integrationCards: IntegrationCard[] = [
  {
    cardLabel: "No code needed",
    title: "Don't Code?",
    desc: "Set up billing, take in-person payments, and share a payment link from the Dashboard",
  },
  {
    cardLabel: "Pre-integrated",
    title: "Pre-integrated Platform",
    desc: "Browse a directory of platforms that integrate Stripe with website builders and e-commerce tools",
  },
  {
    cardLabel: "Custom",
    title: "Build Your Own",
    desc: "Use SDKs, APIs, MCP server, and AI developer tools to build exactly what you need",
  },
];

function ApiMetricItem({ metric }: { metric: ApiMetric }) {
  return (
    <div>
      <p
        style={{
          fontSize: "36px",
          fontWeight: 800,
          color: "#0A2540",
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        {metric.value}
      </p>
      <p
        style={{
          fontSize: "15px",
          color: "#6B7C93",
          margin: "4px 0 0",
        }}
      >
        {metric.label}
      </p>
    </div>
  );
}

function IntegrationCardItem({ card }: { card: IntegrationCard }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E3E8EE",
        borderRadius: "12px",
        padding: "28px",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#635BFF",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "12px",
          marginTop: 0,
        }}
      >
        {card.cardLabel}
      </p>
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#0A2540",
          marginBottom: "8px",
          marginTop: 0,
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "#425466",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {card.desc}
      </p>
    </div>
  );
}

export function DeveloperSection() {
  return (
    <section
      style={{
        background: "#F6F9FC",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="stripe-container">
        {/* Top area: 2-column grid on desktop, stacked on mobile */}
        <div
          className={cn(
            "grid grid-cols-1 gap-12",
            "md:grid-cols-2 md:gap-16"
          )}
        >
          {/* Left column: label + heading + subtext + CTAs */}
          <div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#635BFF",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: "0 0 16px",
              }}
            >
              Developers
            </p>

            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                color: "#0A2540",
                letterSpacing: "-0.02em",
                margin: "0 0 0",
                lineHeight: 1.15,
              }}
            >
              Reliable, extensible infrastructure for every stack
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#425466",
                lineHeight: "1.6",
                margin: "16px 0 32px",
              }}
            >
              Orchestrate payments across multiple processors, build custom
              workflows, and connect to third parties using APIs, partner apps,
              and pre-built integrations.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a href="#" className="stripe-btn-primary">
                View developer docs
                <ArrowRightIcon size={14} />
              </a>
              <a href="#" className="stripe-btn-ghost">
                View Stripe&apos;s GitHub
                <ArrowRightIcon size={14} />
              </a>
            </div>
          </div>

          {/* Right column: API metrics */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              borderLeft: "2px solid #E3E8EE",
              paddingLeft: "32px",
            }}
            className="hidden md:flex"
          >
            {apiMetrics.map((metric) => (
              <ApiMetricItem key={metric.label} metric={metric} />
            ))}
          </div>
        </div>

        {/* Mobile API metrics — shown only on mobile */}
        <div
          className="flex flex-col md:hidden"
          style={{
            gap: "24px",
            borderLeft: "2px solid #E3E8EE",
            paddingLeft: "32px",
            marginTop: "40px",
          }}
        >
          {apiMetrics.map((metric) => (
            <ApiMetricItem key={`mobile-${metric.label}`} metric={metric} />
          ))}
        </div>

        {/* Integration cards — 3-column on desktop, 1-column on mobile */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            marginTop: "64px",
            gap: "20px",
          }}
        >
          {integrationCards.map((card) => (
            <IntegrationCardItem key={card.cardLabel} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
