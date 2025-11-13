"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface PerspectiveCardProps {
  imageSrc: string;
  title: string;
  category1: string;
  category2: string;
  date: string;
  href?: string;
}

export default function PerspectiveCard({
  imageSrc,
  title,
  category1,
  category2,
  date,
  href,
}: PerspectiveCardProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <div
        className="relative perspective-card"
        style={{
          width: "clamp(280px, 80vw, 588px)",
          height: "clamp(450px, 120vw, 900px)",
        }}
      >
        <div className="overflow-hidden h-full flex flex-col bg-black">
          {/* Image and "Read More" */}
          <div className="relative h-full">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
            {isHomePage ? (
              <button
                className="absolute perspective-card-read-more text-white flex items-center"
                style={{
                  top: "clamp(0.75rem, 2vw, 1rem)",
                  right: "clamp(0.75rem, 2vw, 1rem)",
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(0.75rem, 2vw, 1.5rem)",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid #FAFAFA",
                  padding: 0,
                  cursor: "pointer",
                  zIndex: 5,
                }}
              >
                Read More{" "}
                <span
                  className="ml-5 perspective-card-read-more-plus"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.75rem)",
                    lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                  }}
                >
                  +
                </span>
              </button>
            ) : href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute perspective-card-read-more text-white flex items-center"
                style={{
                  top: "clamp(0.75rem, 2vw, 1rem)",
                  right: "clamp(0.75rem, 2vw, 1rem)",
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                  borderBottom: "1px solid #FAFAFA",
                  backgroundColor: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  zIndex: 5,
                  textDecoration: "none",
                }}
              >
                Directions{" "}
                <span
                  className="ml-5 perspective-card-read-more-plus"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.75rem)",
                    lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                  }}
                >
                  +
                </span>
              </a>
            ) : (
              <button className="absolute top-4 right-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full flex items-center">
                Read More <span className="ml-5 text-lg leading-none">+</span>
              </button>
            )}
            <div className="overlay"></div>
          </div>

          {/* Card Content */}
          <div
            className="perspective-card-content flex flex-col justify-between flex-grow"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "clamp(1rem, 3vw, 3rem)",
            }}
          >
            <div>
              <h3
                className="perspective-card-title"
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                  fontWeight: 700,
                  lineHeight: "40px",
                  verticalAlign: "middle",
                  color: "white",
                  margin: 0,
                  marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                }}
              >
                {title}
              </h3>
              <div
                className="flex items-center perspective-card-category"
                style={{
                  marginBottom: "clamp(0.5rem, 1.5vh, 1rem)",
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  color: "white",
                }}
              >
                <span className="py-1 rounded mr-2">{category1}</span>
                <span style={{ margin: "0 clamp(0.25rem, 1vw, 0.5rem)" }}>
                  |
                </span>
                <span className="px-2 py-1 rounded">{category2}</span>
              </div>
            </div>
            <div
              style={{
                paddingBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
              }}
            >
              <p
                className="perspective-card-date"
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  lineHeight: "40px",
                  color: "white",
                  margin: 0,
                }}
              >
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop lock: Maintain original desktop view */}
      <style jsx global>{`
      @media (min-width: 1601px) {
          .perspective-card {
            width: 588px !important;
            max-width: 588px !important;
            height: 900px !important;
          }
          .perspective-card-read-more {
            top: 20px !important;
            right: 20px !important;
            font-size: 28px !important;
            line-height: 36px !important;
          }
          .perspective-card-read-more-plus {
            font-size: 28px !important;
            line-height: 36px !important;
          }
          .perspective-card-content {
            padding: 3rem !important;
          }
          .perspective-card-title {
            font-size: 32px !important;
            line-height: 40px !important;
            margin-bottom: 12px !important;
          }
          .perspective-card-category {
            font-size: 28px !important;
            line-height: 36px !important;
            margin-bottom: 1rem !important;
          }
          .perspective-card-category span[style*="margin"] {
            margin: 0 8px !important;
          }
          .perspective-card-date {
            font-size: 28px !important;
            line-height: 36px !important;
          }
        }
          @media (max-width: 1760px) {
          .perspective-card {
            width: clamp(260px, 60vw, 500px) !important;
            max-width: clamp(260px, 60vw, 450px) !important;
            height: clamp(350px, 90vw, 650px) !important;
          }
          .perspective-card-content {
            padding: clamp(1rem, 3vw, 2rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(1rem, 2.5vw, 1.5rem) !important;
            line-height: clamp(1.5rem, 3vw, 2.25rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.875rem, 2vw, 1.25rem) !important;
            line-height: clamp(1.125rem, 2.5vw, 1.75rem) !important;
          }
        }
        @media (max-width: 1600px) {
          .perspective-card {
            width: clamp(260px, 60vw, 450px) !important;
            max-width: clamp(260px, 60vw, 450px) !important;
            height: clamp(400px, 90vw, 700px) !important;
          }
          .perspective-card-content {
            padding: clamp(1.5rem, 3vw, 2.5rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(1.25rem, 2.5vw, 1.75rem) !important;
            line-height: clamp(1.75rem, 3vw, 2.5rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.95rem, 2vw, 1.5rem) !important;
            line-height: clamp(1.25rem, 2.5vw, 2.25rem) !important;
          }
        }
        @media (max-width: 1439px) {
          .perspective-card {
            width: clamp(260px, 60vw, 400px) !important;
            max-width: clamp(260px, 60vw, 400px) !important;
            height: clamp(350px, 90vw, 650px) !important;
          }
          .perspective-card-content {
            padding: clamp(1rem, 3vw, 2rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(1rem, 2.5vw, 1.5rem) !important;
            line-height: clamp(1.5rem, 3vw, 2.25rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.875rem, 2vw, 1.25rem) !important;
            line-height: clamp(1.125rem, 2.5vw, 1.75rem) !important;
          }
        }
        @media (max-width: 1285px) {
          .perspective-card {
            width: clamp(200px, 60vw, 350px) !important;
            max-width: clamp(200px, 60vw, 350px) !important;
            height: clamp(300px, 90vw, 600px) !important;
          }
          .perspective-card-content {
            padding: clamp(0.5rem, 3vw, 1.5rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(0.875rem, 2.5vw, 1.25rem) !important;
            line-height: clamp(1.25rem, 3vw, 1.75rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.75rem, 2vw, 1rem) !important;
            line-height: clamp(1rem, 2.5vw, 1.5rem) !important;
          }
        }
        @media (max-width: 1200px) {
          .perspective-card {
            width: clamp(180px, 60vw, 300px) !important;
            max-width: clamp(180px, 60vw, 300px) !important;
            height: clamp(280px, 90vw, 550px) !important;
          }
          .perspective-card-content {
            padding: clamp(0.25rem, 3vw, 1rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(0.75rem, 2.5vw, 1rem) !important;
            line-height: clamp(1rem, 3vw, 1.5rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.625rem, 2vw, 0.875rem) !important;
            line-height: clamp(0.875rem, 2.5vw, 1.25rem) !important;
          }
        }
        @media (max-width: 1045px) {
          .perspective-card {
            width: 60% !important;
            max-width: 100% !important;
          }
          .perspective-card-content {
            padding: clamp(0.25rem, 3vw, 1rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(0.75rem, 2.5vw, 1rem) !important;
            line-height: clamp(1rem, 3vw, 1.5rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.625rem, 2vw, 0.875rem) !important;
            line-height: clamp(0.875rem, 2.5vw, 1.25rem) !important;
          }
        }
        @media (max-width: 900px) {
          .perspective-card {
            width: min(90vw, 320px) !important;
            max-width: min(90vw, 320px) !important;
            height: auto !important;
            min-height: clamp(260px, 95vw, 420px) !important;
          }
          .perspective-card-content {
            padding: clamp(0.75rem, 4vw, 1.5rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(0.85rem, 3vw, 1.1rem) !important;
            line-height: clamp(1.2rem, 3.5vw, 1.6rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.7rem, 3vw, 0.95rem) !important;
            line-height: clamp(0.95rem, 3.5vw, 1.35rem) !important;
          }
        }
        @media (max-width: 768px) {
          .perspective-card {
            width: min(92vw, 500px) !important;
            max-width: min(92vw, 500px) !important;
            min-height: clamp(240px, 100vw, 600px) !important;
          }
          .perspective-card-content {
            padding: clamp(0.65rem, 5vw, 1.25rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(0.8rem, 3.5vw, 1rem) !important;
            line-height: clamp(1.1rem, 4vw, 1.5rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.65rem, 3.5vw, 0.9rem) !important;
            line-height: clamp(0.9rem, 4vw, 1.25rem) !important;
          }
        }
        @media (max-width: 640px) {
          .perspective-card {
            width: min(94vw, 400Px) !important;
            max-width: min(94vw, 400px) !important;
            min-height: clamp(220px, 105vw, 500px) !important;
          }
          .perspective-card-content {
            padding: clamp(0.55rem, 6vw, 1rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(0.75rem, 4vw, 0.95rem) !important;
            line-height: clamp(1rem, 4.5vw, 1.4rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.6rem, 4vw, 0.85rem) !important;
            line-height: clamp(0.85rem, 4.5vw, 1.2rem) !important;
          }
        }
        @media (max-width: 480px) {
          .perspective-card {
            width: min(96vw, 400px) !important;
            max-width: min(96vw, 400px) !important;
            min-height: clamp(200px, 110vw, 500px) !important;
          }
          .perspective-card-content {
            padding: clamp(0.5rem, 7vw, 0.9rem) !important;
          }
          .perspective-card-title {
            font-size: clamp(0.7rem, 4.5vw, 0.9rem) !important;
            line-height: clamp(0.95rem, 5vw, 1.25rem) !important;
          }
          .perspective-card-category,
          .perspective-card-date {
            font-size: clamp(0.55rem, 4.5vw, 0.8rem) !important;
            line-height: clamp(0.8rem, 5vw, 1.1rem) !important;
          }
        }
      `}</style>
    </>
  );
}
