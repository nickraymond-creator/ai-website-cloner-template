import Image from "next/image";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "135+", label: "currencies and payment methods supported" },
  { value: "US$1.9tn", label: "in payments volume processed in 2025" },
  { value: "99.999%", label: "historical uptime for Stripe services" },
  { value: "200M+", label: "active subscriptions managed on Stripe Billing" },
];

export function StatsSection() {
  return (
    <section
      style={{ backgroundColor: "#0A2540", color: "#FFFFFF" }}
      className="py-16 md:py-24"
    >
      <div
        className={cn(
          "mx-auto px-6",
          "grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        )}
        style={{ maxWidth: "1200px" }}
      >
        {/* Left side */}
        <div>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            The backbone of global commerce
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
              marginBottom: "40px",
            }}
          >
            Businesses all over the world — from startups to Fortune 500s — use
            Stripe to handle their payment needs.
          </p>
          <div style={{ maxWidth: "480px", width: "100%" }}>
            <Image
              src="/images/dataviz-static.png"
              alt="Data visualization showing Stripe's global payment infrastructure"
              width={480}
              height={320}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Right side: stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px 32px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span
                className="font-extrabold text-white"
                style={{
                  fontSize: "clamp(32px, 3.5vw, 40px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
