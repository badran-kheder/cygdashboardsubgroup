/* eslint-disable react/jsx-no-undef */
"use client";

import Image from "next/image";

interface SimpleHeroProps {
  backgroundImage: string;
  title: string;
  titleAccent?: string; // Accent part of the title (optional)
  description: string;
}

export default function SimpleHero({
  backgroundImage,
  title,
  titleAccent,
  description,
}: SimpleHeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat [background-attachment:fixed] sm:[background-attachment:scroll]"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div
        className="absolute inset-0 -top-[7%] sm:-top-[5%]"
      >
        <Image
          src="/images/shadow.png"
          alt="shadow"
          fill
          style={{
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto text-center">
        <h1
          className="mb-4 md:mb-6"
          style={{
            fontFamily: "Helvetica",
            fontWeight: 300,
            fontStyle: "normal",
            letterSpacing: "0%",
            textAlign: "center",
            color: "white",
          }}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          {/* MODIFIED: Render title and accent title */}
          {title}
          </span>
          {titleAccent && (
            <span className="block text-primary-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">{titleAccent}</span>
          )}
        </h1>
        <p
          className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed"
          style={{
            fontFamily: "Grift",
            fontWeight: 500,
            fontStyle: "normal",
            letterSpacing: "0%",
            textAlign: "center",
            color: "white",
          }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
