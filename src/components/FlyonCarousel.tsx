"use client";

import { useEffect, useState, useRef } from "react";

export default function FlyonCarousel() {
  const [isClient, setIsClient] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    
    // Initialize FlyonUI carousel after component mounts
    const initCarousel = () => {
      if (typeof window !== 'undefined' && (window as any).HSStaticMethods) {
        // Use the correct FlyonUI initialization method
        (window as any).HSStaticMethods.autoInit();
        console.log('FlyonUI carousel initialized');
      } else {
        // Retry if FlyonUI is not loaded yet
        setTimeout(initCarousel, 100);
      }
    };
    
    // Wait for the script to load and DOM to be ready
    const timeoutId = setTimeout(initCarousel, 300);
    
    // Also listen for when the script loads
    const handleScriptLoad = () => {
      setTimeout(initCarousel, 100);
    };
    
    // Check if script is already loaded
    const script = document.querySelector('script[src="/flyonui.js"]');
    if (script) {
      script.addEventListener('load', handleScriptLoad);
    }
    
    // Also try to initialize when the component becomes visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(initCarousel, 100);
        }
      });
    });
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      if (script) {
        script.removeEventListener('load', handleScriptLoad);
      }
    };
  }, []);

  if (!isClient) {
    // Return a static version for SSR
    return (
      <div className="relative w-full h-[60vh]">
        <div className="carousel flex space-x-2 rounded-none">
          <div className="relative grow overflow-hidden rounded-2xl">
            <div className="h-[60vh]">
              <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                <div className="w-1/2 relative">
                  <img
                    src="/images/slide.png"
                    className="w-full h-full object-cover"
                    alt="Fouad Najjar"
                  />
                </div>
                <div className="w-1/2 bg-black p-8 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-primary-400 mb-2">
                    Fouad Najjar
                  </h3>
                  <p className="text-white text-lg mb-4">Managing Director</p>
                  <div className="w-full h-px bg-white mb-6"></div>
                  <p className="text-white text-sm leading-relaxed mb-4">
                    With over a decade of banking and advisory experience across
                    MENA, Fouad guides business through complex financial
                    decisions—from strategic planning to mergers & acquisitions.
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    He turns data into actionable insights, empowering teams to
                    make confident, growth-driven decisions, and is known for
                    his collaborative approach and clear communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <div className="h-full max-sm:w-8 w-[200px] flex justify-between flex-col gap-y-2 overflow-hidden">
              <img
                src="/images/slide.png"
                className="grayscale opacity-30 rounded-lg h-[30%] w-full object-cover"
                alt="Fouad Najjar"
              />
              <img
                src="/images/hero-bg.png"
                className="grayscale opacity-30 rounded-lg h-[30%] w-full object-cover"
                alt="Sarah Johnson"
              />
              <img
                src="/images/services.png"
                className="grayscale opacity-30 rounded-lg h-[30%] w-full object-cover"
                alt="Ahmed Hassan"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={carouselRef}
      id="vertical-thumbnails"
      data-carousel='{ "loadingClasses": "opacity-0" }'
      className="relative w-full h-[70vh]  bg-black p-8"
    >
      <div className="carousel flex space-x-2 rounded-none">
        <div className="relative grow overflow-hidden rounded-2xl">
          <div className="carousel-body h-[63vh] opacity-0">
            {/* Slide 1 - Fouad Najjar */}
            <div className="carousel-slide">
              <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                <div className="w-1/3 relative h-[80%] mt-[5%]">
                  <img
                    src="/images/slide.png"
                    className="w-full h-full object-cover"
                    alt="Fouad Najjar"
                  />
                </div>
                <div className="w-1/2 bg-black p-8 pt-[5%] flex flex-col justify-space-between">
                  <div>
                    <h3 className="text-4xl font-bold text-primary-500 mb-2">
                      Fouad Najjar
                    </h3>
                    <p className="text-white text-lg mb-4">Managing Director</p>
                    <div className="w-full h-px bg-white mb-6"></div>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed mb-4">
                      With over a decade of banking and advisory experience
                      across MENA, Fouad guides business through complex
                      financial decisions—from strategic planning to mergers &
                      acquisitions.
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      He turns data into actionable insights, empowering teams
                      to make confident, growth-driven decisions, and is known
                      for his collaborative approach and clear communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 1 - Fouad Najjar */}
            <div className="carousel-slide">
              <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                <div className="w-1/3 relative h-[80%] mt-[5%]">
                  <img
                    src="/images/slide.png"
                    className="w-full h-full object-cover"
                    alt="Fouad Najjar"
                  />
                </div>
                <div className="w-1/2 bg-black p-8 pt-[5%] flex flex-col justify-space-between">
                  <div>
                    <h3 className="text-4xl font-bold text-primary-500 mb-2">
                      Fouad Najjar
                    </h3>
                    <p className="text-white text-lg mb-4">Managing Director</p>
                    <div className="w-full h-px bg-white mb-6"></div>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed mb-4">
                      With over a decade of banking and advisory experience
                      across MENA, Fouad guides business through complex
                      financial decisions—from strategic planning to mergers &
                      acquisitions.
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      He turns data into actionable insights, empowering teams
                      to make confident, growth-driven decisions, and is known
                      for his collaborative approach and clear communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 1 - Fouad Najjar */}
            <div className="carousel-slide">
              <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                <div className="w-1/3 relative h-[80%] mt-[5%]">
                  <img
                    src="/images/slide.png"
                    className="w-full h-full object-cover"
                    alt="Fouad Najjar"
                  />
                </div>
                <div className="w-1/2 bg-black p-8 pt-[5%] flex flex-col justify-space-between">
                  <div>
                    <h3 className="text-4xl font-bold text-primary-500 mb-2">
                      Fouad Najjar
                    </h3>
                    <p className="text-white text-lg mb-4">Managing Director</p>
                    <div className="w-full h-px bg-white mb-6"></div>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed mb-4">
                      With over a decade of banking and advisory experience
                      across MENA, Fouad guides business through complex
                      financial decisions—from strategic planning to mergers &
                      acquisitions.
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      He turns data into actionable insights, empowering teams
                      to make confident, growth-driven decisions, and is known
                      for his collaborative approach and clear communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Previous Slide */}
          <button
            type="button"
            className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
          >
            <span className="icon-[tabler--chevron-left] size-5 cursor-pointer"></span>
            <span className="sr-only">Previous</span>
          </button>
          {/* Next Slide */}
          <button
            type="button"
            className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
          >
            <span className="icon-[tabler--chevron-right] size-5"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div className="flex-none">
          <div className="carousel-pagination h-full max-sm:w-8 w-[200px] flex justify-between flex-col gap-y-2 overflow-hidden">
            <img
              src="/images/slide.png"
              className="carousel-pagination-item rounded-lg h-[30%] w-full object-cover"
              alt="Fouad Najjar"
            />
            <img
              src="/images/hero-bg.png"
              className="carousel-pagination-item rounded-lg h-[30%] w-full object-cover"
              alt="Sarah Johnson"
            />
            <img
              src="/images/services.png"
              className="carousel-pagination-item rounded-lg h-[30%] w-full object-cover"
              alt="Ahmed Hassan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
