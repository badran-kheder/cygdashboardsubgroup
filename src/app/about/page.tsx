"use client";

import Hero from "@/components/Hero";
import SimpleHero from "@/components/SimpleHero";
import Services from "@/components/Services";
import IndustryPerspectivesHeading from "@/components/IndustryPerspectivesHeading";
import IndustryPerspectivesCarousel from "@/components/IndustryPerspectivesCarousel";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-primary-200">
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero-bg.png"
        title="Behind"
        titleAccent="CYG Partners"
        description="Global advisors driving growth, performance, and confidence with tailored solutions."
        buttons={[
          {
            text: "Explore Services",
            href: "/services",
            variant: "secondary",
            icon: true,
          },
          {
            text: "Get Started",
            href: "/contact",
            variant: "primary",
          },
        ]}
        textAlign="left"
      />

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

      {/* Industry Perspectives Section */}
      <IndustryPerspectivesHeading
        title="Industry"
        titleAccent="Perspectives"
        description="Discover curated insights: expert analyses, breakthrough trends, and thought leadership."
      />
      <IndustryPerspectivesCarousel
        perspectives={[
          {
            imageSrc: "/images/slide.png",
            title: "Cutting Through the Noise: The Long-Term Case for Data Centers The Connection",
            category1: "Investment Strategy",
            category2: "Business",
            date: "June 3, 2025",
          },
          {
            imageSrc: "/images/slide.png",
            title: "Cutting Through the Noise: The Long-Term Case for Data Centers The Connection",
            category1: "Investment Strategy",
            category2: "Business",
            date: "June 3, 2025",
          },
          {
            imageSrc: "/images/slide.png",
            title: "Cutting Through the Noise: The Long-Term Case for Data Centers The Connection",
            category1: "Investment Strategy",
            category2: "Business",
            date: "June 3, 2025",
          },
          {
            imageSrc: "/images/slide.png",
            title: "Market Views: Opportunity Amid Uncertainty",
            category1: "Investment Strategy",
            category2: "Business",
            date: "June 12, 2025",
          },
          {
            imageSrc: "/images/slide.png",
            title: "One-on-One with CYG Partners: All Eyes on Lebanon",
            category1: "Investment Strategy",
            category2: "Business",
            date: "May 12, 2025",
          },
          {
            imageSrc: "/images/slide.png",
            title: "The Future of AI in Finance: A Deep Dive",
            category1: "Technology",
            category2: "Finance",
            date: "July 1, 2025",
          },
        ]}
      />
    </main>
  );
}
