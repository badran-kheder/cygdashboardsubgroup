/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isClientsPage = pathname === "/clients";
  const isServicesPage = pathname === "/services";
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
      className="services-section"
      style={{
        width: "1920px",
        maxWidth: "100%",
        minHeight: "clamp(600px, 80vh, 1207px)",
        paddingTop: "clamp(2rem, 4vh, 48px)",
        paddingRight: "clamp(1rem, 8vw, 160px)",
        paddingBottom: "clamp(2rem, 4vh, 48px)",
        paddingLeft: "clamp(1rem, 8vw, 160px)",
        gap: "clamp(20px, 3vh, 40px)",
        opacity: 1,
        transform: "rotate(0deg)",
        background: isServicesPage
          ? "#000000"
          : isAboutPage
          ? "linear-gradient(180deg, #83685B 0%, #81A8B1 100.02%)"
          : isClientsPage
          ? "linear-gradient(180deg, #0A2445 0%, #979797 100.02%)"
          : "linear-gradient(180deg, #343434 0%, #9A9A9A 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="services-container"
        style={{
          width: "1600px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px, 3vh, 40px)",
        }}
      >
        {/* Header title box */}
        <div
          className="services-header-box"
          style={{
            width: "1600px",
            maxWidth: "100%",
            minHeight: "clamp(200px, 30vh, 340px)",
            paddingTop: "clamp(1.5rem, 3vh, 40px)",
            paddingBottom: "clamp(1.5rem, 3vh, 40px)",
            gap: "0px",
            opacity: 1,
            transform: "rotate(0deg)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="mx-auto services-header-content w-full md:w-auto"
            style={{
              width: "100%",
              maxWidth: "100%",
              minHeight: "clamp(150px, 25vh, 260px)",
              gap: "clamp(20px, 3vh, 40px)",
              opacity: 1,
              transform: "rotate(0deg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              className="services-title"
              style={{
                width: "clamp(100%, 23vw, 444px)",
                maxWidth: "100%",
                minHeight: "clamp(80px, 12vh, 140px)",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: "clamp(2rem, 5vw, 4.375rem)",
                lineHeight: "clamp(2rem, 5vw, 4.375rem)",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                transform: "rotate(0deg)",
                margin: 0,
              }}
            >
              <span className="text-white">{title}</span>
              <br />
              <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
            </h2>
            <p
              className="text-xl text-white services-description"
              style={{
                width: "clamp(100%, 54vw, 1032px)",
                maxWidth: "100%",
                minHeight: "clamp(60px, 8vh, 80px)",
                fontFamily: "Grift, Arial, sans-serif",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
                lineHeight: "clamp(1.25rem, 3vh, 2.5rem)",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                transform: "rotate(0deg)",
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Cards box */}
        {!onlySpecialCard && services && services.length > 0 && (
          <div
            className="services-cards-box"
            style={{
              width: "1600px",
              maxWidth: "100%",
              minHeight: "clamp(400px, 60vh, 731px)",
              paddingTop: "clamp(1.5rem, 3vh, 40px)",
              paddingBottom: "clamp(1.5rem, 3vh, 40px)",
              gap: "clamp(24px, 4vh, 48px)",
              opacity: 1,
              transform: "rotate(0deg)",
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" style={{ width: "100%", maxWidth: "100%" }}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-200 service-card w-full md:w-auto ${
                  clickableCards ? "cursor-pointer" : ""
                }`}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  minHeight: "clamp(500px, 65vh, 651px)",
                  gap: "clamp(24px, 4vh, 48px)",
                  borderRadius: "20px",
                  border: "1px solid #D3D3D3",
                  padding: "clamp(1.5rem, 3vw, 40px)",
                  backgroundColor: "#000000",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => handleCardClick(service, index)}
              >
                {/* Content box inside card */}
                <div
                  className="w-full service-card-content"
                  style={{
                    minHeight: "clamp(400px, 55vh, 571px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: 1,
                    transform: "rotate(0deg)",
                  }}
                >
                  {/* h3 title box */}
                  <div
                    className="w-full"
                    style={{
                      minHeight: "clamp(80px, 12vh, 110px)",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      opacity: 1,
                      transform: "rotate(0deg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h3
                      className="service-card-title"
                      style={{
                        width: "clamp(150px, 20vw, 200px)",
                        maxWidth: "100%",
                        minHeight: "clamp(80px, 12vh, 110px)",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                        lineHeight: "clamp(2rem, 4vh, 3.4375rem)",
                        letterSpacing: "0%",
                        textAlign: "center",
                        color: "white",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <span>{service.title || "Explore "}</span>
                      <span style={{ color: "#77EB8A" }}>
                        {service.titleAccent}
                      </span>
                    </h3>
                  </div>

                  {/* p description */}
                  <div
                    className="w-full"
                    style={{
                      minHeight: "clamp(80px, 10vh, 108px)",
                      gap: "clamp(12px, 2vh, 24px)",
                      opacity: 1,
                      transform: "rotate(0deg)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      className="service-card-description"
                      style={{
                        width: "100%",
                        minHeight: "clamp(80px, 10vh, 108px)",
                        fontFamily: "Grift, Arial, sans-serif",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: "clamp(0.875rem, 2vw, 1.75rem)",
                        lineHeight: "clamp(1.125rem, 2.5vh, 2.25rem)",
                        letterSpacing: "0%",
                        textAlign: "center",
                        color: "white",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className="service-card-image"
                    style={{
                      width: "clamp(100px, 12vw, 150px)",
                      height: "clamp(114px, 15vh, 171.43px)",
                      opacity: 1,
                      transform: "rotate(0deg)",
                      position: "relative",
                      margin: "0 auto",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 150px"
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

                  {/* Button */}
                  {service.buttonText && (
                    <div
                      className="service-card-button"
                      style={{
                        width: "clamp(200px, 20vw, 275px)",
                        maxWidth: "100%",
                        height: "clamp(56px, 7vh, 68px)",
                        paddingTop: "clamp(12px, 1.5vh, 16px)",
                        paddingRight: "clamp(32px, 5vw, 64px)",
                        paddingBottom: "clamp(12px, 1.5vh, 16px)",
                        paddingLeft: "clamp(32px, 5vw, 64px)",
                        gap: "0px",
                        borderRadius: "80px",
                        backgroundColor: "#52B162",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        margin: "0 auto",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#4FD1C5";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#52B162";
                      }}
                    >
                      {isServicesPage && showSpecialService ? (
                        <button
                          onClick={() => handleServiceClick(index)}
                          className="service-card-button-text"
                          style={{
                            fontFamily: "Grift, Arial, sans-serif",
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(1rem, 2vw, 1.75rem)",
                            lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                            letterSpacing: "0%",
                            color: "#FAFAFA",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            opacity: 1,
                            transform: "rotate(0deg)",
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          {service.buttonText}
                        </button>
                      ) : showSpecialService && clickableCards ? (
                        <Link
                          href={service.buttonHref}
                          className="service-card-button-text"
                          style={{
                            fontFamily: "Grift, Arial, sans-serif",
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(1rem, 2vw, 1.75rem)",
                            lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                            letterSpacing: "0%",
                            color: "#FAFAFA",
                            textDecoration: "none",
                            opacity: 1,
                            transform: "rotate(0deg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          {service.buttonText}
                        </Link>
                      ) : showSpecialService ? (
                        <button
                          onClick={() => handleServiceClick(index)}
                          className="service-card-button-text"
                          style={{
                            fontFamily: "Grift, Arial, sans-serif",
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(1rem, 2vw, 1.75rem)",
                            lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                            letterSpacing: "0%",
                            color: "#FAFAFA",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            opacity: 1,
                            transform: "rotate(0deg)",
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          {service.buttonText}
                        </button>
                      ) : (
                        <Link
                          href={service.buttonHref}
                          className="service-card-button-text"
                          style={{
                            fontFamily: "Grift, Arial, sans-serif",
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(1rem, 2vw, 1.75rem)",
                            lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                            letterSpacing: "0%",
                            color: "#FAFAFA",
                            textDecoration: "none",
                            opacity: 1,
                            transform: "rotate(0deg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          {service.buttonText}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            </div>
          </div>
        )}

        {/* Special Service Card - Conditionally Rendered */}
        {showSpecialService && getCurrentSpecialServiceData() && (
          <div ref={specialServiceRef}>
            <SpecialServiceCard {...(getCurrentSpecialServiceData() as any)} />
          </div>
        )}
      </div>

      {/* Desktop-specific styles to maintain original design */}
      <style jsx global>{`
        @media (min-width: 768px) and (max-width: 1919px) {
          .services-header-content {
            width: clamp(100%, 54vw, 1032px) !important;
          }
          .service-card {
            width: clamp(280px, 26vw, 493.33px) !important;
          }
        }
        @media (min-width: 1920px) {
          .services-section {
            height: 1207px !important;
            padding-top: 48px !important;
            padding-right: 160px !important;
            padding-bottom: 48px !important;
            padding-left: 160px !important;
            gap: 40px !important;
          }
          .services-container {
            width: 1600px !important;
            gap: 40px !important;
          }
          .services-header-box {
            width: 1600px !important;
            height: 340px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .services-header-content {
            width: 1032px !important;
            max-width: 1032px !important;
            height: 260px !important;
            gap: 40px !important;
          }
          .services-title {
            width: 444px !important;
            height: 140px !important;
            font-size: 70px !important;
            line-height: 70px !important;
          }
          .services-description {
            width: 1032px !important;
            height: 80px !important;
            font-family: Grift, Arial, sans-serif !important;
            font-weight: 400 !important;
            font-style: normal !important;
            font-size: 28px !important;
            line-height: 36px !important;
            letter-spacing: 0% !important;
            text-align: center !important;
          }
          .services-cards-box {
            width: 1600px !important;
            height: 731px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
            gap: 48px !important;
          }
          .service-card {
            width: 493.33px !important;
            max-width: 493.33px !important;
            height: 651px !important;
            gap: 48px !important;
            padding: 40px !important;
          }
          .service-card-content {
            width: 413.33px !important;
            height: 571px !important;
          }
          .service-card-title {
            width: 200px !important;
            height: 110px !important;
            font-size: 48px !important;
            line-height: 55px !important;
          }
          .service-card-description {
            width: 413.33px !important;
            height: 108px !important;
            font-size: 28px !important;
            line-height: 36px !important;
          }
          .service-card-image {
            width: 150px !important;
            height: 171.43px !important;
          }
          .service-card-button {
            width: 275px !important;
            height: 68px !important;
            padding-top: 16px !important;
            padding-right: 64px !important;
            padding-bottom: 16px !important;
            padding-left: 64px !important;
          }
          .service-card-button-text {
            font-size: 28px !important;
            line-height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
