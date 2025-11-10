"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMemberData {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  position?: string;
}

interface FlyonCarouselProps {
  teamMembers?: TeamMemberData[];
}

export default function FlyonCarousel({ teamMembers: propTeamMembers }: FlyonCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fallback team members data
  const fallbackTeamMembers = [
    {
      id: 1,
      title: "Fouad Najjar",
      description: "With over a decade of banking and advisory experience across MENA, Fouad guides business through complex financial decisions—from strategic planning to mergers & acquisitions. He turns data into actionable insights, empowering teams to make confident, growth-driven decisions, and is known for his collaborative approach and clear communication.",
      image: "/images/slide.png",
      alt: "Fouad Najjar",
      position: "Managing Director",
    },
    {
      id: 2,
      title: "Sarah Johnson",
      description: "Sarah brings extensive experience in financial strategy and risk management, helping organizations navigate complex market conditions with data-driven insights. Her expertise in regulatory compliance and strategic planning has helped numerous companies achieve sustainable growth and operational excellence.",
      image: "/images/hero-bg.png",
      alt: "Sarah Johnson",
      position: "Senior Advisor",
    },
    {
      id: 3,
      title: "Ahmed Hassan",
      description: "Ahmed specializes in investment analysis and portfolio management, with a proven track record of identifying high-potential opportunities across diverse sectors. His analytical approach and deep market knowledge enable clients to make informed investment decisions that drive long-term value creation.",
      image: "/images/services.png",
      alt: "Ahmed Hassan",
      position: "Investment Director",
    }
  ];

  // Use prop team members if provided, otherwise use fallback
  const teamMembers = propTeamMembers && propTeamMembers.length > 0 ? propTeamMembers : fallbackTeamMembers;

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isClient, teamMembers.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isClient) {
    // Return a static version for SSR
    return (
      <div className="relative w-full h-[55vh] sm:h-[60vh] border rounded-2xl">
        <div className="carousel flex space-x-2 rounded-none">
          <div className="relative grow overflow-hidden rounded-2xl">
              <div className="h-[55vh] sm:h-[60vh]">
              <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                <div className="w-1/2 relative">
                  <Image
                    src="/images/slide.png"
                    fill
                    className="object-cover"
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
              <div className="relative grayscale opacity-30 rounded-lg h-[30%] w-full">
                <Image
                  src="/images/slide.png"
                  fill
                  className="object-cover rounded-lg"
                  alt="Fouad Najjar"
                />
              </div>
              <div className="relative grayscale opacity-30 rounded-lg h-[30%] w-full">
                <Image
                  src="/images/hero-bg.png"
                  fill
                  className="object-cover rounded-lg"
                  alt="Sarah Johnson"
                />
              </div>
              <div className="relative grayscale opacity-30 rounded-lg h-[30%] w-full">
                <Image
                  src="/images/services.png"
                  fill
                  className="object-cover rounded-lg"
                  alt="Ahmed Hassan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Transform team members data to slides format
  const slides = teamMembers.map(member => ({
    name: member.title,
    title: member.position || "Team Member",
    image: member.image,
    description: member.description.split('. ').filter(sentence => sentence.trim().length > 0).map(sentence => 
      sentence.endsWith('.') ? sentence : sentence + '.'
    )
  }));

  return (
    <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] bg-black p-6 sm:p-8 border rounded-2xl">
      <div className="flex space-x-2 rounded-none h-full">
        <div className="relative grow overflow-hidden">
          {/* Main slide container with fade effect */}
          <div className="relative h-[53vh] sm:h-[58vh] md:h-[63vh] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                  <div className="w-[35%] relative h-[100%] sm:h-[100%] ">
                    <Image
                      src={slide.image}
                      fill
                      className="object-cover"
                      alt={slide.name}
                    />
                  </div>
                  <div className="w-1/2 bg-black p-4 sm:p-8 pt-[5%] flex flex-col justify-space-between">
                    <div className="pl-10">
                      <h3
                        className="text-primary-500 mb-2 flyon-carousel-name"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: "clamp(2rem, 5vw, 4.375rem)",
                          margin: 0,
                        }}
                      >
                        {slide.name}
                      </h3>
                      <p
                        className="text-white mb-4 mt-5 flyon-carousel-title"
                        style={{
                          fontFamily: "Grift, Arial, sans-serif",
                          fontStyle: "italic",
                          fontSize: "clamp(1rem, 2.5vw, 2rem)",
                        }}
                      >
                        {slide.title}
                      </p>
                      <div className="w-full my-10 h-px bg-white mb-6"></div>
                    </div>
                    <div className="pl-10">
                      {slide.description.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-white mb-3 sm:mb-4 flyon-carousel-description"
                          style={{
                            fontFamily: "Grift, Arial, sans-serif",
                            fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
                            margin: 0,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            type="button"
            onClick={() => goToSlide((currentSlide - 1 + 3) % 3)}
            className="absolute start-5 max-sm:start-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white stroke-[2.5]" />
            <span className="sr-only">Previous</span>
          </button>
          
          <button
            type="button"
            onClick={() => goToSlide((currentSlide + 1) % 3)}
            className="absolute end-5 max-sm:end-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white stroke-[2.5]" />
            <span className="sr-only">Next</span>
          </button>
        </div>
        
        {/* Thumbnail navigation */}
        <div className="flex-none">
          <div className="h-full max-sm:w-8 w-[200px] flex justify-between flex-col gap-y-2 overflow-hidden">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative rounded-lg h-[30%] w-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'opacity-100 scale-105' 
                    : 'opacity-30 grayscale hover:opacity-60'
                }`}
              >
                <Image
                  src={slide.image}
                  fill
                  className="object-cover rounded-lg"
                  alt={slide.name}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop lock: Maintain original desktop view for team member name, title, and description */}
      <style jsx global>{`
        @media (min-width: 1920px) {
          .flyon-carousel-name {
            font-size: 70px !important;
            line-height: 70px !important;
          }
          .flyon-carousel-title {
            font-size: 32px !important;
            line-height: 40px !important;
          }
          .flyon-carousel-description {
            font-size: 20px !important;
            line-height: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
