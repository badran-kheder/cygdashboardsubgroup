"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stock from "@/components/Stock";
import IndustryPerspectivesHeading from "@/components/IndustryPerspectivesHeading";
import IndustryPerspectivesCarousel from "@/components/IndustryPerspectivesCarousel";

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-black text-primary-200">
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero-bg.png"
        title="Trusted by Businesses at"
        titleAccent="Every Stage"
        description="From bold founders to leading enterprises, we deliver clear strategies, financial insight, and lasting value across industries."
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

      {/* Stock Section */}
      <Stock
        title="We Specialize in"
        titleAccent="Specialization!"
        description="We apply tailored financial and operational expertise across diverse industries."
        backgroundImage="/images/t-stock.png"
        backgroundImageAlt="Stock chart background"
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
