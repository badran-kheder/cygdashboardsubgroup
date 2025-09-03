"use client";

import { useParams } from "next/navigation";
import Hero from "@/components/Hero";
import SimpleHero from "@/components/SimpleHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

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

  // This will be replaced with actual data fetching later
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

  const heroData = {
    backgroundImage: serviceData.heroBackground,
    title: serviceData.title,
    titleAccent: serviceData.titleAccent,
    description: serviceData.heroDescription,
    buttons: [
      {
        text: "Get Started",
        href: "/contact",
        variant: "primary" as const,
        icon: true,
      },
    ],
    textAlign: "left" as const,
  };

  return (
    <main>
      {/* Hero Section */}
      <Hero {...heroData} />

      {/* Second Hero Section - Center Aligned */}
      <SimpleHero
        backgroundImage="/images/services.png"
        title="Driving Smarter Growth"
        description="CYG Partners' Strategic Advisory helps businesses and entrepreneurs elevate operations with expert support.

From performance tracking to strategic decision-making, we guide you every step of the way."
      />

      {/* Services Overview Section */}
      <Services
        title="Grow Boldly."
        titleAccent="Think Strategically"
        description="Strategic Advisory to overcome challenges, unlock growth, and reach long-term goals — with expert insights and practical support."
        backgroundGradient="linear-gradient(180deg, #203829 0%, #979797 100.02%)"
        services={[
          {
            title: "Strategic",
            titleAccent: "Advisory",
            description:
              "Comprehensive strategic planning and advisory services to optimize your business operations and drive sustainable growth.",
            image: "/images/hero-bg.png",
            imageAlt: "Strategic Advisory",
            buttonText: "",
            buttonHref: "",
          },
          {
            title: "Sell-Side",
            titleAccent: "Advisory",
            description:
              "Expert guidance through the entire sell-side process, maximizing value and ensuring smooth transactions.",
            image: "/images/stock.png",
            imageAlt: "Sell-Side Advisory",
            buttonText: "",
            buttonHref: "",
          },
          {
            title: "Buy-Side",
            titleAccent: "Advisory",
            description:
              "Strategic acquisition support and due diligence to help you make informed investment decisions.",
            image: "/images/t-stock.png",
            imageAlt: "Buy-Side Advisory",
            buttonText: "",
            buttonHref: "",
          },
        ]}
        showSpecialService={false}
      />

      {/* Core Services Section with Special Card */}
      <Services
        title="Our Services"
        titleAccent="Core"
        description="We offer three core services to help you grow, sell, or scale—clearly and confidently."
        backgroundGradient="linear-gradient(180deg, #000000 0%, #000000 100%)"
        services={[]}
        showSpecialService={true}
        specialServiceData={{
          title: "Ready to",
          titleAccent: "Get Started",
          description:
            "Let's discuss how our advisory services can help you achieve your business goals and drive sustainable growth.",
          buttonText: "Schedule a Consultation",
          buttonHref: "/contact",
          mainIcon: "/images/chess.png",
          mainIconAlt: "Strategic Planning",
          mainContentOrder: 2,
          subServicesOrder: 1,
          subServices: [
            {
              title: "Free Initial Consultation",
              icon: (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
              backgroundColor: "green" as const,
              href: `/services/${slug}/free-initial-consultation`,
            },
            {
              title: "Custom Strategy Development",
              icon: (
                <svg
                  className="w-6 h-6 text-white"
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
              backgroundColor: "black" as const,
              href: `/services/${slug}/custom-strategy-development`,
            },
            {
              title: "Ongoing Support & Guidance",
              icon: (
                <svg
                  className="w-6 h-6 text-white"
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
              backgroundColor: "green" as const,
              href: `/services/${slug}/ongoing-support-guidance`,
            },
          ] as Array<{
            title: string;
            icon: React.ReactNode;
            backgroundColor: "green" | "black";
            href: string;
          }>,
        }}
      />
    </main>
  );
}
