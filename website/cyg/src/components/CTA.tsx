"use client";

import Link from "next/link";

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
      className="py-16 md:py-20 px-4 relative overflow-hidden flex justify-center items-center min-h-[40vh] md:min-h-[60vh] bg-black"
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
        <h2 
          className="mb-6 md:mb-8 text-white cta-title"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "clamp(2rem, 5vw, 4.375rem)",
            lineHeight: "clamp(2rem, 5vw, 4.375rem)",
            letterSpacing: "0%",
            textAlign: "center",
            margin: 0,
          }}
        >
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
          className="inline-flex items-center justify-center hover:scale-105 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 cta-button md:mt-8"
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
          <span 
            className="cta-button-text"
            style={{
              fontFamily: "Grift, Arial, sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "clamp(1rem, 2vw, 1.75rem)",
              lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
              letterSpacing: "0%",
            }}
          >
            {buttonText}
          </span>
        </Link>
      </div>

      {/* Desktop lock: Maintain original desktop view */}
      <style jsx global>{`
        @media (min-width: 1920px) {
          .cta-title {
            font-size: 70px !important;
            line-height: 70px !important;
          }
          .cta-button-text {
            font-size: 28px !important;
            line-height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
