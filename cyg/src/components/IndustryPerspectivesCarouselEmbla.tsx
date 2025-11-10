"use client";

import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PerspectiveCard from "./PerspectiveCard";

interface Perspective {
  imageSrc: string;
  title: string;
  category1: string;
  category2: string;
  date: string;
  href?: string;
}

interface IndustryPerspectivesCarouselEmblaProps {
  perspectives: Perspective[];
}

export default function IndustryPerspectivesCarouselEmbla({
  perspectives,
}: IndustryPerspectivesCarouselEmblaProps) {
  // Check if mobile on initial render (synchronously if in browser)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 1023;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: isMobile, // Loop on mobile, no loop on desktop
    align: "start",
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Re-initialize carousel when isMobile changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ loop: isMobile });
    }
  }, [isMobile, emblaApi]);

  return (
    <section
      id="section-cards"
      className="py-8 pb-16"
      style={{ backgroundColor: "#262626" }}
    >
      <div className="parentSlider embla" ref={emblaRef}>
        <div className="embla__container">
          {perspectives.map((perspective, index) => (
            <div key={index} className="embla__slide">
              <PerspectiveCard
                imageSrc={perspective.imageSrc}
                title={perspective.title}
                category1={perspective.category1}
                category2={perspective.category2}
                date={perspective.date}
                href={perspective.href}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="embla__prev text-white bg-black bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 13L7 9L11 5"
              stroke="#77eb8a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="embla__next text-white bg-black bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
          aria-label="Next slide"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 5L11 9L7 13"
              stroke="#77eb8a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div> */}

      {/* Custom Embla Styles */}
      <style jsx global>{`
        section {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: clamp(1rem, 3vh, 30px) 0;
        }

        .embla {
          overflow: hidden;
        }

        .parentSlider {
          position: relative;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          padding: 0 clamp(0.5rem, 2vw, 15px);
        }

        .embla__container {
          display: flex;
          width: 100%;
        }

        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
          display: flex;
          justify-content: end;
        }

        /* Mobile and Tablet: Normal carousel - 1 slide at a time with spacing */
        @media (max-width: 1023px) {
          .embla__slide {
            flex: 0 0 100%;
            padding: 0 clamp(0.75rem, 3vw, 1rem);
            box-sizing: border-box;
            justify-content: center;
          }
          .embla__container {
            gap: clamp(0.5rem, 2vw, 1rem);
          }
        }

        /* Desktop: 2.5 slides with overlapping effect */
        @media (min-width: 1024px) {
          .embla__slide {
            flex: 0 0 calc(100% / 2.5);
          }
          .embla__slide:not(:first-child) {
            margin-left: -100px;
          }
          .embla__container {
            gap: 0;
          }
        }

        /* Desktop lock: Maintain original desktop view */
        @media (min-width: 1920px) {
          section {
            padding: 30px 0 !important;
          }
          .parentSlider {
            padding: 0 15px !important;
          }
          .embla__slide {
            flex: 0 0 calc(100% / 2.5) !important;
          }
          .embla__slide:not(:first-child) {
            margin-left: -100px !important;
          }
          .embla__container {
            gap: 0 !important;
          }
        }

        .embla__prev,
        .embla__next {
          color: #77eb8a;
        }

        .embla__prev:hover,
        .embla__next:hover {
          background: rgba(119, 235, 138, 0.2) !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

