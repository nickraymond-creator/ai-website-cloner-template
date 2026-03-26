"use client";
import Image from "next/image";
import { GoogleIcon } from "./icons";

export function HeroSection() {
  return (
    <section
      className="animate-gradient"
      style={{
        backgroundColor: "#0A2540",
        backgroundImage:
          "linear-gradient(120deg, rgba(94,70,191,0.6), rgba(28,168,255,0.4), rgba(85,51,255,0.5), rgba(132,246,213,0.3))",
        backgroundSize: "400% 400%",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Wave background image */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "40%",
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <Image
          src="/images/wave-fallback-desktop.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority={false}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 24px",
          width: "100%",
        }}
      >
        {/* H1 */}
        <h1
          className="stripe-hero-h1"
          style={{
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          Financial infrastructure to grow your revenue.
        </h1>

        {/* Subtext */}
        <p
          className="stripe-hero-subtext"
          style={{
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}
        >
          Accept payments, offer financial services and implement custom revenue
          models – from your first transaction to your billionth.
        </p>

        {/* CTA buttons */}
        <div
          className="stripe-hero-cta"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "32px",
          }}
        >
          {/* Get started */}
          <a
            href="/register"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#FFFFFF",
              color: "#0A2540",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "6px",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.15s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.92";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}
          >
            Get started
          </a>

          {/* Sign up with Google */}
          <a
            href="/register?provider=google"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.1)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "12px 20px",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "6px",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background-color 0.15s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "rgba(255,255,255,0.1)";
            }}
          >
            <GoogleIcon style={{ width: "20px", height: "20px" }} />
            Sign up with Google
          </a>
        </div>
      </div>

      <style>{`
        .stripe-hero-h1 {
          font-size: 56px;
        }
        .stripe-hero-subtext {
          font-size: 20px;
        }
        @media (max-width: 768px) {
          .stripe-hero-h1 {
            font-size: 36px;
          }
          .stripe-hero-subtext {
            font-size: 18px;
          }
          section {
            min-height: 600px;
          }
          .stripe-hero-cta {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
