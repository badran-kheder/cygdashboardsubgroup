"use client";

import Image from "next/image";
import IndustriesGrid from "./IndustriesGrid";

interface StockProps {
  title: string;
  titleAccent: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
}

export default function Stock({
  title,
  titleAccent,
  description,
  backgroundImage,
  backgroundImageAlt,
}: StockProps) {
  return (
    <section className="stock-section">
      <div
        className="relative w-full stock-hero-container flex items-center justify-center text-center overflow-hidden bg-black"
        style={{ minHeight: "clamp(400px, 100vh, 800px)" }}
      >
        {/* Background Image Overlay */}
        <div className="absolute z-5 opacity-60 w-full h-full">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            className="object-cover"
          />
        </div>
        <div
          className="stock-overlay"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 5,
            opacity: 1,
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.47) 50%, rgba(0, 0, 0, 1) 100%)",
          }}
        ></div>
        {/* Content */}
        <div className="relative z-10 p-4 sm:p-6 md:p-8 stock-content flex flex-col items-center justify-center">
          <h1
            className="stock-title w-full md:w-auto"
            style={{
              width: "50%",
              maxWidth: "50%",
              minHeight: "clamp(80px, 12vh, 140px)",
              opacity: 1,
              transform: "rotate(0deg)",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "clamp(2rem, 5vw, 4.375rem)",
              textAlign: "center",
              margin: 0,
            }}
          >
            {title} <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
          </h1>
          <p
            className="stock-description w-full md:w-auto mt-10"
            style={{
              width: "60%",
              maxWidth: "60%",
              minHeight: "clamp(60px, 8vh, 80px)",
              fontFamily: "Grift, Arial, sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 2rem)",
              textAlign: "center",
              color: "#DBDBDB",
            }}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-40 bg-black pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <IndustriesGrid />
      </div>

      {/* Desktop-specific styles to maintain original design */}
      <style jsx global>{`
        @media (min-width: 768px) and (max-width: 1919px) {
          .stock-title {
            width: clamp(100%, 31vw, 600px) !important;
          }
          .stock-description {
            width: clamp(100%, 34vw, 659px) !important;
          }
        }
        @media (min-width: 1920px) {
          .stock-hero-container {
            height: 800px !important;
            min-height: 800px !important;
          }
          .stock-title {
            width: 600px !important;
            max-width: 600px !important;
            height: 140px !important;
            font-size: 70px !important;
            line-height: 70px !important;
          }
          .stock-description {
            width: 659px !important;
            max-width: 659px !important;
            height: 80px !important;
            font-size: 32px !important;
            line-height: 40px !important;
            margin: 15px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
