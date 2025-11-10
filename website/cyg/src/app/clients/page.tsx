"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stock from "@/components/Stock";
import HorizontalCarousel from "@/components/HorizontalCarousel";
import ClientReviewCarousel from "@/components/ClientReviewCarousel";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  getPageHeroSectionByPageName,
  getClientReviews,
  getStock,
  getPageServicesSectionByPageName,
} from "@/lib/strapi";
import {
  transformPageHeroSection,
  transformClientReview,
  transformStock,
  transformPageServicesSection,
} from "@/lib/transform";
import {
  PageHeroSectionData,
  ClientReview,
  ClientReviewData,
  StockData,
  PageServicesSectionData,
} from "@/types/strapi";
export default function ClientsPage() {
  const [heroData, setHeroData] = useState<PageHeroSectionData | null>(null);
  const [clientReviewsData, setClientReviewsData] = useState<
    ClientReviewData[]
  >([]);
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [pageServicesData, setPageServicesData] =
    useState<PageServicesSectionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hero data
        const pageHero = await getPageHeroSectionByPageName("clients");
        if (pageHero) {
          const transformedHeroData = transformPageHeroSection(pageHero);
          setHeroData(transformedHeroData);
        }

        // Fetch client reviews data
        const clientReviews = await getClientReviews();
        console.log("Client Reviews from Strapi:", clientReviews);
        if (clientReviews && clientReviews.length > 0) {
          const transformedClientReviewsData = clientReviews.map(
            (review: ClientReview) => transformClientReview(review)
          );
          console.log(
            "Transformed client reviews data:",
            transformedClientReviewsData
          );
          setClientReviewsData(transformedClientReviewsData);
        }

        // Fetch stock data
        const stocks = await getStock();
        console.log("Stock from Strapi:", stocks);
        if (stocks && stocks.length > 0) {
          const transformedStockData = transformStock(stocks[0]);
          console.log("Transformed stock data:", transformedStockData);
          setStockData(transformedStockData);
        }

        // Fetch page services data
        const pageServices = await getPageServicesSectionByPageName("clients");
        console.log("Page Services from Strapi:", pageServices);
        if (pageServices) {
          const transformedPageServicesData =
            transformPageServicesSection(pageServices);
          console.log(
            "Transformed page services data:",
            transformedPageServicesData
          );
          setPageServicesData(transformedPageServicesData);
        }
      } catch (error) {
        console.error("Error fetching clients page data:", error);
      }
    };

    fetchData();
  }, []);

  // Fallback data
  const fallbackHeroData = {
    id: 1,
    pageName: "clients",
    title: "Trusted by Businesses at",
    titleAccent: "Every Stage",
    description:
      "From bold founders to leading enterprises, we deliver clear strategies, financial insight, and lasting value across industries.",
    backgroundImage: "/images/client-bg.png",
    buttons: [
      {
        id: 1,
        text: "Explore Services",
        href: "/services",
        variant: "secondary" as const,
        icon: true,
      },
      {
        id: 2,
        text: "Get Started",
        href: "/contact",
        variant: "primary" as const,
        icon: false,
      },
    ],
    textAlign: "left" as const,
    showFooter: false,
  };

  const currentHeroData = heroData || fallbackHeroData;

  // Fallback stock data
  const fallbackStockData = {
    id: 1,
    title: "We Specialize in",
    titleAccent: "Specialization!",
    description:
      "We apply tailored financial and operational expertise across diverse industries.",
    backgroundImage: "/images/t-stock.png",
    backgroundImageAlt: "Stock chart background",
  };

  const currentStockData = stockData || fallbackStockData;

  // Fallback page services data
  const fallbackPageServicesData = {
    id: 1,
    pageName: "clients",
    title: "Grow Boldly.",
    titleAccent: "Think Strategically",
    description:
      "Strategic Advisory to overcome challenges, unlock growth, and reach long-term goals — with expert insights and practical support.",
    backgroundGradient: "linear-gradient(180deg, #0A2445 0%, #979797 100.02%)",
    showSpecialService: false,
    clickableCards: false,
    services: [
      {
        id: 1,
        title: "Strategic",
        titleAccent: "Advisory",
        description:
          "Comprehensive strategic planning and advisory services to optimize your business operations and drive sustainable growth.",
        image: "/images/hero-bg.png",
        imageAlt: "Strategic Advisory",
        buttonText: "",
        buttonHref: "",
        serviceKey: "strategic",
        subServices: [],
      },
      {
        id: 2,
        title: "Sell-Side",
        titleAccent: "Advisory",
        description:
          "Expert guidance through the entire sell-side process, maximizing value and ensuring smooth transactions.",
        image: "/images/stock.png",
        imageAlt: "Sell-Side Advisory",
        buttonText: "",
        buttonHref: "",
        serviceKey: "sell-side",
        subServices: [],
      },
      {
        id: 3,
        title: "Buy-Side",
        titleAccent: "Advisory",
        description:
          "Strategic acquisition support and due diligence to help you make informed investment decisions.",
        image: "/images/t-stock.png",
        imageAlt: "Buy-Side Advisory",
        buttonText: "",
        buttonHref: "",
        serviceKey: "buy-side",
        subServices: [],
      },
    ],
  };

  const currentPageServicesData = pageServicesData || fallbackPageServicesData;

  // Fallback client reviews data
  const fallbackClientReviewsData = [
    {
      id: 1,
      title: "John Smith",
      description:
        "CYG Partners transformed our financial strategy completely. Their expertise in M&A helped us achieve a 40% increase in valuation. Exceptional service and deep market insights.",
      image: "/images/slide.png",
      alt: "John Smith - CEO",
      company: "Tech Corp",
    },
    {
      id: 2,
      title: "Maria Garcia",
      description:
        "The team's strategic advisory was instrumental in our successful exit. Their attention to detail and comprehensive approach exceeded our expectations. Highly recommended.",
      image: "/images/hero-bg.png",
      alt: "Maria Garcia - Founder",
      company: "StartupXYZ",
    },
    {
      id: 3,
      title: "Ahmed Al-Rashid",
      description:
        "Outstanding support throughout our capital raise process. CYG's network and expertise opened doors we never knew existed. Professional, reliable, and results-driven.",
      image: "/images/services.png",
      alt: "Ahmed Al-Rashid - Managing Partner",
      company: "Global Ventures",
    },
  ];

  const currentClientReviewsData =
    clientReviewsData.length > 0
      ? clientReviewsData
      : fallbackClientReviewsData;

  return (
    <main className="min-h-screen bg-black text-primary-200">
      {/* Hero Section */}
      <Hero
        backgroundImage={currentHeroData.backgroundImage}
        title={currentHeroData.title}
        titleAccent={currentHeroData.titleAccent}
        description={currentHeroData.description}
        buttons={currentHeroData.buttons}
        textAlign={currentHeroData.textAlign}
      />

      {/* Services Overview Section */}
      <AnimateOnScroll animation="fadeInUp" delay={200}>
        <Services
          title={currentPageServicesData.title}
          titleAccent={currentPageServicesData.titleAccent}
          description={currentPageServicesData.description}
          backgroundGradient={currentPageServicesData.backgroundGradient}
          services={currentPageServicesData.services}
          showSpecialService={currentPageServicesData.showSpecialService}
        />
      </AnimateOnScroll>

      {/* Stock Section */}
      <AnimateOnScroll animation="fadeInUp" delay={200}>
        <Stock
          title={currentStockData.title}
          titleAccent={currentStockData.titleAccent}
          description={currentStockData.description}
          backgroundImage={currentStockData.backgroundImage}
          backgroundImageAlt={currentStockData.backgroundImageAlt}
        />
      </AnimateOnScroll>

      {/* Client Reviews Section */}
      <AnimateOnScroll animation="fadeInUp" delay={200}>
        <div id="team-carousel">
          {/* Desktop: HorizontalCarousel */}
          <div className="hidden md:block bg-[#2C2C2C] py-10">
            <div className="text-center my-20 w-[60%] mx-auto">
              <h2
                className="mb-4 about-team-heading"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "clamp(2rem, 5vw, 4.375rem)",
                  lineHeight: "clamp(2rem, 5vw, 4.375rem)",
                  letterSpacing: "0%",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                <span className="text-primary-500">Success</span> Stories
              </h2>
              <p
                className="text-gray-300 mt-10 mx-auto about-team-description"
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "clamp(1rem, 2.5vw, 2rem)",
                  lineHeight: "clamp(1.25rem, 3vh, 2.5rem)",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                Real results from businesses we’ve helped grow, optimize, and
                thrive
              </p>
            </div>
            <HorizontalCarousel slides={currentClientReviewsData} />
          </div>
          {/* Mobile: ClientReviewCarousel */}
          <div className="block md:hidden  bg-[#2C2C2C]">
            <ClientReviewCarousel reviews={currentClientReviewsData} />
          </div>
        </div>
      </AnimateOnScroll>
    </main>
  );
}
