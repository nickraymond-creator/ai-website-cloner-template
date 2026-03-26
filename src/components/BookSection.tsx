import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export function BookSection() {
  return (
    <section
      style={{
        background: "#0A2540",
        color: "#FFFFFF",
        padding: "96px 0",
      }}
    >
      <style>{`
        .book-section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .book-section-grid {
            grid-template-columns: 1fr;
          }
        }
        .book-cover-img {
          transform: rotate(-3deg);
          transition: transform 0.3s ease;
          border-radius: 4px;
          box-shadow: 0 24px 48px rgba(0,0,0,0.5);
          max-width: 280px;
          width: 100%;
          height: auto;
        }
        .book-cover-img:hover {
          transform: rotate(0deg);
        }
        .book-stripe-press-link {
          color: #635BFF;
          font-weight: 500;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
        }
        .book-wip-link {
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
      `}</style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div className="book-section-grid">
          {/* Left: Text content */}
          <div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#635BFF",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: "0 0 16px 0",
              }}
            >
              Book of the week
            </p>

            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                margin: "0 0 20px 0",
              }}
            >
              Entrepreneurship starts with ideas
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                margin: "0 0 32px 0",
              }}
            >
              In &ldquo;How Buildings Learn,&rdquo; Stewart Brand explores how structures adapt
              over time — different layers evolving at different rates. It&rsquo;s a
              fitting metaphor for building economic infrastructure: a foundation
              that allows low-risk updates and iteration.
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 32px 0",
                fontStyle: "italic",
              }}
            >
              How Buildings Learn — Stewart Brand
            </p>

            {/* Links row */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="#" className="book-stripe-press-link">
                Stripe Press
                <ArrowRightIcon width={14} height={14} />
              </Link>

              <Link href="#" className="book-wip-link">
                <Image
                  src="/images/work-in-progress-icon.png"
                  alt="Works in Progress icon"
                  width={20}
                  height={20}
                  style={{ borderRadius: "2px" }}
                />
                Works in Progress
              </Link>
            </div>
          </div>

          {/* Right: Book cover */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/book-how-buildings-learn.png"
              alt="How Buildings Learn — Stewart Brand"
              width={280}
              height={360}
              className="book-cover-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
