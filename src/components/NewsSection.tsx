"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface NewsCard {
  category: string;
  title: string;
  description: string;
  image: string;
}

const NEWS_CARDS: NewsCard[] = [
  {
    category: "Annual Report",
    title: "Businesses on Stripe generated US$1.9tn in 2025",
    description:
      "Explore trends in the internet economy from our annual letter.",
    image: "/images/news-annual-letter.png",
  },
  {
    category: "BFCM 2025",
    title: "150K+ users had their best day ever",
    description:
      "We processed US$40bn with 99.9999% uptime during Black Friday.",
    image: "/images/news-bfcm.png",
  },
  {
    category: "Report",
    title: "Tidemark's benchmark on vertical SaaS growth",
    description: "Key findings on vertical SaaS growth in 2025.",
    image: "/images/news-tidemark.png",
  },
  {
    category: "Video",
    title: "Tobi Lütke and John Collison discuss the future of commerce",
    description: "Two founders sit down to discuss what's coming next.",
    image: "/images/news-shopify-collison.png",
  },
  {
    category: "Product",
    title: "New tools for in-app payments",
    description: "Process payments outside iOS and Android app stores.",
    image: "/images/news-in-app-payments.png",
  },
  {
    category: "Partnership",
    title: "Crypto.com and Stripe partner up",
    description:
      "Enable better crypto payments and tap into a new customer base.",
    image: "/images/news-crypto.png",
  },
  {
    category: "Product",
    title: "Introducing Agentic Commerce",
    description:
      "Makes it simple for businesses to accept AI platform purchases.",
    image: "/images/news-agentic.png",
  },
  {
    category: "Report",
    title: "How leading retailers unify customer experiences",
    description: "Drive growth and unify in-store and online payments.",
    image: "/images/news-retail.png",
  },
];

const GAP_PX = 20;
const TOTAL_CARDS = NEWS_CARDS.length;

function getVisibleCards(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const maxIndex = TOTAL_CARDS - visibleCards;

  // Observe viewport width and window resize for responsive cards count
  useEffect(() => {
    function update() {
      const n = getVisibleCards();
      setVisibleCards(n);
      if (viewportRef.current) {
        setContainerWidth(viewportRef.current.clientWidth);
      }
    }
    update();

    const ro = new ResizeObserver(update);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // Clamp index on visible cards change
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, TOTAL_CARDS - visibleCards)));
  }, [visibleCards]);

  // cardWidth = (containerWidth - (visibleCards-1)*GAP) / visibleCards
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - (visibleCards - 1) * GAP_PX) / visibleCards
      : 0;

  // step = cardWidth + GAP_PX
  const translateX = currentIndex * (cardWidth + GAP_PX);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  return (
    <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0A2540",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            See the latest from Stripe
          </h2>

          <Link
            href="#"
            style={{
              color: "#635BFF",
              fontWeight: 500,
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              textDecoration: "none",
            }}
          >
            See all
            <ArrowRightIcon width={14} height={14} />
          </Link>
        </div>

        {/* Carousel viewport */}
        <div
          ref={viewportRef}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              display: "flex",
              gap: `${GAP_PX}px`,
              transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {NEWS_CARDS.map((card, index) => (
              <NewsCardItem
                key={index}
                card={card}
                cardWidth={cardWidth}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "24px",
            justifyContent: "flex-end",
          }}
        >
          <NavArrowButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            <ChevronLeftIcon width={18} height={18} />
          </NavArrowButton>
          <NavArrowButton
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
          >
            <ChevronRightIcon width={18} height={18} />
          </NavArrowButton>
        </div>
      </div>
    </section>
  );
}

interface NewsCardItemProps {
  card: NewsCard;
  cardWidth: number;
}

function NewsCardItem({ card, cardWidth }: NewsCardItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: cardWidth > 0 ? `${cardWidth}px` : "calc(33.333% - 14px)",
        flexShrink: 0,
        background: "#FFFFFF",
        border: "1px solid #E3E8EE",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "box-shadow 0.2s ease",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.1)" : "none",
      }}
    >
      {/* Card image */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
        <Image
          src={card.image}
          alt={card.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#635BFF",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "8px",
          }}
        >
          {card.category}
        </div>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#0A2540",
            lineHeight: 1.4,
            margin: "0 0 8px 0",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#6B7C93",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

interface NavArrowButtonProps {
  onClick: () => void;
  disabled: boolean;
  "aria-label": string;
  children: React.ReactNode;
}

function NavArrowButton({
  onClick,
  disabled,
  "aria-label": ariaLabel,
  children,
}: NavArrowButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: `2px solid ${hovered && !disabled ? "#635BFF" : "#E3E8EE"}`,
        background: "transparent",
        color: hovered && !disabled ? "#635BFF" : "#6B7C93",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "border-color 0.2s ease, color 0.2s ease",
        flexShrink: 0,
        padding: 0,
      }}
    >
      {children}
    </button>
  );
}
