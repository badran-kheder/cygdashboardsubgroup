"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";
// ADDED: Import functions and types for the services section
import { getPageHeroSectionByPageName, getServices } from "@/lib/strapi";
import { transformPageHeroSection, transformService } from "@/lib/transform";
import { PageHeroSectionData, ServiceData, Service } from "@/types/strapi";

export default function ServicesPage() {
  const [heroData, setHeroData] = useState<PageHeroSectionData | null>(null);
  // Services list fetched directly from /api/services
  const [servicesData, setServicesData] = useState<ServiceData[]>([]);

  useEffect(() => {
    // MODIFIED: Renamed function to fetch all page data
    const fetchData = async () => {
      try {
        // Fetch hero data
        const pageHero = await getPageHeroSectionByPageName("services");
        if (pageHero) {
          const transformedHeroData = transformPageHeroSection(pageHero);
          setHeroData(transformedHeroData);
        }

        // Fetch services directly from /api/services
        const servicesResponse = await getServices();
        if (servicesResponse && servicesResponse.length > 0) {
          const transformed = servicesResponse.map((svc: Service) =>
            transformService(svc)
          );
          setServicesData(transformed);
        }
      } catch (error) {
        console.error("Error fetching services page data:", error);
      }
    };

    fetchData();
  }, []);

  // Fallback hero data
  const fallbackHeroData = {
    id: 1,
    pageName: "services",
    title: "Tailored Solutions to",
    titleAccent: "Maximize Value",
    description:
      "Whether you're launching, scaling, or transforming, we deliver trusted guidance at a price that fits your business.",
    backgroundImage: "/images/BG-Services.png",
    buttons: [
      {
        id: 1,
        text: "Get Started",
        href: "/contact",
        variant: "primary" as const,
        icon: true,
      },
    ],
    textAlign: "center" as const,
    showFooter: false,
  };

  const currentHeroData = heroData || fallbackHeroData;

  // Presentation strings for the section
  const servicesSectionTitle = "Our Core";
  const servicesSectionTitleAccent = "Services";
  const servicesSectionDescription =
    "We offer three core services to help you grow, sell, or realize a liquidity event successfully.";
  const servicesBackgroundGradient =
    "linear-gradient(180deg, #1C1C1C 0%, #2D2D2D 100%)";
  const showSpecialService = true;
  const clickableCards = true;

  return (
    <main>
      {/* Hero Section */}
      <Hero
        backgroundImage={currentHeroData.backgroundImage}
        title={currentHeroData.title}
        titleAccent={currentHeroData.titleAccent}
        description={currentHeroData.description}
        buttons={currentHeroData.buttons}
        textAlign={currentHeroData.textAlign}
      />

      {/* Services Component now uses services from /api/services */}
      <AnimateOnScroll animation="fadeInUp" delay={200}>
        <Services
          title={servicesSectionTitle}
          titleAccent={servicesSectionTitleAccent}
          description={servicesSectionDescription}
          backgroundGradient={servicesBackgroundGradient}
          services={servicesData}
          showSpecialService={showSpecialService}
          clickableCards={clickableCards}
          // Default to strategic on first load
          defaultServiceKey="strategic"
        />
      </AnimateOnScroll>

      {/* CTA Component */}
      <AnimateOnScroll animation="fadeInUp" delay={200}>
        <CTA
          title="Choose smart. We'll guide the way."
          titleAccent="smart"
          buttonText="Book a Consultation"
          buttonHref="/contact"
        />
      </AnimateOnScroll>
    </main>
  );
}
