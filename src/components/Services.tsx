'use client'

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
              <div key={index} className="bg-black border-radius border border-white rounded-xl p-8 hover:border-primary-500 transition-all duration-200 hover:shadow-glow h-full flex flex-col">
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
                {service.buttonText && service.buttonHref && (
                  <div className="mt-auto">
                    <Link
                      href={service.buttonHref}
                      className="btn-service inline-flex items-center justify-center font-semibold hover:scale-105 w-full"
                      style={{
                        backgroundColor: "#38A169",
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
                        e.currentTarget.style.backgroundColor = "#38A169";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {service.buttonText}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Special Service Card - Conditionally Rendered */}
      {showSpecialService && specialServiceData && (
        <SpecialServiceCard {...specialServiceData} />
      )}
    </section>
  )
}
