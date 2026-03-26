import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./icons";

interface SupportCard {
  title: string;
  description: string;
  linkText: string;
}

const supportCards: SupportCard[] = [
  {
    title: "Professional Services",
    description:
      "Get tailored guidance from Stripe on implementation, complex integrations, or major migrations",
    linkText: "Learn more",
  },
  {
    title: "Stripe-certified Experts",
    description:
      "Work with a Stripe consulting partner that can integrate and deploy solutions",
    linkText: "Find a partner",
  },
  {
    title: "Support Plans",
    description:
      "Receive ongoing assistance and day-to-day support for technical questions",
    linkText: "View plans",
  },
];

export function SupportSection() {
  return (
    <section
      style={{ background: "#F6F9FC", padding: "96px 0" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#0A2540",
            letterSpacing: "-0.02em",
            marginBottom: "48px",
          }}
        >
          Realise value faster with dedicated experts
        </h2>

        <div
          className={cn(
            "grid gap-6",
            "grid-cols-1 md:grid-cols-3"
          )}
          style={{ gap: "24px" }}
        >
          {supportCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E3E8EE",
                borderRadius: "12px",
                padding: "32px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0A2540",
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#425466",
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>
              <a
                href="#"
                style={{
                  marginTop: "20px",
                  color: "#635BFF",
                  fontWeight: 500,
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  textDecoration: "none",
                }}
              >
                {card.linkText}
                <ArrowRightIcon size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
