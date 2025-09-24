/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SpecialServiceCard from "./SpecialServiceCard";

interface ServiceCard {
  title: string;
  titleAccent: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
  serviceKey?: string; // Add service key for data mapping
  subServices?: Array<{
    id: number;
    title: string;
    icon: string;
    backgroundColor: "green" | "black";
    href: string;
  }>;
}

interface ServicesProps {
  title: string;
  titleAccent: string;
  description: string;
  backgroundGradient?: string;
  services: ServiceCard[];
  showSpecialService?: boolean;
  clickableCards?: boolean;
  // Show only the special service card and hide the grid
  onlySpecialCard?: boolean;
  // New: control default selected service on first render
  defaultActiveIndex?: number;
  defaultServiceKey?: string;
  specialServiceData?: {
    title: string;
    titleAccent: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    mainIcon: string;
    mainIconAlt: string;
    mainContentOrder?: 1 | 2;
    subServicesOrder?: 1 | 2;
    subServices: Array<{
      title: string;
      icon: React.ReactNode;
      backgroundColor: "green" | "black";
    }>;
  };
}

export default function Services({
  title,
  titleAccent,
  description,
  backgroundGradient,
  services,
  showSpecialService = false,
  clickableCards = false,
  onlySpecialCard = false,
  defaultActiveIndex,
  defaultServiceKey,
  specialServiceData,
}: ServicesProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(
    null
  );
  const specialServiceRef = useRef<HTMLDivElement>(null);

  // Select a default service on first load (services page can pass defaults)
  useEffect(() => {
    if (!showSpecialService || !services || services.length === 0) return;
    // If a defaultServiceKey is provided, prefer it
    if (defaultServiceKey) {
      const idx = services.findIndex(
        (svc) => (svc.serviceKey || "").toLowerCase() === defaultServiceKey.toLowerCase()
      );
      if (idx !== -1) {
        setActiveServiceIndex(idx);
        return;
      }
    }
    // Else use provided index, else fallback to first card
    if (typeof defaultActiveIndex === "number" && defaultActiveIndex >= 0 && defaultActiveIndex < services.length) {
      setActiveServiceIndex(defaultActiveIndex);
      return;
    }
    setActiveServiceIndex(0);
  }, [showSpecialService, services, defaultActiveIndex, defaultServiceKey]);

  // Build special card data from the selected Strapi service

  const handleServiceClick = (index: number) => {
    setActiveServiceIndex(index);

    // Scroll to special service component
    if (specialServiceRef.current) {
      specialServiceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleCardClick = (service: ServiceCard, index: number) => {
    if (clickableCards) {
      handleServiceClick(index);
    }
  };

  // Get current special service data
  const getCurrentSpecialServiceData = () => {
    if (activeServiceIndex === null) return specialServiceData;
    const current = services[activeServiceIndex];
    if (!current) return specialServiceData;
    return {
      title: current.title,
      titleAccent: current.titleAccent,
      description: current.description,
      buttonText: current.buttonText || "Learn More",
      buttonHref: current.buttonHref || "#",
      mainIcon: current.image,
      mainIconAlt: current.imageAlt || current.titleAccent || current.title,
      subServices: (current.subServices || []).map((s) => ({
        title: s.title,
        icon: s.icon,
        backgroundColor: s.backgroundColor,
        href: s.href,
      })),
    };
  };
  return (
    <section
      className="py-20 px-4 bg-black"
      style={backgroundGradient ? { background: backgroundGradient } : {}}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{title}</span>
            <br />
            <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">{description}</p>
        </div>

        {!onlySpecialCard && services && services.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-black border-radius border rounded-xl p-8 transition-all duration-200 h-full flex flex-col ${
                  activeServiceIndex === index
                    ? "border-primary-500 shadow-glow bg-primary-700"
                    : "border-white hover:border-primary-500 hover:shadow-glow"
                } ${clickableCards ? "cursor-pointer" : ""}`}
                onClick={() => handleCardClick(service, index)}
              >
                <h3 className="text-2xl font-bold text-center text-white mb-4 flex-grow">
                  {service.title || "Explore "}
                  <span style={{ color: "#77EB8A", display: "block" }}>
                    {service.titleAccent}
                  </span>
                </h3>
                <p className="text-white text-center mb-8 text-gray-300 flex-grow">
                  {service.description}
                </p>
                <div className="rounded-lg flex items-center justify-center mb-6 flex-shrink-0 relative w-full h-[20vh]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                  <div
                    className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold absolute inset-0 m-auto"
                    style={{ display: "none" }}
                  >
                    {service.titleAccent.charAt(0)}
                  </div>
                </div>
                {service.buttonText && (
                  <div className="mt-auto flex justify-center">
                    {showSpecialService && clickableCards ? (
                      <Link
                        href={service.buttonHref}
                        className="btn-service inline-flex items-center justify-center font-semibold hover:scale-105 w-full"
                        style={{
                          backgroundColor:
                            activeServiceIndex === index
                              ? "#4FD1C5"
                              : "#38A169",
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
                          e.currentTarget.style.backgroundColor =
                            activeServiceIndex === index
                              ? "#4FD1C5"
                              : "#38A169";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {service.buttonText}
                      </Link>
                    ) : showSpecialService ? (
                      <button
                        onClick={() =>
                          handleServiceClick(index)
                        }
                        className="btn-service inline-flex items-center justify-center font-semibold hover:scale-105 w-full"
                        style={{
                          backgroundColor:
                            activeServiceIndex === index
                              ? "#4FD1C5"
                              : "#38A169",
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
                          e.currentTarget.style.backgroundColor =
                            activeServiceIndex === index
                              ? "#4FD1C5"
                              : "#38A169";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {service.buttonText}
                      </button>
                    ) : (
                      <Link
                        href={service.buttonHref}
                        className="btn-service inline-flex items-center justify-center font-semibold hover:scale-105"
                        style={{
                          backgroundColor:
                            activeServiceIndex === index
                              ? "#4FD1C5"
                              : "#38A169",
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
                          e.currentTarget.style.backgroundColor =
                            activeServiceIndex === index
                              ? "#4FD1C5"
                              : "#38A169";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {service.buttonText}
                      </Link>
                    )}
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
          <SpecialServiceCard {...(getCurrentSpecialServiceData() as any)} />
        </div>
      )}
    </section>
  );
}
