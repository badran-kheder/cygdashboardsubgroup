"use client";

import Hero from "@/components/Hero";
import SimpleHero from "@/components/SimpleHero";
import Services from "@/components/Services";
import FlyonCarousel from "@/components/FlyonCarousel";

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
      <section className="py-16 px-4 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet <span className="text-primary-500">CYG</span> Team
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We provide end‑to‑end advisory—from capital raises and M&A to
              long‑term strategy—empowering confident, growth‑driven decisions
            </p>
          </div>
          <FlyonCarousel />
        </div>
      </section>
    </main>
  );
}
