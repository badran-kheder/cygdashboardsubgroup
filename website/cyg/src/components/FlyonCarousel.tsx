"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
      <div className="relative w-full h-[60vh]">
        <div className="carousel flex space-x-2 rounded-none">
          <div className="relative grow overflow-hidden rounded-2xl">
            <div className="h-[60vh]">
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
    <div className="relative w-full h-[70vh] bg-black p-8">
      <div className="flex space-x-2 rounded-none h-full">
        <div className="relative grow overflow-hidden rounded-2xl">
          {/* Main slide container with fade effect */}
          <div className="relative h-[63vh] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex size-full bg-black rounded-2xl overflow-hidden">
                  <div className="w-1/3 relative h-[80%] mt-[5%]">
                    <Image
                      src={slide.image}
                      fill
                      className="object-cover"
                      alt={slide.name}
                    />
                  </div>
                  <div className="w-1/2 bg-black p-8 pt-[5%] flex flex-col justify-space-between">
                    <div>
                      <h3 className="text-4xl font-bold text-primary-500 mb-2">
                        {slide.name}
                      </h3>
                      <p className="text-white text-lg mb-4">{slide.title}</p>
                      <div className="w-full h-px bg-white mb-6"></div>
                    </div>
                    <div>
                      {slide.description.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-white text-sm leading-relaxed mb-4">
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
            className="absolute start-5 max-sm:start-3 top-1/2 -translate-y-1/2 size-9.5 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded-full shadow-lg transition-all duration-200"
          >
            <span className="icon-[tabler--chevron-left] size-5 text-white"></span>
            <span className="sr-only">Previous</span>
          </button>
          
          <button
            type="button"
            onClick={() => goToSlide((currentSlide + 1) % 3)}
            className="absolute end-5 max-sm:end-3 top-1/2 -translate-y-1/2 size-9.5 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded-full shadow-lg transition-all duration-200"
          >
            <span className="icon-[tabler--chevron-right] size-5 text-white"></span>
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
    </div>
  );
}
