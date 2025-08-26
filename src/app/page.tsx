"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
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
              background:
                "#16161680",
            }}
          ></div>
          {/* Main Hero Content */}
          <div className="relative z-10 px-4 max-w-7xl mx-auto ml-4 sm:ml-6 md:ml-8 lg:ml-16 xl:ml-24 2xl:ml-32">
            <h1 className="hero-headline mb-4 sm:mb-6">
              <span>Smarter Financial Decisions</span>
              <span className="hero-headline-accent"> Start Here</span>
            </h1>
            <p className="hero-description mb-6 sm:mb-8 max-w-3xl">
              Whether you're launching, scaling, or transforming, we deliver
              trusted guidance at a price that fits your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start">
              <Link
                href="/services"
                className="inline-flex items-center justify-center font-semibold hover:scale-105 w-full sm:w-auto"
                style={{
                  padding: "1rem 2rem",
                  minHeight: "3.5rem",
                  backgroundColor: "transparent",
                  borderRadius: "5rem",
                  border: "2px solid white",
                  color: "white",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Explore Services
                <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold hover:scale-105 w-full sm:w-auto"
                style={{
                  padding: "1rem 2rem",
                  minHeight: "3.5rem",
                  backgroundColor: "#9DD8A7",
                  borderRadius: "5rem",
                  border: "none",
                  color: "#0B1F3A",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8BC896";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(157, 216, 167, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#9DD8A7";
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

        {/* Core Services Section */}
        <section className="py-20 px-4 bg-primary-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-200 mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-primary-300 max-w-3xl mx-auto">
                We offer three core services to help you grow, sell, or
                scale—clearly and confidently.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Strategic Advisory */}
              <div className="bg-primary-900 border border-primary-700 rounded-lg p-8 hover:border-primary-500 transition-all duration-200 hover:shadow-glow">
                <div className="w-16 h-16 bg-primary-700/10 rounded-lg flex items-center justify-center mb-6">
                  <ChartBarIcon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary-200 mb-4">
                  Explore Strategic
                </h3>
                <p className="text-primary-300 mb-6">
                  Full-cycle guidance through the sales process — from valuation
                  to closing.
                </p>
                <Link
                  href="/services/strategic"
                  className="inline-flex items-center justify-center font-semibold hover:scale-105"
                  style={{
                    width: "100%",
                    maxWidth: "17.125rem",
                    minHeight: "4.75rem",
                    padding: "1.25rem 4rem",
                    backgroundColor: "#52B162",
                    borderRadius: "5rem",
                    border: "none",
                    color: "white",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4A9F58";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(82, 177, 98, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#52B162";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Sell-Side */}
              <div className="bg-primary-900 border border-primary-700 rounded-lg p-8 hover:border-primary-500 transition-all duration-200 hover:shadow-glow">
                <div className="w-16 h-16 bg-primary-700/10 rounded-lg flex items-center justify-center mb-6">
                  <CurrencyDollarIcon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary-200 mb-4">
                  Explore Sell-Side
                </h3>
                <p className="text-primary-300 mb-6">
                  Full-cycle guidance through the sales process — from valuation
                  to closing.
                </p>
                <Link
                  href="/services/sell-side"
                  className="inline-flex items-center justify-center font-semibold hover:scale-105"
                  style={{
                    width: "100%",
                    maxWidth: "17.125rem",
                    minHeight: "4.75rem",
                    padding: "1.25rem 4rem",
                    backgroundColor: "#52B162",
                    borderRadius: "5rem",
                    border: "none",
                    color: "white",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4A9F58";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(82, 177, 98, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#52B162";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Buy-Side */}
              <div className="bg-primary-900 border border-primary-700 rounded-lg p-8 hover:border-primary-500 transition-all duration-200 hover:shadow-glow">
                <div className="w-16 h-16 bg-primary-700/10 rounded-lg flex items-center justify-center mb-6">
                  <HandRaisedIcon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary-200 mb-4">
                  Explore Buy-Side
                </h3>
                <p className="text-primary-300 mb-6">
                  Full-cycle guidance through the sales process — from valuation
                  to closing.
                </p>
                <Link
                  href="/services/buy-side"
                  className="inline-flex items-center justify-center font-semibold hover:scale-105"
                  style={{
                    width: "100%",
                    minHeight: "4.75rem",
                    padding: "1.25rem 4rem",
                    backgroundColor: "#52B162",
                    borderRadius: "5rem",
                    border: "none",
                    color: "white",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4A9F58";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(82, 177, 98, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#52B162";
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
              className="inline-flex items-center justify-center font-semibold text-lg hover:scale-105"
              style={{
                width: "100%",
                maxWidth: "17.125rem",
                minHeight: "4.75rem",
                padding: "1.25rem 4rem",
                backgroundColor: "#9DD8A7",
                borderRadius: "5rem",
                border: "none",
                color: "#0B1F3A",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#8BC896";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(157, 216, 167, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#9DD8A7";
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
