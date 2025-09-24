"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import SimpleHero from "@/components/SimpleHero";
import Services from "@/components/Services";
import { getServices } from "@/lib/strapi";
import { transformService } from "@/lib/transform";
import { Service, ServiceData } from "@/types/strapi";
import {
  getPageSectionBySectionId,
  getPageServicesSectionByPageName,
  getPageHeroSectionByPageName,
} from "@/lib/strapi";
import {
  transformPageSection,
  transformPageServicesSection,
  transformPageHeroSection,
} from "@/lib/transform";
import { PageSectionData, PageServicesSectionData, PageHeroSectionData } from "@/types/strapi";

// Interface for the hard-coded service data
interface ServiceDetail {
  title: string;
  titleAccent: string;
  description: string;
  heroBackground: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  ctaTitle: string;
  ctaTitleAccent: string;
  ctaButtonText: string;
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // State for the dynamic services section
  const [pageServicesData, setPageServicesData] =
    useState<PageServicesSectionData | null>(null);
  const [simpleHeroData, setSimpleHeroData] = useState<PageSectionData | null>(
    null
  );
  const [heroData, setHeroData] = useState<PageHeroSectionData | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(
    null
  );

  // useEffect to fetch data when the slug changes
  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const pageName = `service-${slug}`;
        const pageServices = await getPageServicesSectionByPageName(pageName);

        if (pageServices) {
          const transformedData = transformPageServicesSection(pageServices);
          setPageServicesData(transformedData);
        } else {
          setPageServicesData(null);
        }
        // Fetch hero section for this service page
        const heroSection = await getPageHeroSectionByPageName(pageName);
        if (heroSection) {
          setHeroData(transformPageHeroSection(heroSection));
        } else {
          setHeroData(null);
        }
        // Fetch services and pick the one matching this page's slug via serviceKey
        const allServices = await getServices();
        if (allServices && allServices.length > 0) {
          const targetKey = slug.replace("-advisory", "");
          const found = (allServices as Service[]).find(
            (s) => (s.serviceKey || "").toLowerCase() === targetKey
          );
          if (found) {
            setSelectedService(transformService(found));
          } else {
            setSelectedService(null);
          }
        }

