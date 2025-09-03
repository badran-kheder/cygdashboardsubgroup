"use client";

import { useEffect, useState } from "react";

export default function HorizontalCarousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a static version for SSR
    return (
      <div className="relative w-full h-[60vh]">
        <div className="carousel flex flex-col space-y-4 rounded-none">
          <div className="relative grow overflow-hidden rounded-2xl">
            <div className="h-[45vh]">
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
            <div className="h-[10vh] w-full flex justify-center gap-x-2 overflow-hidden">
              <img
                src="/images/slide.png"
                className="grayscale opacity-30 rounded-lg h-full w-[15%] object-cover"
                alt="Fouad Najjar"
              />
              <img
                src="/images/hero-bg.png"
                className="grayscale opacity-30 rounded-lg h-full w-[15%] object-cover"
                alt="Sarah Johnson"
              />
              <img
                src="/images/services.png"
                className="grayscale opacity-30 rounded-lg h-full w-[15%] object-cover"
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
      id="horizontal-thumbnails"
      data-carousel='{ "loadingClasses": "opacity-0" }'
      className="relative w-full h-[70vh] bg-black p-8"
    >
      <div className="carousel flex flex-col space-y-4 rounded-none w-[70vw]">
        <div className="relative grow overflow-hidden rounded-2xl">
          <div className="carousel-body h-[55vh] opacity-0">
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
            {/* Slide 2 - Sarah Johnson */}
            <div className="carousel-slide">
              <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                <div className="w-1/3 relative h-[80%] mt-[5%]">
                  <img
                    src="/images/hero-bg.png"
                    className="w-full h-full object-cover"
                    alt="Sarah Johnson"
                  />
                </div>
                <div className="w-1/2 bg-black p-8 pt-[5%] flex flex-col justify-space-between">
                  <div>
                    <h3 className="text-4xl font-bold text-primary-500 mb-2">
                      Sarah Johnson
                    </h3>
                    <p className="text-white text-lg mb-4">Senior Advisor</p>
                    <div className="w-full h-px bg-white mb-6"></div>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed mb-4">
                      Sarah brings extensive experience in financial modeling
                      and risk assessment, helping clients navigate complex
                      market conditions with data-driven strategies.
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      Her expertise in regulatory compliance and strategic
                      planning has guided numerous organizations through
                      successful transformations and growth initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 3 - Ahmed Hassan */}
            <div className="carousel-slide">
              <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                <div className="w-1/3 relative h-[80%] mt-[5%]">
                  <img
                    src="/images/services.png"
                    className="w-full h-full object-cover"
                    alt="Ahmed Hassan"
                  />
                </div>
                <div className="w-1/2 bg-black p-8 pt-[5%] flex flex-col justify-space-between">
                  <div>
                    <h3 className="text-4xl font-bold text-primary-500 mb-2">
                      Ahmed Hassan
                    </h3>
                    <p className="text-white text-lg mb-4">
                      Investment Director
                    </p>
                    <div className="w-full h-px bg-white mb-6"></div>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed mb-4">
                      Ahmed specializes in investment strategy and portfolio
                      management, with a proven track record of delivering
                      superior returns across diverse asset classes.
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      His deep understanding of emerging markets and innovative
                      investment approaches has helped clients achieve their
                      financial objectives while managing risk effectively.
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
          <div className="carousel-pagination h-[10vh] w-full flex justify-center gap-x-2 overflow-hidden">
            <img
              src="/images/slide.png"
              className="carousel-pagination-item rounded-lg h-full w-[15%] object-cover"
              alt="Fouad Najjar"
            />
            <img
              src="/images/hero-bg.png"
              className="carousel-pagination-item rounded-lg h-full w-[15%] object-cover"
              alt="Sarah Johnson"
            />
            <img
              src="/images/services.png"
              className="carousel-pagination-item rounded-lg h-full w-[15%] object-cover"
              alt="Ahmed Hassan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
