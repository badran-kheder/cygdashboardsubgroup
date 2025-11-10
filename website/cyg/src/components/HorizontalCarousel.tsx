"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  alt?: string;
}

interface HorizontalCarouselProps {
  slides?: SlideData[];
}

export default function HorizontalCarousel({}: HorizontalCarouselProps = {}) {
  // Fallback slides data
  const fallbackSlides: SlideData[] = [
    {
      id: 1,
      title: "John Smith",
      description:
        "CYG Partners transformed our financial strategy completely. Their expertise in M&A helped us achieve a 40% increase in valuation. Exceptional service and deep market insights.",
      image: "/images/slide.png",
      alt: "John Smith - CEO",
    },
    {
      id: 2,
      title: "Maria Garcia",
      description:
        "The team's strategic advisory was instrumental in our successful exit. Their attention to detail and comprehensive approach exceeded our expectations. Highly recommended.",
      image: "/images/hero-bg.png",
      alt: "Maria Garcia - Founder",
    },
    {
      id: 3,
      title: "Ahmed Al-Rashid",
      description:
        "Outstanding support throughout our capital raise process. CYG's network and expertise opened doors we never knew existed. Professional, reliable, and results-driven.",
      image: "/images/services.png",
      alt: "Ahmed Al-Rashid - Managing Partner",
    },
    {
      id: 4,
      title: "Jennifer Lee",
      description:
        "Their buy-side advisory helped us identify and acquire the perfect strategic assets. The due diligence process was thorough and their guidance invaluable.",
      image: "/images/slide-1.png",
      alt: "Jennifer Lee - CFO",
    },
    {
      id: 5,
      title: "Robert Chen",
      description:
        "CYG Partners delivered exceptional results on our international expansion. Their cross-border expertise and local market knowledge made all the difference.",
      image: "/images/slide-2.png",
      alt: "Robert Chen - CEO",
    },
    {
      id: 6,
      title: "Sarah Williams",
      description:
        "The strategic planning sessions were transformative for our business. CYG helped us restructure and optimize operations, leading to 60% growth in the first year.",
      image: "/images/slide.png",
      alt: "Sarah Williams - President",
    },
  ];

  // Use fallback data by default
  const slides = fallbackSlides;

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;

    if (diff === 0) {
      return {
        width: "50%",
        opacity: 1,
        zIndex: 30,
        transform: "translateX(0)",
      };
    } else if (
      diff === 1 ||
      (activeIndex === slides.length - 1 && index === 0)
    ) {
      return {
        width: "10%",
        opacity: 1,
        zIndex: 20,
        transform: "translateX(0)",
      };
    } else {
      const position = diff > 0 ? diff - 1 : slides.length + diff - 1;
      return {
        width: "10%",
        opacity: 0.6,
        zIndex: 10,
        transform: `translateX(${position * 2}px)`,
      };
    }
  };

  return (
    <>
      <div
        className="horizontal-carousel-container relative overflow-hidden"
        style={{
          width: "clamp(100%, 100vw, 1920px)",
          maxWidth: "100%",
          minHeight: "clamp(400px, 50vh, 75vh)",
          height: "70vh",
          paddingTop: "clamp(1.5rem, 3vh, 48px)",
          paddingRight: "clamp(1rem, 8vw, 160px)",
          paddingBottom: "clamp(1.5rem, 3vh, 48px)",
          paddingLeft: "clamp(1rem, 8vw, 160px)",
          gap: "clamp(20px, 2vw, 40px)",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div
          className="flex items-center justify-center flex-1 gap-4 bg-black border rounded-2xl overflow-hidden "
          style={{ gap: "clamp(20px, 2vw, 40px)", minHeight: 0 }}
        >
          {/* Arrow buttons hidden - items are clickable instead */}
          <button
            onClick={handlePrevious}
            className="hidden absolute left-4 z-40 p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </button>

          <div className="flex items-center justify-start w-full h-full gap-3 overflow-visible p-10">
            {slides.map((slide, index) => {
              const style = getCardStyle(index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={slide.id}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative h-full overflow-hidden cursor-pointer transition-all duration-500 ease-in-out shrink-0 bg-black",
                  )}
                  style={style}
                >
                  <div className="relative w-full h-full flex flex-row">
                    {/* Left Column: Image */}
                    <div 
                      className="relative h-full flex-shrink-0 transition-all duration-500"
                      style={{
                        width: isActive ? "50%" : "100%"
                      }}
                    >
                      {slide.image && (
                        <Image
                          src={slide.image}
                          alt={slide.alt || slide.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 35vw, 25vw"
                        />
                      )}
                    </div>

                    {/* Right Column: Title and Description */}
                    {isActive && (
                    <div
                      className="relative h-full flex flex-col flex-grow bg-black text-white transition-all duration-500 p-4 sm:p-6 md:p-8"
                      style={{
                        width: "50%"
                      }}
                    >
                      <div className="mb-4">
                        <h3
                          className="text-primary-500 mb-2 horizontal-carousel-name"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontWeight: 300,
                            fontStyle: "normal",
                            fontSize: "clamp(2rem, 5vw, 4.375rem)",
                            lineHeight: "clamp(2rem, 5vw, 4.375rem)",
                            letterSpacing: "0%",
                            margin: 0,
                          }}
                        >
                          {slide.title}
                        </h3>
                        <div className="w-full my-10 h-px bg-white mb-6"></div>
                      </div>
                      <div className="flex-grow">
                        {slide.description
                          .split(". ")
                          .filter((sentence) => sentence.trim().length > 0)
                          .map((sentence, pIndex) => {
                            const paragraph = sentence.endsWith(".") ? sentence : sentence + ".";
                            return (
                              <p
                                key={pIndex}
                                className="text-white mb-3 sm:mb-4 horizontal-carousel-description"
                                style={{
                                  fontFamily: "Grift, Arial, sans-serif",
                                  fontWeight: 400,
                                  fontStyle: "normal",
                                  fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
                                  lineHeight: "clamp(1.125rem, 2vh, 1.75rem)",
                                  letterSpacing: "0%",
                                  margin: 0,
                                }}
                              >
                                {paragraph}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrow buttons hidden - items are clickable instead */}
          <button
            onClick={handleNext}
            className="hidden absolute right-4 z-40 p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </button>
        </div>

        {/* Dots/pagination hidden - items are clickable instead */}
        <div className="hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-full transition-all duration-300 bg-white/70 hover:bg-white",
                index === activeIndex ? "w-8 h-2" : "w-2 h-2"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scoped styles for this carousel only */}
      <style jsx global>{`
        .horizontal-carousel-container {
          --carousel-foreground-rgb: 0, 0, 0;
        }

        @media (prefers-color-scheme: dark) {
          .horizontal-carousel-container {
            --carousel-foreground-rgb: 255, 255, 255;
          }
        }

        .horizontal-carousel-container {
          --carousel-background: 0 0% 100%;
          --carousel-foreground: 0 0% 3.9%;
          --carousel-card: 0 0% 100%;
          --carousel-card-foreground: 0 0% 3.9%;
          --carousel-popover: 0 0% 100%;
          --carousel-popover-foreground: 0 0% 3.9%;
          --carousel-primary: 0 0% 9%;
          --carousel-primary-foreground: 0 0% 98%;
          --carousel-secondary: 0 0% 96.1%;
          --carousel-secondary-foreground: 0 0% 9%;
          --carousel-muted: 0 0% 96.1%;
          --carousel-muted-foreground: 0 0% 45.1%;
          --carousel-accent: 0 0% 96.1%;
          --carousel-accent-foreground: 0 0% 9%;
          --carousel-destructive: 0 84.2% 60.2%;
          --carousel-destructive-foreground: 0 0% 98%;
          --carousel-border: 0 0% 89.8%;
          --carousel-input: 0 0% 89.8%;
          --carousel-ring: 0 0% 3.9%;
          --carousel-chart-1: 12 76% 61%;
          --carousel-chart-2: 173 58% 39%;
          --carousel-chart-3: 197 37% 24%;
          --carousel-chart-4: 43 74% 66%;
          --carousel-chart-5: 27 87% 67%;
          --carousel-radius: 0.5rem;
        }

        .horizontal-carousel-container.dark {
          --carousel-background: 0 0% 3.9%;
          --carousel-foreground: 0 0% 98%;
          --carousel-card: 0 0% 3.9%;
          --carousel-card-foreground: 0 0% 98%;
          --carousel-popover: 0 0% 3.9%;
          --carousel-popover-foreground: 0 0% 98%;
          --carousel-primary: 0 0% 98%;
          --carousel-primary-foreground: 0 0% 9%;
          --carousel-secondary: 0 0% 14.9%;
          --carousel-secondary-foreground: 0 0% 98%;
          --carousel-muted: 0 0% 14.9%;
          --carousel-muted-foreground: 0 0% 63.9%;
          --carousel-accent: 0 0% 14.9%;
          --carousel-accent-foreground: 0 0% 98%;
          --carousel-destructive: 0 62.8% 30.6%;
          --carousel-destructive-foreground: 0 0% 98%;
          --carousel-border: 0 0% 14.9%;
          --carousel-input: 0 0% 14.9%;
          --carousel-ring: 0 0% 83.1%;
          --carousel-chart-1: 220 70% 50%;
          --carousel-chart-2: 160 60% 45%;
          --carousel-chart-3: 30 80% 55%;
          --carousel-chart-4: 280 65% 60%;
          --carousel-chart-5: 340 75% 55%;
        }

        .horizontal-carousel-container * {
          border-color: hsl(var(--carousel-border));
        }

        .horizontal-carousel-container {
          color: hsl(var(--carousel-foreground));
        }

        /* Desktop lock: Maintain original desktop view */
        @media (min-width: 1920px) {
          .horizontal-carousel-container {
            width: 1920px !important;
            max-width: 1920px !important;
            height: 1006px !important;
            padding-top: 48px !important;
            padding-right: 160px !important;
            padding-bottom: 48px !important;
            padding-left: 160px !important;
            gap: 40px !important;
          }
          .horizontal-carousel-name {
            font-size: 70px !important;
            line-height: 70px !important;
          }
          .horizontal-carousel-description {
            font-size: 20px !important;
            line-height: 28px !important;
          }
        }
      `}</style>
    </>
  );
}
