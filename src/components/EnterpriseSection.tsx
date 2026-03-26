"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ArrowRightIcon } from "./icons";

interface CaseStudy {
  id: string;
  company: string;
  stat: string;
  statLabel: string;
  description: string;
  products: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "hertz",
    company: "Hertz",
    stat: "160 countries",
    statLabel: "11K+ locations globally",
    description:
      "Hertz modernised their global payments infrastructure with Stripe across 160 countries and 11,000+ locations.",
    products: ["Payments", "Terminal", "Connect", "Radar", "Stripe Sigma"],
    image: "/images/enterprise-hertz.png",
  },
  {
    id: "urbn",
    company: "URBN",
    stat: "$5 billion",
    statLabel: "in online and in-store revenue consolidated",
    description:
      "URBN consolidated payments across 5+ consumer brands and 700+ store locations onto one platform.",
    products: ["Payments", "Terminal", "Connect", "Stripe Sigma", "Radar"],
    image: "/images/enterprise-urbn.png",
  },
  {
    id: "instacart",
    company: "Instacart",
    stat: "600K+",
    statLabel: "shoppers across 1.8K retail partners",
    description:
      "Instacart uses Stripe to pay 600K+ shoppers and power payments across nearly 100K stores.",
    products: ["Payments", "Connect", "Data Pipeline", "Issuing"],
    image: "/images/enterprise-instacart.png",
  },
  {
    id: "lemonde",
    company: "Le Monde",
    stat: "<3 months",
    statLabel: "to implement Stripe for 100% of digital and print payments",
    description:
      "Le Monde migrated all digital and print subscriptions to Stripe in under 3 months.",
    products: ["Payments", "Stripe Sigma", "Radar"],
    image: "/images/enterprise-lemonde.png",
  },
];

export function EnterpriseSection() {
  const [openId, setOpenId] = useState<string>("hertz");

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? "" : id));
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
      <div className="mx-auto px-6" style={{ maxWidth: "1200px" }}>
        {/* Section header */}
        <div style={{ marginBottom: "0" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#635BFF",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            Enterprise
          </p>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0A2540",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "8px",
            }}
          >
            Powering businesses of all sizes
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#425466",
              lineHeight: 1.6,
            }}
          >
            Run your business on a reliable platform that adapts to your needs.
          </p>
        </div>

        {/* Fortune 100 callout */}
        <div
          style={{
            marginTop: "32px",
            marginBottom: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#F6F9FC",
            borderRadius: "12px",
            padding: "24px 32px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#0A2540",
            }}
          >
            50% of Fortune 100 companies have used Stripe
          </span>
          <a
            href="#"
            style={{
              color: "#635BFF",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "4px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              marginLeft: "24px",
            }}
          >
            Stripe for enterprises
            <ArrowRightIcon size={16} />
          </a>
        </div>

        {/* Accordion */}
        <div style={{ borderTop: "1px solid #E3E8EE" }}>
          {caseStudies.map((study) => {
            const isOpen = openId === study.id;
            return (
              <div key={study.id} style={{ borderBottom: "1px solid #E3E8EE" }}>
                {/* Accordion header */}
                <button
                  onClick={() => toggle(study.id)}
                  className={cn(
                    "w-full text-left transition-colors duration-150",
                    isOpen
                      ? "text-[#635BFF]"
                      : "text-[#0A2540] hover:text-[#635BFF]"
                  )}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: 600,
                    background: "none",
                    border: "none",
                    width: "100%",
                  }}
                >
                  <span>{study.company}</span>
                  <ChevronDownIcon
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {/* Accordion content */}
                <div
                  style={{
                    maxHeight: isOpen ? "600px" : "0",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  <div
                    className="grid grid-cols-1 md:grid-cols-2"
                    style={{ gap: "32px", padding: "24px 0 32px" }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                        aspectRatio: "4/3",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={study.image}
                        alt={`${study.company} case study`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Stats and description */}
                    <div>
                      <p
                        style={{
                          fontSize: "32px",
                          fontWeight: 800,
                          color: "#0A2540",
                          marginBottom: "4px",
                          lineHeight: 1.1,
                        }}
                      >
                        {study.stat}
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#425466",
                          marginBottom: "8px",
                          fontWeight: 500,
                        }}
                      >
                        {study.statLabel}
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#425466",
                          lineHeight: 1.6,
                          marginBottom: "16px",
                        }}
                      >
                        {study.description}
                      </p>

                      {/* Product badges */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginTop: "16px",
                        }}
                      >
                        {study.products.map((product) => (
                          <span
                            key={product}
                            style={{
                              backgroundColor: "#F6F9FC",
                              border: "1px solid #E3E8EE",
                              borderRadius: "100px",
                              padding: "4px 12px",
                              fontSize: "13px",
                              fontWeight: 500,
                              color: "#425466",
                            }}
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
