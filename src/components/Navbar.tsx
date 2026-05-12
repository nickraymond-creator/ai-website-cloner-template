"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, MenuIcon } from "./icons";

const NAV_LINKS = [
  { label: "Products", hasChevron: true },
  { label: "Solutions", hasChevron: true },
  { label: "Developers", hasChevron: true },
  { label: "Resources", hasChevron: true },
  { label: "Pricing", hasChevron: false },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn("stripe-navbar", scrolled && "stripe-navbar--scrolled")}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "#FFFFFF" : "transparent",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        transition: "background-color 0.2s ease, box-shadow 0.2s ease",
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Inner wrapper */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Stripe home"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 800,
              fontSize: "22px",
              letterSpacing: "-0.03em",
              color: scrolled ? "#0A2540" : "#FFFFFF",
              transition: "color 0.2s ease",
              lineHeight: 1,
            }}
          >
            stripe
          </span>
        </a>

        {/* Desktop nav links */}
        <nav
          aria-label="Main navigation"
          style={{ display: "flex", gap: "4px", alignItems: "center", flex: 1 }}
          className="stripe-nav-desktop"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "2px",
                fontSize: "15px",
                fontWeight: 500,
                color: scrolled ? "#425466" : "rgba(255,255,255,0.85)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 10px",
                borderRadius: "4px",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#635BFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = scrolled
                  ? "#425466"
                  : "rgba(255,255,255,0.85)";
              }}
            >
              {link.label}
              {link.hasChevron && (
                <ChevronDownIcon style={{ width: "14px", height: "14px" }} />
              )}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginLeft: "auto",
          }}
        >
          {/* Sign in — desktop only */}
          <a
            href="/login"
            className="stripe-nav-desktop"
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: scrolled ? "#425466" : "rgba(255,255,255,0.85)",
              textDecoration: "none",
              padding: "8px 10px",
              borderRadius: "4px",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#635BFF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = scrolled
                ? "#425466"
                : "rgba(255,255,255,0.85)";
            }}
          >
            Sign in
          </a>

          {/* Start now button — desktop only */}
          <a
            href="/register"
            className={cn("stripe-btn-primary", "stripe-nav-desktop")}
            style={{
              backgroundColor: scrolled ? "#635BFF" : "#FFFFFF",
              color: scrolled ? "#FFFFFF" : "#0A2540",
              padding: "10px 20px",
              fontSize: "15px",
            }}
          >
            Start now
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Open navigation menu"
            className="stripe-nav-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#0A2540" : "#FFFFFF",
              padding: "4px",
              display: "none",
            }}
          >
            <MenuIcon style={{ width: "24px", height: "24px" }} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stripe-nav-desktop {
            display: none !important;
          }
          .stripe-nav-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
