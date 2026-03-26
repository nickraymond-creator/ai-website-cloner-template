"use client";

interface StartupCard {
  name: string;
  stat: string;
  description: string;
}

const startupCards: StartupCard[] = [
  { name: "Leonardo AI", stat: "40%", description: "recovery of failed payments" },
  { name: "Runway", stat: "No-code", description: "solutions for faster growth" },
  { name: "Lovable", stat: "Vibe-coding", description: "backed by Stripe" },
  { name: "Decagon", stat: "65%", description: "reduction in support costs" },
  { name: "Supabase", stat: "150", description: "countries served" },
  { name: "ElevenLabs", stat: "US$3bn", description: "valuation on Stripe" },
];

export function StartupsSection() {
  return (
    <section
      style={{
        background: "#0A2540",
        color: "#FFFFFF",
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Main grid: left text + right cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "64px" }}
        >
          {/* Left column */}
          <div>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              Build a foundation for your startup that enables faster growth
            </h2>

            <div style={{ margin: "24px 0 8px" }}>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  display: "block",
                }}
              >
                78%
              </span>
              <span
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                of the Forbes AI 50 use Stripe
              </span>
            </div>

            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                margin: "24px 0",
              }}
            >
              Access financial benefits, focused community, expert resources
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              <div>
                <a href="#" className="stripe-btn-primary">
                  Stripe Startups programme
                </a>
              </div>
              <div>
                <a href="#" className="stripe-btn-secondary">
                  Stripe Atlas
                </a>
              </div>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                marginTop: "16px",
                lineHeight: 1.5,
              }}
            >
              Incorporate and get everything to fundraise, bank, and accept payments in two business days
            </p>
          </div>

          {/* Right column: startup cards grid */}
          <div
            className="grid grid-cols-2"
            style={{ gap: "16px" }}
          >
            {startupCards.map((card) => (
              <div
                key={card.name}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "20px",
                  transition: "background 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.06)";
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "6px",
                  }}
                >
                  {card.name}
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#635BFF",
                  }}
                >
                  {card.stat}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.6)",
                    marginTop: "4px",
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
