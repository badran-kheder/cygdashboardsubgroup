"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary-900 text-primary-200">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-start"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(28, 28, 28, 0.5)",
            }}
          ></div>
          {/* Main Hero Content */}
          <div className="relative z-10 px-4 max-w-7xl mx-auto ml-4 sm:ml-6 md:ml-8 lg:ml-16 xl:ml-24 2xl:ml-32">
            <h1 className="hero-headline mb-4 sm:mb-6">
              <span>Smarter Financial Decisions</span>
              <span className="hero-headline-accent"> Start Here</span>
            </h1>
            <p className="hero-description mb-6 sm:mb-8">
              Whether you're launching, scaling, or transforming, we deliver
              trusted guidance at a price that fits your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start">
              <Link
                href="/services"
                className="btn-secondary inline-flex items-center justify-center font-semibold hover:scale-105"
                style={{
                  backgroundColor: "transparent",
                  color: "#FAFAFA",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FAFAFA";
                  e.currentTarget.style.color = "#0B1F3A";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(250, 250, 250, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#FAFAFA";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Explore Services
                <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center font-semibold hover:scale-105"
                style={{
                  backgroundColor: "#38A169",
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
                Get Started
              </Link>
            </div>
          </div>

          {/* Footer Section with Brand Logos */}
          <div
            className="absolute bottom-0 left-0 right-0 py-6 px-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
              {/* Brand Logos */}
              <div className="flex items-center space-x-8 mb-4 sm:mb-0">
                <div className="flex items-center space-x-2">
                  <div
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Forbes
                  </div>
                  <span className="text-white text-sm">
                    "Incredibly reliable financial plan!"
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Forbes
                  </div>
                  <span className="text-white text-sm">
                    "Best in the business!"
                  </span>
                </div>
              </div>

              {/* View All Reviews Button */}
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center font-semibold hover:scale-105"
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "transparent",
                  borderRadius: "2rem",
                  border: "1px solid white",
                  color: "white",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                View all Reviews
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

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
                  className="btn-primary inline-flex items-center justify-center font-semibold hover:scale-105"
                  style={{
                    backgroundColor: "#38A169",
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

        {/* Core Services Section */}
        <section
          className="py-20 px-4"
          style={{
            background: "linear-gradient(180deg, #343434 0%, #9A9A9A 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Our Advisory</span>
                <br />
                <span style={{ color: "#77EB8A" }}>Blueprint</span>
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Three bespoke services—Strategic, Sell-Side, and Buy-Side—to
                drive growth, exits, and value creation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Strategic Advisory */}
              <div className="bg-black border border-gray-700 rounded-xl p-8 hover:border-primary-500 transition-all duration-200 hover:shadow-glow h-full flex flex-col">
                <h3 className="text-2xl font-bold text-center text-white mb-4 flex-grow">
                  Explore <span style={{ color: "#77EB8A" }}>Strategic</span>
                </h3>
                <p className="text-white text-center mb-8 text-gray-300 flex-grow">
                  Full-cycle guidance through the sales process — from valuation
                  to closing.
                </p>
                <div className="rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                  <img
                    src="/images/Group.svg"
                    alt="Strategic Advisory"
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
                </div>
                <div className="mt-auto">
                  <Link
                    href="/services/strategic"
                    className="btn-service inline-flex items-center justify-center font-semibold hover:scale-105 w-full"
                    style={{
                      backgroundColor: "#38A169",
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
                      e.currentTarget.style.backgroundColor = "#38A169";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              {/* Strategic Advisory */}
              <div className="bg-black border border-gray-700 rounded-xl p-8 hover:border-primary-500 transition-all duration-200 hover:shadow-glow h-full flex flex-col">
                <h3 className="text-2xl font-bold text-center text-white mb-4 flex-grow">
                  Explore <span style={{ color: "#77EB8A" }}>Strategic</span>
                </h3>
                <p className="text-white text-center mb-8 text-gray-300 flex-grow">
                  Full-cycle guidance through the sales process — from valuation
                  to closing.
                </p>
                <div className="rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                  <img
                    src="/images/Group.svg"
                    alt="Strategic Advisory"
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
                </div>
                <div className="mt-auto">
                  <Link
                    href="/services/strategic"
                    className="btn-service inline-flex items-center justify-center font-semibold hover:scale-105 w-full"
                    style={{
                      backgroundColor: "#38A169",
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
                      e.currentTarget.style.backgroundColor = "#38A169";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              {/* Strategic Advisory */}
              <div className="bg-black border border-gray-700 rounded-xl p-8 hover:border-primary-500 transition-all duration-200 hover:shadow-glow h-full flex flex-col">
                <h3 className="text-2xl font-bold text-center text-white mb-4 flex-grow">
                  Explore <span style={{ color: "#77EB8A" }}>Strategic</span>
                </h3>
                <p className="text-white text-center mb-8 text-gray-300 flex-grow">
                  Full-cycle guidance through the sales process — from valuation
                  to closing.
                </p>
                <div className="rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                  <img
                    src="/images/Group.svg"
                    alt="Strategic Advisory"
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
                </div>
                <div className="mt-auto">
                  <Link
                    href="/services/strategic"
                    className="btn-service inline-flex items-center justify-center font-semibold hover:scale-105 w-full"
                    style={{
                      backgroundColor: "#38A169",
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
                      e.currentTarget.style.backgroundColor = "#38A169";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content for Scrolling */}
        <section className="py-20 px-4 bg-primary-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-200 mb-6">
                Why Choose{" "}
                <span className="text-primary-500">CYG Partners</span>
              </h2>
              <p className="text-xl text-primary-300 max-w-3xl mx-auto">
                We bring decades of combined experience in financial advisory
                and strategic consulting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-200">
                  Expert Team
                </h3>
                <p className="text-primary-300">
                  Our team consists of seasoned professionals with deep
                  expertise in financial markets, strategic planning, and
                  business development across multiple industries.
                </p>
                <p className="text-primary-300">
                  We understand the unique challenges facing businesses in
                  today's dynamic market environment and provide tailored
                  solutions that drive real results.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-200">
                  Proven Track Record
                </h3>
                <p className="text-primary-300">
                  With hundreds of successful transactions and strategic
                  initiatives under our belt, we have the experience to guide
                  your business toward sustainable growth.
                </p>
                <p className="text-primary-300">
                  Our clients consistently achieve their objectives, whether
                  that's securing funding, executing strategic partnerships, or
                  optimizing operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* More Content */}
        <section className="py-20 px-4 bg-primary-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-200 mb-6">
                Our <span className="text-primary-500">Approach</span>
              </h2>
              <p className="text-xl text-primary-300 max-w-3xl mx-auto">
                We believe in building long-term relationships based on trust,
                transparency, and results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-500 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary-200 mb-3">
                  Assessment
                </h3>
                <p className="text-primary-300">
                  We begin with a comprehensive analysis of your business,
                  market position, and objectives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-500 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary-200 mb-3">
                  Strategy
                </h3>
                <p className="text-primary-300">
                  Based on our assessment, we develop a customized strategy
                  tailored to your specific needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-500 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary-200 mb-3">
                  Execution
                </h3>
                <p className="text-primary-300">
                  We work alongside you to implement the strategy and achieve
                  your business goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-primary-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-200 mb-6">
              Choose smart.
              <br />
              <span className="text-primary-500">We'll guide the way.</span>
            </h2>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center font-semibold hover:scale-105"
              style={{
                backgroundColor: "#38A169",
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
              Book a Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
