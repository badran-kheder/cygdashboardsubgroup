"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface HeroButton {
  text: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: boolean;
}

interface HeroProps {
  backgroundImage: string;
  title: string;
  titleAccent?: string;
  description: string;
  buttons?: HeroButton[];
  textAlign?: "left" | "center";
  showFooter?: boolean;
  footerLogos?: Array<{
    brand: string;
    quote: string;
  }>;
  reviewsLink?: string;
  showScrollDown?: boolean;
}

export default function Hero({
  backgroundImage,
  title,
  titleAccent,
  description,
  buttons = [],
  textAlign = "left",
  showFooter = false,
  footerLogos = [],
  reviewsLink = "/clients#team-carousel",
  showScrollDown = false,
}: HeroProps) {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isServicesPage =
    pathname === "/services" || pathname.startsWith("/services/");
  const isContactPage = pathname === "/contact";
  const shouldUseRadialGradient =
    isAboutPage || isServicesPage || isContactPage;
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedAccent, setDisplayedAccent] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let titleIndex = 0;
    let accentIndex = 0;
    let titleTimeout: NodeJS.Timeout;
    let accentTimeout: NodeJS.Timeout;

    // Start typing the main title
    const typeTitle = () => {
      if (titleIndex < title.length) {
        setDisplayedTitle(title.slice(0, titleIndex + 1));
        titleIndex++;
        titleTimeout = setTimeout(typeTitle, 100); // Adjust speed here
      } else {
        // Start typing the accent after a short delay
        setTimeout(() => {
          const typeAccent = () => {
            if (titleAccent && accentIndex < titleAccent.length) {
              setDisplayedAccent(titleAccent.slice(0, accentIndex + 1));
              accentIndex++;
              accentTimeout = setTimeout(typeAccent, 100); // Adjust speed here
            } else {
              setIsTypingComplete(true);
            }
          };
          typeAccent();
        }, 300);
      }
    };

    typeTitle();

    // Cleanup timeouts
    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(accentTimeout);
    };
  }, [title, titleAccent]);
  const getTextAlignment = () => {
    if (textAlign === "center") {
      return "text-center justify-center";
    }
    return "justify-start";
  };

  const getContentMargin = () => {
    if (textAlign === "center") {
      return "mx-auto";
    }
    return "ml-4 sm:ml-6 md:ml-8 lg:ml-16 xl:ml-24 2xl:ml-32";
  };

  const getButtonAlignment = () => {
    if (textAlign === "center") {
      return "justify-center";
    }
    return "justify-start";
  };

  return (
    <section
      className="relative flex items-center bg-cover bg-center bg-no-repeat [background-attachment:fixed] sm:[background-attachment:scroll]"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        minHeight: "110vh",
      }}
    >
      {/* Overlay - Radial gradient for about, services, services/[slug], and contact pages, simple dark overlay for other pages */}
      <div
        className="absolute inset-0 z-5"
        style={{
          background: shouldUseRadialGradient
            ? "radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.93) 50%, rgba(0, 0, 0, 1) 100%)"
            : "rgba(28, 28, 28, 0.5)",
          opacity: 1,
        }}
      ></div>

      {/* Main Hero Content */}
      <div
        className={`relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-7xl mx-auto ${getContentMargin()}`}
      >
        <div className={`flex flex-col ${getTextAlignment()}`}>
          <h1 className="hero-headline mb-3 sm:mb-4 md:mb-6">
            <span>{displayedTitle}</span>
            {titleAccent && (
              <span className="hero-headline-accent"> {displayedAccent}</span>
            )}
            <span className="inline-block w-0.5 h-4 sm:h-6 md:h-8 bg-white ml-1 animate-pulse">
              {!isTypingComplete && "|"}
            </span>
          </h1>
          <p
            className={`hero-description mb-4 sm:mb-6 md:mb-8 transition-opacity duration-1000 ${
              isTypingComplete ? "opacity-100" : "opacity-0"
            }`}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          {buttons && buttons.length > 0 && (
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${getButtonAlignment()} items-start transition-opacity duration-1000 delay-500 ${
                isTypingComplete ? "opacity-100" : "opacity-0"
              }`}
            >
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`hero-button inline-flex items-center font-semibold hover:scale-105 ${
                    button.variant === "primary"
                      ? "btn-primary hero-button-primary"
                      : "hero-button-secondary"
                  }`}
                  style={
                    button.variant === "primary"
                      ? {
                          // Primary button (Get Started) styles
                          height: "clamp(56px, 8vh, 76px)",
                          padding:
                            "clamp(12px, 2vw, 20px) clamp(32px, 5vw, 64px)",
                          gap: "0px",
                          borderRadius: "80px",
                          backgroundColor: "#9DD8A7",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          opacity: 1,
                          transform: "rotate(0deg)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          // Secondary button (explore service) styles
                          width: "clamp(274px, 30vw, 345px)",
                          height: "clamp(56px, 8vh, 76px)",
                          padding:
                            "clamp(12px, 2vw, 20px) clamp(24px, 4vw, 40px)",
                          gap: "0px",
                          borderRadius: "80px",
                          border: "1px solid #FAFAFA",
                          backgroundColor: "transparent",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          opacity: 1,
                          transform: "rotate(0deg)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (button.variant === "primary") {
                      e.currentTarget.style.backgroundColor = "#4FD1C5";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(56, 161, 105, 0.3)";
                    } else {
                      e.currentTarget.style.backgroundColor = "#FAFAFA";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(250, 250, 250, 0.2)";
                      // Update text color on hover
                      const container = e.currentTarget.querySelector("div");
                      const textSpan = container?.querySelector("span");
                      if (textSpan) {
                        (textSpan as HTMLElement).style.color = "#0B1F3A";
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (button.variant === "primary") {
                      e.currentTarget.style.backgroundColor = "#9DD8A7";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    } else {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                      // Reset text color
                      const container = e.currentTarget.querySelector("div");
                      const textSpan = container?.querySelector("span");
                      if (textSpan) {
                        (textSpan as HTMLElement).style.color = "#FAFAFA";
                      }
                    }
                  }}
                >
                  {button.variant === "secondary" ? (
                    <div
                      className="w-full"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        opacity: 1,
                        transform: "rotate(0deg)",
                      }}
                    >
                      <span
                        className="flex-1"
                        style={{
                          fontFamily: "Grift",
                          fontWeight: 500,
                          fontStyle: "normal",
                          fontSize: "clamp(1rem, 2vw, 1.75rem)",
                          letterSpacing: "0%",
                          color: "#FAFAFA",
                          opacity: 1,
                          transform: "rotate(0deg)",
                        }}
                      >
                        {button.text}
                      </span>
                      {button.icon && (
                        <ArrowRightIcon
                          className="flex-shrink-0"
                          style={{
                            width: "clamp(24px, 3vw, 32px)",
                            height: "clamp(24px, 3vw, 32px)",
                            opacity: 1,
                          }}
                        />
                      )}
                    </div>
                  ) : (
                    <div
                      className="w-full"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0px",
                        opacity: 1,
                        transform: "rotate(0deg)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Grift",
                          fontWeight: 500,
                          fontStyle: "normal",
                          fontSize: "clamp(1rem, 2vw, 1.75rem)",
                          letterSpacing: "0%",
                          color: "#0A0A0A",
                          opacity: 1,
                          transform: "rotate(0deg)",
                        }}
                      >
                        {button.text}
                      </span>
                      {button.icon && (
                        <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      )}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {showScrollDown && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-white text-sm font-medium">Scroll Down</span>
            <div className="flex flex-col items-center space-y-1">
              <svg
                className="w-6 h-6 text-white animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section with Brand Logos */}
      {showFooter && (
        <div
          className="hidden md:block absolute bottom-0 left-0 right-0 h-[8vh] sm:h-[10vh] px-2 sm:px-4"
          style={{
            backgroundColor: "#00000069",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="mx-auto flex flex-col h-full sm:flex-row justify-between items-center">
            {/* Brand Logos - Infinite Scrolling */}
            <div className="flex-1 mb-2 sm:mb-0 overflow-hidden">
              <div className="flex items-center space-x-4 sm:space-x-8 animate-scroll">
                {/* First set of logos */}
                {footerLogos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-center space-x-1 sm:space-x-2 whitespace-nowrap"
                  >
                    <div
                      className="text-white text-sm sm:text-base md:text-lg mx-5"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "36px",
                      }}
                    >
                      {logo.brand}
                    </div>
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "Grift",
                        fontWeight: 400,
                        fontStyle: "italic",
                        fontSize: "28px",
                        lineHeight: "36px",
                      }}
                    >
                      &ldquo;{logo.quote}&rdquo;
                    </span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {footerLogos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center space-x-1 sm:space-x-2 whitespace-nowrap"
                  >
                    <div
                      className="text-white font-bold text-sm sm:text-base md:text-lg"
                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    >
                      {logo.brand}
                    </div>
                    <span className="text-white text-xs sm:text-sm">
                      &ldquo;{logo.quote}&rdquo;
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Reviews Button */}
            <Link
              href={reviewsLink}
              className="h-full inline-flex items-center justify-center hover:scale-105"
              style={{
                padding:
                  "clamp(0.5rem, 1.5vh, 0.75rem) clamp(0.75rem, 2vw, 1.5rem)",
                backgroundColor: "transparent",
                borderLeft: "1px solid white",
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                fontFamily: "Grift",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "36px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              View all Reviews
              <ArrowRightIcon className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Desktop-specific styles to maintain original design */}
      <style jsx global>{`
        @media (min-width: 1920px) {
          .hero-button-primary {
            width: 274px !important;
            height: 76px !important;
            padding: 20px 64px !important;
          }
          .hero-button-secondary {
            width: 345px !important;
            height: 76px !important;
            padding: 20px 40px !important;
          }
          .hero-button span {
            font-size: 28px !important;
            line-height: 36px !important;
          }
          .hero-button div[class*="w-full"] {
            height: 36px !important;
          }
          .hero-button-secondary svg {
            width: 32px !important;
            height: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
