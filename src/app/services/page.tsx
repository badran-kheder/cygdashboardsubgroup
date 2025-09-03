"use client";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ServicesPage() {
  const heroData = {
    backgroundImage: "/images/services.png",
    title: "Tailored Solutions to",
    titleAccent: "Maximize Value",
    description:
      "Whether you're launching, scaling, or transforming, we deliver trusted guidance at a price that fits your business.",
    buttons: [
      {
        text: "Get Started",
        href: "/contact",
        variant: "primary" as const,
        icon: true,
      },
    ],
    textAlign: "center" as const,
  };

  const servicesData = {
    title: "Our Core",
    titleAccent: "Services",
    description:
      "We offer three core services to help you grow, sell, or realize a liquidity event successfully.",
    backgroundGradient: "linear-gradient(180deg, #1C1C1C 0%, #2D2D2D 100%)",
    services: [
      {
        title: "Strategic",
        titleAccent: "Advisory",
        description:
          "Comprehensive strategic planning and advisory services to optimize your business operations and drive sustainable growth.",
        image: "/images/chess.png",
        imageAlt: "Strategic Advisory",
        buttonText: "Learn More",
        buttonHref: "/services/strategic-advisory",
        serviceKey: "strategic",
      },
      {
        title: "Sell-Side",
        titleAccent: "Advisory",
        description:
          "Expert guidance through the entire sell-side process, maximizing value and ensuring smooth transactions.",
        image: "/images/stock.png",
        imageAlt: "Sell-Side Advisory",
        buttonText: "Learn More",
        buttonHref: "/services/sell-side-advisory",
        serviceKey: "sell-side",
      },
      {
        title: "Buy-Side",
        titleAccent: "Advisory",
        description:
          "Strategic acquisition support and due diligence to help you make informed investment decisions.",
        image: "/images/t-stock.png",
        imageAlt: "Buy-Side Advisory",
        buttonText: "Learn More",
        buttonHref: "/services/buy-side-advisory",
        serviceKey: "buy-side",
      },
    ],
    showSpecialService: true,
    specialServiceData: {
      title: "Explore",
      titleAccent: "Strategic Advisory",
      description:
        "Position your business for the right exit. From valuation to buyer negotiation, we guide you through the entire sale process maximizing outcomes while minimizing disruption.",
      buttonText: "Learn More",
      buttonHref: "/services/strategic-advisory",
      mainIcon: "/images/spec-ico.png",
      mainIconAlt: "Strategic Advisory",
      subServices: [
        {
          title: "Monthly & Quarterly Performance",
          icon: (
            <svg
              className="w-8 h-8 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          backgroundColor: "green" as const,
          href: "/services/strategic-advisory/monthly-quarterly-performance",
        },
        {
          title: "Financial & Operational Monitoring",
          icon: (
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                clipRule="evenodd"
              />
            </svg>
          ),
          backgroundColor: "black" as const,
          href: "/services/strategic-advisory/financial-operational-monitoring",
        },
        {
          title: "Ad Hoc Strategic Advisory",
          icon: (
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
          ),
          backgroundColor: "black" as const,
          href: "/services/strategic-advisory/ad-hoc-strategic-advisory",
        },
      ],
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <Hero {...heroData} />

      {/* Services Component */}
      <AnimateOnScroll animation="fadeInUp" delay={200}>
        <Services {...servicesData} />
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
