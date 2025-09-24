"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface CTAProps {
  title: string;
  titleAccent?: string;
  buttonText: string;
  buttonHref: string;
  backgroundPattern?: "default" | "custom";
  customBackground?: string;
}

export default function CTA({
  title,
  titleAccent,
  buttonText,
  buttonHref,
  backgroundPattern = "default",
  customBackground,
}: CTAProps) {
  const getBackgroundStyle = () => {
    if (backgroundPattern === "custom" && customBackground) {
      return { background: customBackground };
    }

    // Default dark background with subtle pattern
    return {
      background: "black"
    };
  };

  return (
    <section
      className="py-20 px-4 relative overflow-hidden d-flex justify-center items-center h-[60vh] bg-black"
      style={getBackgroundStyle()}
    >
      {/* Background Pattern Overlay */}
      {backgroundPattern === "default" && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              url('/images/dotted.png')
            `,
          }}
        />
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10 h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
          {title.split(" ").map((word, index) => {
            // Check if this word should be accented (contains the accent word)
            if (
              titleAccent &&
              word
                .toLowerCase()
                .includes(titleAccent.toLowerCase().replace(/[^a-zA-Z]/g, ""))
            ) {
              return (
                <span key={index} style={{ color: "#77EB8A" }}>
                  {word}{" "}
                </span>
              );
            }
            return <span key={index}>{word} </span>;
          })}
        </h2>

        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center font-semibold hover:scale-105 px-8 py-4 rounded-full transition-all duration-300"
          style={{
            backgroundColor: "#77EB8A",
            color: "#0B1F3A",
            textDecoration: "none",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(119, 235, 138, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#4FD1C5";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 25px rgba(119, 235, 138, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#77EB8A";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 15px rgba(119, 235, 138, 0.3)";
          }}
        >
          {buttonText}
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
