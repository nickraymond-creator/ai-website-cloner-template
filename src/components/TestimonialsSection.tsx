"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface Testimonial {
  company: string;
  author: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    company: "Mindbody",
    author: "Kurtis Moyer",
    role: "Lead Product Manager",
    quote:
      "With Stripe, we have a global technology partner to help our customers keep growing and expanding their businesses.",
  },
  {
    company: "ServiceM8",
    author: "Darren Ford",
    role: "Product Manager",
    quote:
      "Tap to Pay on iPhone offers a remarkable payment experience that actually surprises and delights our customers.",
  },
  {
    company: "Xero",
    author: "Mark Rees",
    role: "CTO",
    quote:
      "Partnering with Stripe has allowed us to make a meaningful impact on small businesses and give them the financial tools they need to succeed.",
  },
  {
    company: "Lightspeed",
    author: "Dax Dasilva",
    role: "Founder & CEO",
    quote:
      "Stripe offers enterprise-grade infrastructure that helped us get to market quickly. The combination of Terminal and Connect is powerful.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      style={{
        background: "#F6F9FC",
        border: "1px solid #E3E8EE",
        borderRadius: "12px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Quote mark */}
      <div
        style={{
          fontSize: "48px",
          lineHeight: "1",
          color: "#635BFF",
          fontWeight: 800,
          marginBottom: "-8px",
          fontFamily: "Georgia, serif",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: "16px",
          color: "#425466",
          lineHeight: "1.65",
          fontStyle: "italic",
          flex: 1,
          margin: 0,
        }}
      >
        {testimonial.quote}
      </p>

      {/* Author block */}
      <div>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "#0A2540",
            margin: 0,
          }}
        >
          {testimonial.author}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#6B7C93",
            margin: "2px 0 0",
          }}
        >
          {testimonial.role}
        </p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#635BFF",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            margin: "4px 0 0",
          }}
        >
          {testimonial.company}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      style={{
        background: "#FFFFFF",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="stripe-container">
        {/* Heading */}
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#0A2540",
            letterSpacing: "-0.02em",
            marginBottom: "48px",
            marginTop: 0,
          }}
        >
          Trusted by businesses of all sizes
        </h2>

        {/* Desktop grid — hidden on mobile */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.company} testimonial={t} />
          ))}
        </div>

        {/* Mobile carousel — hidden on desktop */}
        <div className="block md:hidden">
          <TestimonialCard testimonial={testimonials[currentIndex]} />

          {/* Navigation arrows */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              marginTop: "24px",
            }}
          >
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className={cn(
                "flex items-center justify-center rounded-full transition-colors",
                "border-2 border-[#E3E8EE] text-[#425466]",
                "hover:border-[#635BFF] hover:text-[#635BFF]"
              )}
              style={{
                width: "40px",
                height: "40px",
                background: "transparent",
                cursor: "pointer",
                transitionDuration: "0.15s",
                transitionTimingFunction: "ease",
              }}
            >
              <ChevronLeftIcon size={18} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className={cn(
                "flex items-center justify-center rounded-full transition-colors",
                "border-2 border-[#E3E8EE] text-[#425466]",
                "hover:border-[#635BFF] hover:text-[#635BFF]"
              )}
              style={{
                width: "40px",
                height: "40px",
                background: "transparent",
                cursor: "pointer",
                transitionDuration: "0.15s",
                transitionTimingFunction: "ease",
              }}
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