        const simpleHeroSectionId = `${slug}-hero`;
        const simpleHeroSection = await getPageSectionBySectionId(
          simpleHeroSectionId
        );
        if (simpleHeroSection) {
          setSimpleHeroData(transformPageSection(simpleHeroSection));
        } else {
          setSimpleHeroData(null);
        }
      } catch (error) {
        console.error("Error fetching page services section data:", error);
        setPageServicesData(null);
      }
    };

    fetchData();
  }, [slug]);

  // This hard-coded data is still used for the top part of the page
  const getServiceData = (slug: string): ServiceDetail => {
    const services: Record<string, ServiceDetail> = {
      "strategic-advisory": {
        title: "Strategic",
        titleAccent: "Advisory",
        description:
          "Comprehensive strategic planning and advisory services to optimize your business operations and drive sustainable growth.",
        heroBackground: "/images/hero-bg.png",
        heroDescription:
          "Transform your business with expert strategic guidance. From market analysis to growth strategies, we help you navigate complex business challenges and unlock your full potential.",
        overview:
          "Our Strategic Advisory service provides comprehensive guidance to help businesses navigate complex challenges, identify growth opportunities, and implement effective strategies for long-term success.",
        benefits: [
          "Data-driven strategic insights and market analysis",
          "Customized growth and expansion strategies",
          "Risk assessment and mitigation planning",
          "Performance optimization and efficiency improvements",
          "Stakeholder alignment and change management",
          "Competitive positioning and market differentiation",
        ],
        process: [
          {
            step: 1,
            title: "Discovery & Analysis",
            description:
              "Comprehensive assessment of your business, market position, and strategic objectives.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            ),
          },
          {
            step: 2,
            title: "Strategy Development",
            description:
              "Creation of tailored strategic plans aligned with your business goals and market opportunities.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            ),
          },
          {
            step: 3,
            title: "Implementation Support",
            description:
              "Ongoing guidance and support to ensure successful execution of strategic initiatives.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            ),
          },
        ],
        features: [
          {
            title: "Market Research",
            description:
              "Comprehensive market analysis and competitive intelligence to inform strategic decisions.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            ),
          },
          {
            title: "Financial Modeling",
            description:
              "Advanced financial analysis and forecasting to support strategic planning and decision-making.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            ),
          },
          {
            title: "Risk Assessment",
            description:
              "Identification and mitigation of strategic risks to protect business value and ensure success.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            ),
          },
        ],
        ctaTitle: "Ready to Transform",
        ctaTitleAccent: "Your Business",
        ctaButtonText: "Get Started Today",
      },
      "sell-side-advisory": {
        title: "Sell-Side",
        titleAccent: "Advisory",
        description:
          "Expert guidance through the entire sell-side process, maximizing value and ensuring smooth transactions.",
        heroBackground: "/images/stock.png",
        heroDescription:
          "Maximize your business value with expert sell-side advisory services. We guide you through every step of the sale process to achieve optimal outcomes.",
        overview:
          "Our Sell-Side Advisory service helps business owners maximize value and achieve successful exits through comprehensive transaction support, from preparation to closing.",
        benefits: [
          "Maximum value realization through strategic positioning",
          "Comprehensive buyer identification and outreach",
          "Professional transaction management and negotiation",
          "Due diligence preparation and support",
          "Legal and regulatory compliance guidance",
          "Post-transaction integration planning",
        ],
        process: [
          {
            step: 1,
            title: "Preparation & Valuation",
            description:
              "Business assessment, financial preparation, and comprehensive valuation analysis.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            ),
          },
          {
            step: 2,
            title: "Marketing & Outreach",
            description:
              "Strategic buyer identification, marketing materials, and targeted outreach campaigns.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            ),
          },
          {
            step: 3,
            title: "Negotiation & Closing",
            description:
              "Expert negotiation support, due diligence management, and transaction closing assistance.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ),
          },
        ],
        features: [
          {
            title: "Financial Modeling",
            description:
              "Advanced financial analysis and projections to support valuation and negotiations.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            ),
          },
          {
            title: "Buyer Outreach",
            description:
              "Strategic identification and engagement of qualified buyers to maximize competitive interest.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            ),
          },
          {
            title: "Transaction Support",
            description:
              "Comprehensive support throughout the entire transaction process to ensure smooth execution.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ),
          },
        ],
        ctaTitle: "Ready to Maximize",
        ctaTitleAccent: "Your Value",
        ctaButtonText: "Start Your Exit",
      },
      "buy-side-advisory": {
        title: "Buy-Side",
        titleAccent: "Advisory",
        description:
          "Strategic acquisition support and due diligence to help you make informed investment decisions.",
        heroBackground: "/images/t-stock.png",
        heroDescription:
          "Make confident acquisition decisions with expert buy-side advisory services. We help you identify, evaluate, and execute strategic acquisitions.",
        overview:
          "Our Buy-Side Advisory service provides comprehensive support for strategic acquisitions, from target identification through due diligence to successful integration.",
        benefits: [
          "Strategic target identification and screening",
          "Comprehensive due diligence and risk assessment",
          "Valuation analysis and negotiation support",
          "Integration planning and execution",
          "Post-acquisition performance monitoring",
          "Strategic alignment and value creation",
        ],
        process: [
          {
            step: 1,
            title: "Target Identification",
            description:
              "Strategic screening and identification of potential acquisition targets aligned with your objectives.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            ),
          },
          {
            step: 2,
            title: "Due Diligence",
            description:
              "Comprehensive analysis of financial, operational, and strategic aspects of potential targets.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            ),
          },
          {
            step: 3,
            title: "Execution & Integration",
            description:
              "Transaction execution support and post-acquisition integration planning and implementation.",
            icon: (
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            ),
          },
        ],
        features: [
          {
            title: "Target Screening",
            description:
              "Strategic identification and evaluation of potential acquisition targets.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            ),
          },
          {
            title: "Due Diligence",
            description:
              "Comprehensive analysis of financial, operational, and strategic aspects.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            ),
          },
          {
            title: "Integration Planning",
            description:
              "Strategic planning and execution of post-acquisition integration.",
            icon: (
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            ),
          },
        ],
        ctaTitle: "Ready to Acquire",
        ctaTitleAccent: "Strategic Assets",
        ctaButtonText: "Start Your Search",
      },
    };
    return services[slug] || services["strategic-advisory"];
  };

  const serviceData = getServiceData(slug);

  

  const fallbackHeroData = {
    backgroundImage: serviceData.heroBackground,
    title: serviceData.title,
    titleAccent: serviceData.titleAccent,
    description: serviceData.heroDescription,
    buttons: [
      {
        text: "Let's Talk",
        href: "/contact",
        variant: "primary" as const,
        icon: true,
      },
    ],
    textAlign: "left" as const,
  };

  // Fallback data for the first dynamic services section
  const fallbackPageServicesData: PageServicesSectionData = {
    id: 1,
    pageName: "service-fallback",
    title: "Grow Boldly.",
    titleAccent: "Think Strategically",
    description:
      "Strategic Advisory to overcome challenges, unlock growth, and reach long-term goals — with expert insights and practical support.",
    backgroundGradient: "linear-gradient(180deg, #203829 0%, #979797 100.02%)",
    showSpecialService: false,
    clickableCards: false,
    services: [
      {
        id: 1,
        title: "Made For",
        titleAccent: "Founders",
        description:
          "We help you gain clarity, monitor key performance metrics, and build a foundation for sustainable growth.",
        image: "/images/serv-ico.png",
        imageAlt: "Founders",
        buttonText: "",
        buttonHref: "",
        serviceKey: "",
        subServices: [],
      },
      {
        id: 2,
        title: "Made For",
        titleAccent: "Businesses",
        description:
          "We streamline decisions and boost efficiency by optimizing your financial and operational setup.",
        image: "/images/serv2-ico.png",
        imageAlt: "Businesses",
        buttonText: "",
        buttonHref: "",
        serviceKey: "",
        subServices: [],
      },
      {
        id: 3,
        title: "Made For",
        titleAccent: "Entrepreneurs",
        description:
          "Strategic guidance and tailored solutions to help you grow and adapt with confidence.",
        image: "/images/serv3-ico.png",
        imageAlt: "Entrepreneurs",
        buttonText: "",
        buttonHref: "",
        serviceKey: "",
        subServices: [],
      },
    ],
  };

  const currentPageServicesData = pageServicesData || fallbackPageServicesData;
  const fallbackSimpleHeroData: PageSectionData = {
    id: 1,
    sectionId: "service-fallback-hero",
    title: "Driving Smarter",
    titleAccent: "Growth",
    description:
      "Expert support for businesses and entrepreneurs. From performance tracking to strategic decision-making, we guide you every step of the way.",
    backgroundImage: "/images/service-bg.png",
  };
  const currentSimpleHeroData = simpleHeroData || fallbackSimpleHeroData;

  return (
    <main>
      <Hero
        backgroundImage={(heroData && heroData.backgroundImage) || fallbackHeroData.backgroundImage}
        title={(heroData && heroData.title) || fallbackHeroData.title}
        titleAccent={(heroData && heroData.titleAccent) || fallbackHeroData.titleAccent}
        description={(heroData && heroData.description) || fallbackHeroData.description}
        buttons={(heroData && heroData.buttons) || fallbackHeroData.buttons}
        textAlign={(heroData && heroData.textAlign) || fallbackHeroData.textAlign}
      />
      <SimpleHero
        backgroundImage={currentSimpleHeroData.backgroundImage}
        title={currentSimpleHeroData.title}
        titleAccent={currentSimpleHeroData.titleAccent}
        description={currentSimpleHeroData.description}
      />
      <Services
        title={currentPageServicesData.title}
        titleAccent={currentPageServicesData.titleAccent}
        description={currentPageServicesData.description}
        backgroundGradient={currentPageServicesData.backgroundGradient}
        services={currentPageServicesData.services}
        showSpecialService={currentPageServicesData.showSpecialService}
      />
      <Services
        title={serviceData.title}
        titleAccent={serviceData.titleAccent}
        description={serviceData.description}
        backgroundGradient="linear-gradient(180deg, #000000 0%, #000000 100%)"
        services={selectedService ? [selectedService] : []}
        showSpecialService={true}
        onlySpecialCard={true}
        defaultActiveIndex={0}
      />
    </main>
  );
}
