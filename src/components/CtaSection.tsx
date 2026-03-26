import Link from "next/link";

interface SupportingLink {
  title: string;
  description: string;
  href: string;
}

const SUPPORTING_LINKS: SupportingLink[] = [
  {
    title: "See what you'll pay",
    description: "Integrated per-transaction pricing with no hidden fees",
    href: "#",
  },
  {
    title: "Start building",
    description: "Get up and running in as little as 10 minutes",
    href: "#",
  },
];

export function CtaSection() {
  return (
    <section
      style={{
        background: "#635BFF",
        color: "#FFFFFF",
        padding: "96px 0",
        textAlign: "center",
      }}
    >
      <style>{`
        .cta-heading {
          font-size: 48px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.03em;
          margin: 0 0 16px 0;
        }
        @media (max-width: 767px) {
          .cta-heading {
            font-size: 32px;
          }
        }
        .cta-btn-primary {
          display: inline-block;
          background: #FFFFFF;
          color: #635BFF;
          border: 2px solid transparent;
          padding: 14px 28px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .cta-btn-primary:hover {
          background: #F0F0FF;
        }
        .cta-btn-secondary {
          display: inline-block;
          background: transparent;
          color: #FFFFFF;
          border: 2px solid rgba(255,255,255,0.4);
          padding: 14px 28px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: border-color 0.2s ease;
        }
        .cta-btn-secondary:hover {
          border-color: rgba(255,255,255,0.7);
        }
        .cta-supporting-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          text-decoration: none;
        }
      `}</style>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Heading */}
        <h2 className="cta-heading">Ready to get started?</h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.5,
            margin: "0 0 40px 0",
          }}
        >
          Create an account instantly, or contact us to design a custom package
          for your business.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="#" className="cta-btn-primary">
            Start now
          </Link>
          <Link href="#" className="cta-btn-secondary">
            Contact sales
          </Link>
        </div>

        {/* Supporting links */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {SUPPORTING_LINKS.map((link) => (
            <Link key={link.title} href={link.href} className="cta-supporting-link">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                {link.title}
              </span>
              {link.description}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
