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
          maxWidth: "100%",
          height: "clamp(450px, 120vw, 900px)",
          opacity: 1,
          transform: "rotate(0deg)",
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
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                  lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                  letterSpacing: "0%",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "#FAFAFA",
                  backgroundColor: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  zIndex: 5,
                }}
              >
                Read More <span className="ml-1 perspective-card-read-more-plus" style={{ fontSize: "clamp(1rem, 2vw, 1.75rem)", lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)" }}>+</span>
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
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                  lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                  letterSpacing: "0%",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "#FAFAFA",
                  backgroundColor: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  zIndex: 5,
                  textDecoration: "none",
                }}
              >
                Directions <span className="ml-1 perspective-card-read-more-plus" style={{ fontSize: "clamp(1rem, 2vw, 1.75rem)", lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)" }}>+</span>
              </a>
            ) : (
              <button className="absolute top-4 right-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full flex items-center">
                Read More <span className="ml-1 text-lg leading-none">+</span>
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
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "clamp(1.25rem, 3vw, 2rem)",
                  lineHeight: "clamp(1.5rem, 3.5vh, 2.5rem)",
                  letterSpacing: "0%",
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
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                  lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                  letterSpacing: "0%",
                  color: "white",
                }}
              >
                <span className="py-1 rounded mr-2">{category1}</span>
                <span style={{ margin: "0 clamp(0.25rem, 1vw, 0.5rem)" }}>|</span>
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
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                  lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                  letterSpacing: "0%",
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
        @media (min-width: 1920px) {
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
      `}</style>
    </>
  );
}
