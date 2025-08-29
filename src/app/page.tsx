"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stock from "@/components/Stock";
import IndustriesGrid from "@/components/IndustriesGrid";
import IndustryPerspectivesHeading from "@/components/IndustryPerspectivesHeading";
import IndustryPerspectivesCarousel from "@/components/IndustryPerspectivesCarousel";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-primary-200">
        {/* Hero Section */}
        <Hero
          backgroundImage="/images/hero-bg.png"
          title="Smarter Financial Decisions"
          titleAccent="Start Here"
          description="Whether you're launching, scaling, or transforming, we deliver trusted guidance at a price that fits your business."
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
          showFooter={true}
          footerLogos={[
            {
              brand: "Forbes",
              quote: "Incredibly reliable financial plan!",
            },
            {
              brand: "Forbes",
              quote: "Best in the business!",
            },
          ]}
          reviewsLink="/reviews"
        />

        {/* Strategic Growth Section */}
        <section className="py-20 px-4 pr-0 bg-black">
          <div className="max-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <h2
                  className="text-5xl md:text-6xl font-bold leading-tight"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                    color: "white",
                  }}
                >
                  <span>Empowering Strategic</span>
                  <br />
                  <span style={{ color: "#77EB8A" }}>Growth</span>
                </h2>

                <p
                  className="text-xl md:text-2xl leading-relaxed"
                  style={{
                    fontFamily: "Grift, Arial, sans-serif",
                    fontWeight: 500,
                    color: "white",
                    lineHeight: "1.6",
                  }}
                >
                  Tailored financial advisory from Dubai and Lebanon, driving
                  growth and lasting value.
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center font-semibold hover:scale-105"
                  style={{
                    padding: "1rem 2.5rem",
                    minHeight: "3.5rem",
                    backgroundColor: "#38A169",
                    borderRadius: "5rem",
                    border: "none",
                    color: "#0B1F3A",
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
                  Learn More
                </Link>
              </div>

              {/* Right Side - Chess Piece Visual */}
              <div className="relative flex justify-center pt-50">
                {/* Chess Queen Image */}
                <img
                  src="/images/chess.png"
                  alt="Chess Queen - Strategic Thinking"
                  className="object-contain w-full h-full"
                  style={{
                    filter: "brightness(1.1) contrast(1.2)",
                    transform: "scale(1) translate(12%, 10px)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services
          title="Our Advisory"
          titleAccent="Blueprint"
          description="Three bespoke services—Strategic, Sell-Side, and Buy-Side—to drive growth, exits, and value creation."
          backgroundGradient="linear-gradient(180deg, #343434 0%, #9A9A9A 100%)"
          services={[
            {
              title: "Explore",
              titleAccent: "Strategic",
              description:
                "Full-cycle guidance through the sales process — from valuation to closing.",
              image: "/images/Group.svg",
              imageAlt: "Strategic Advisory",
              buttonText: "Learn More",
              buttonHref: "/services/strategic",
            },
            {
              title: "Explore",
              titleAccent: "Sell-Side",
              description:
                "Full-cycle guidance through the sales process — from valuation to closing.",
              image: "/images/Group.svg",
              imageAlt: "Sell-Side Advisory",
              buttonText: "Learn More",
              buttonHref: "/services/sell-side",
            },
            {
              title: "Explore",
              titleAccent: "Buy-Side",
              description:
                "Full-cycle guidance through the sales process — from valuation to closing.",
              image: "/images/Group.svg",
              imageAlt: "Buy-Side Advisory",
              buttonText: "Learn More",
              buttonHref: "/services/buy-side",
            },
          ]}
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
    </>
  );
}
