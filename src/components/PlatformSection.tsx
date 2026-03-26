import Image from "next/image";
import { ArrowRightIcon } from "./icons";

interface Feature {
  number: number;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    number: 1,
    title: "Get to market faster",
    description:
      "Launch and scale payments with lower operational overhead using embedded components and no-code tools",
  },
  {
    number: 2,
    title: "Grow new revenue lines",
    description:
      "Monetise platform transactions including payments, card interchange, financing fees",
  },
  {
    number: 3,
    title: "Manage platform risk",
    description:
      "Stay ahead of regulations with compliance, credit risk, fraud prevention tools",
  },
];

export function PlatformSection() {
  return (
    <section
      style={{
        background: "#0A2540",
        color: "#FFFFFF",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative image */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "50%",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/platform-graphic-background.png"
          alt=""
          width={800}
          height={600}
          style={{ width: "100%", height: "auto" }}
          aria-hidden
        />
      </div>

      {/* Content container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "64px" }}
        >
          {/* Left column */}
          <div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#635BFF",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Platforms
            </p>

            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                marginTop: "12px",
              }}
            >
              Make your SaaS platform a complete financial operating system
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.6)",
                marginTop: "16px",
              }}
            >
              Fortune 100 to Forbes Cloud 100 platforms use Stripe
            </p>

            <a
              href="#"
              style={{
                marginTop: "32px",
                color: "#635BFF",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "4px",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Explore platform solutions
              <ArrowRightIcon size={14} />
            </a>
          </div>

          {/* Right column: feature rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {features.map((feature) => (
              <div
                key={feature.number}
                style={{ display: "flex", gap: "20px" }}
              >
                {/* Number badge */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(99,91,255,0.2)",
                    border: "1px solid rgba(99,91,255,0.4)",
                    color: "#635BFF",
                    fontSize: "14px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {feature.number}
                </div>

                {/* Feature text */}
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
