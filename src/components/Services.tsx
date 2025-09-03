'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import SpecialServiceCard from './SpecialServiceCard'

interface ServiceCard {
  title: string
  titleAccent: string
  description: string
  image: string
  imageAlt: string
  buttonText: string
  buttonHref: string
  serviceKey?: string // Add service key for data mapping
}

interface ServicesProps {
  title: string
  titleAccent: string
  description: string
  backgroundGradient?: string
  services: ServiceCard[]
  showSpecialService?: boolean
  specialServiceData?: {
    title: string
    titleAccent: string
    description: string
    buttonText: string
    buttonHref: string
    mainIcon: string
    mainIconAlt: string
    mainContentOrder?: 1 | 2
    subServicesOrder?: 1 | 2
    subServices: Array<{
      title: string
      icon: React.ReactNode
      backgroundColor: 'green' | 'black'
    }>
  }
}

export default function Services({
  title,
  titleAccent,
  description,
  backgroundGradient = "linear-gradient(180deg, #343434 0%, #9A9A9A 100%)",
  services,
  showSpecialService = false,
  specialServiceData
}: ServicesProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null)
  const specialServiceRef = useRef<HTMLDivElement>(null)

  // Service data mapping for different services
  const serviceDataMap: Record<string, any> = {
    'strategic': {
      title: "Dummy Data 1",
      titleAccent: "Strategic Advisory",
      description: "This is dummy data 1 for Strategic Advisory. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      buttonText: "Get Started",
      buttonHref: "/services/strategic-advisory",
      mainIcon: "/images/chess.png",
      mainIconAlt: "Strategic Advisory",
      subServices: [
        {
          title: "Dummy Service A",
          icon: (
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          backgroundColor: "green" as const,
          href: "/services/strategic-advisory/service-a",
        },
        {
          title: "Dummy Service B",
          icon: (
            <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
            </svg>
          ),
          backgroundColor: "black" as const,
          href: "/services/strategic-advisory/service-b",
        },
        {
          title: "Dummy Service C",
          icon: (
            <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
          ),
          backgroundColor: "black" as const,
          href: "/services/strategic-advisory/service-c",
        },
      ],
    },
    'sell-side': {
      title: "Dummy Data 2",
      titleAccent: "Sell-Side Advisory",
      description: "This is dummy data 2 for Sell-Side Advisory. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      buttonText: "Contact Us",
      buttonHref: "/services/sell-side-advisory",
      mainIcon: "/images/stock.png",
      mainIconAlt: "Sell-Side Advisory",
      subServices: [
        {
          title: "Dummy Feature X",
          icon: (
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          backgroundColor: "green" as const,
          href: "/services/sell-side-advisory/feature-x",
        },
        {
          title: "Dummy Feature Y",
          icon: (
            <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
            </svg>
          ),
          backgroundColor: "black" as const,
          href: "/services/sell-side-advisory/feature-y",
        },
        {
          title: "Dummy Feature Z",
          icon: (
            <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
          ),
          backgroundColor: "black" as const,
          href: "/services/sell-side-advisory/feature-z",
        },
      ],
    },
    'buy-side': {
      title: "Dummy Data 3",
      titleAccent: "Buy-Side Advisory",
      description: "This is dummy data 3 for Buy-Side Advisory. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      buttonText: "Learn More",
      buttonHref: "/services/buy-side-advisory",
      mainIcon: "/images/t-stock.png",
      mainIconAlt: "Buy-Side Advisory",
      subServices: [
        {
          title: "Dummy Option 1",
          icon: (
            <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          backgroundColor: "green" as const,
          href: "/services/buy-side-advisory/option-1",
        },
        {
          title: "Dummy Option 2",
          icon: (
            <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
            </svg>
          ),
          backgroundColor: "black" as const,
          href: "/services/buy-side-advisory/option-2",
        },
        {
          title: "Dummy Option 3",
          icon: (
            <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
          ),
          backgroundColor: "black" as const,
          href: "/services/buy-side-advisory/option-3",
        },
      ],
    },
  }

  const handleServiceClick = (index: number, serviceKey?: string) => {
    setActiveServiceIndex(index)
    
    // Scroll to special service component
    if (specialServiceRef.current) {
      specialServiceRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Get current special service data
  const getCurrentSpecialServiceData = () => {
    if (activeServiceIndex !== null && services[activeServiceIndex]?.serviceKey) {
      const serviceKey = services[activeServiceIndex].serviceKey
      return serviceDataMap[serviceKey] || specialServiceData
    }
    return specialServiceData
  }
  return (
    <section
      className="py-20 px-4 bg-black"
      // style={{
      //   background: backgroundGradient,
      // }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{title}</span>
            <br />
            <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {services && services.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-black border-radius border rounded-xl p-8 transition-all duration-200 h-full flex flex-col ${
                  activeServiceIndex === index 
                    ? 'border-primary-500 shadow-glow bg-primary-700' 
                    : 'border-white hover:border-primary-500 hover:shadow-glow'
                }`}
              >
                <h3 className="text-2xl font-bold text-center text-white mb-4 flex-grow">
                  Explore <span style={{ color: "#77EB8A" }}>{service.titleAccent}</span>
                </h3>
                <p className="text-white text-center mb-8 text-gray-300 flex-grow">
                  {service.description}
                </p>
                <div className="rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = "none";
                        fallback.style.display = "block";
                      }
                    }}
                  />
                  <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold" style={{ display: 'none' }}>
                    {service.titleAccent.charAt(0)}
                  </div>
                </div>
                {service.buttonText && (
                  <div className="mt-auto">
                    <button
                      onClick={() => handleServiceClick(index, service.serviceKey)}
                      className="btn-service inline-flex items-center justify-center font-semibold hover:scale-105 w-full"
                      style={{
                        backgroundColor: activeServiceIndex === index ? "#4FD1C5" : "#38A169",
                        color: "white",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#4FD1C5";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(56, 161, 105, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = activeServiceIndex === index ? "#4FD1C5" : "#38A169";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {service.buttonText}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Special Service Card - Conditionally Rendered */}
      {showSpecialService && getCurrentSpecialServiceData() && (
        <div ref={specialServiceRef}>
          <SpecialServiceCard {...getCurrentSpecialServiceData()} />
        </div>
      )}
    </section>
  )
}
