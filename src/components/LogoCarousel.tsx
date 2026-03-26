"use client";

const LOGOS = [
  "OpenAI",
  "Xero",
  "Amazon",
  "NVIDIA",
  "MYOB",
  "Shopify",
  "Figma",
  "Anthropic",
  "Leonardo AI",
  "Lightspeed",
  "Uber",
  "Cursor",
  "Mindbody",
  "Instacart",
  "Hertz",
  "Stripe Atlas",
  "Mint Payments",
  "Ignition",
];

function LogoList() {
  return (
    <>
      {LOGOS.map((name, index) => (
        <span key={`${name}-${index}`} style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#425466",
              whiteSpace: "nowrap",
              opacity: 0.7,
              padding: "0 32px",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLSpanElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLSpanElement).style.opacity = "0.7";
            }}
          >
            {name}
          </span>
          {index < LOGOS.length - 1 && (
            <span
              style={{
                color: "#CBD5E0",
                padding: "0 8px",
                fontSize: "15px",
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              ·
            </span>
          )}
        </span>
      ))}
    </>
  );
}

export function LogoCarousel() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "40px 0",
        overflow: "hidden",
        position: "relative",
      }}
      aria-label="Trusted by companies worldwide"
    >
      {/* Left fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "120px",
          background: "linear-gradient(to right, #FFFFFF, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Right fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "120px",
          background: "linear-gradient(to left, #FFFFFF, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Marquee track */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 40s linear infinite",
          willChange: "transform",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
        }}
      >
        {/* First copy */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <LogoList />
        </div>
        {/* Second copy for seamless loop */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <LogoList />
        </div>
      </div>
    </section>
  );
}
