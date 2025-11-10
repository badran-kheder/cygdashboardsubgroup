"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stock from "@/components/Stock";
import IndustryPerspectivesHeading from "@/components/IndustryPerspectivesHeading";
// import IndustryPerspectivesCarousel from "@/components/IndustryPerspectivesCarousel";
import IndustryPerspectivesCarouselEmbla from "@/components/IndustryPerspectivesCarouselEmbla";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  getHeroSections,
  getServices,
  getIndustryPerspectives,
  getStrategicGrowth,
  getStock,
  getFooterLogos,
} from "@/lib/strapi";
import {
  transformHeroSection,
  transformService,
  transformIndustryPerspective,
  transformStrategicGrowth,
  transformStock,
  transformFooterLogo,
} from "@/lib/transform";
import {
  HeroSectionData,
  Service,
  ServiceData,
  IndustryPerspective,
  IndustryPerspectiveData,
  StrategicGrowthData,
  StockData,
  FooterLogo,
  FooterLogoData,
} from "@/types/strapi";

export default function Home() {
  const [heroData, setHeroData] = useState<HeroSectionData | null>(null);
  const [servicesData, setServicesData] = useState<ServiceData[]>([]);
  const [industryPerspectivesData, setIndustryPerspectivesData] = useState<
    IndustryPerspectiveData[]
  >([]);
  const [strategicGrowthData, setStrategicGrowthData] =
    useState<StrategicGrowthData | null>(null);
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [footerLogosData, setFooterLogosData] = useState<FooterLogoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hero data
        const heroSections = await getHeroSections();
        if (heroSections && heroSections.length > 0) {
          const transformedHeroData = transformHeroSection(heroSections[0]);
          setHeroData(transformedHeroData);
        }

        // Fetch services data
        const services = await getServices();
        console.log("Services from Strapi:", services);
        if (services && services.length > 0) {
          const transformedServicesData = services.map((service: Service) =>
            transformService(service)
          );
          console.log("Transformed services data:", transformedServicesData);
          setServicesData(transformedServicesData);
        }

        // Fetch industry perspectives data
        const industryPerspectives = await getIndustryPerspectives();
        console.log("Industry Perspectives from Strapi:", industryPerspectives);
        if (industryPerspectives && industryPerspectives.length > 0) {
          const transformedIndustryPerspectivesData = industryPerspectives.map(
            (perspective: IndustryPerspective) =>
              transformIndustryPerspective(perspective)
          );
          console.log(
            "Transformed industry perspectives data:",
            transformedIndustryPerspectivesData
          );
          setIndustryPerspectivesData(transformedIndustryPerspectivesData);
        }

        // Fetch strategic growth data
        const strategicGrowths = await getStrategicGrowth();
        console.log("Strategic Growth from Strapi:", strategicGrowths);
        if (strategicGrowths && strategicGrowths.length > 0) {
          const transformedStrategicGrowthData = transformStrategicGrowth(
            strategicGrowths[0]
          );
          console.log(
            "Transformed strategic growth data:",
            transformedStrategicGrowthData
          );
          setStrategicGrowthData(transformedStrategicGrowthData);
        }

        // Fetch stock data
        const stocks = await getStock();
        console.log("Stock from Strapi:", stocks);
        if (stocks && stocks.length > 0) {
          const transformedStockData = transformStock(stocks[0]);
          console.log("Transformed stock data:", transformedStockData);
          setStockData(transformedStockData);
        }

        // Fetch footer logos data
        const footerLogos = await getFooterLogos();
        console.log("Footer Logos from Strapi:", footerLogos);
        if (footerLogos && footerLogos.length > 0) {
          const transformedFooterLogosData = footerLogos.map(
            (logo: FooterLogo) => transformFooterLogo(logo)
          );
          console.log(
            "Transformed footer logos data:",
            transformedFooterLogosData
          );
          setFooterLogosData(transformedFooterLogosData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // Fallback data in case Strapi is not available
  const fallbackHeroData = {
    backgroundImage: "/images/hero-bg.png",
    title: "Smarter Financial Decisions",
    titleAccent: "Start Here",
    description:
      "Whether you're launching, scaling, or transforming, we deliver trusted guidance at a price that fits your business.",
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
    showFooter: true,
    reviewsLink: "/clients#team-carousel",
  };

  // Fallback footer logos data
  const fallbackFooterLogosData = [
    {
      id: 1,
      brand: "Forbes",
      quote: "Incredibly reliable financial plan!",
    },
    {
      id: 2,
      brand: "Bloomberg",
      quote: "Best in the business!",
    },
    {
      id: 3,
      brand: "Reuters",
      quote: "Outstanding financial guidance!",
    },
    {
      id: 4,
      brand: "Wall Street Journal",
      quote: "Exceptional advisory services!",
    },
    {
      id: 5,
      brand: "Financial Times",
      quote: "Top-tier expertise!",
    },
    {
      id: 6,
      brand: "CNBC",
      quote: "Reliable and professional!",
    },
  ];

  const currentHeroData = heroData || fallbackHeroData;
  const currentFooterLogosData =
    footerLogosData.length > 0 ? footerLogosData : fallbackFooterLogosData;

  // Fallback services data
  const fallbackServicesData = [
    {
      id: 1,
      title: "Explore",
      titleAccent: "Strategic",
      description:
        "Full-cycle guidance through the sales process — from valuation to closing.",
      image: "/images/Group.svg",
      imageAlt: "Strategic Advisory",
      buttonText: "Learn More",
      buttonHref: "/services/strategic-advisory",
      serviceKey: "strategic",
      subServices: [],
    },
    {
      id: 2,
      title: "Explore",
      titleAccent: "Sell-Side",
      description:
        "Full-cycle guidance through the sales process — from valuation to closing.",
      image: "/images/Group.svg",
      imageAlt: "Sell-Side Advisory",
      buttonText: "Learn More",
      buttonHref: "/services/sell-side-advisory",
      serviceKey: "sell-side",
      subServices: [],
    },
    {
      id: 3,
      title: "Explore",
      titleAccent: "Buy-Side",
      description:
        "Full-cycle guidance through the sales process — from valuation to closing.",
      image: "/images/Group.svg",
      imageAlt: "Buy-Side Advisory",
      buttonText: "Learn More",
      buttonHref: "/services/buy-side-advisory",
      serviceKey: "buy-side",
      subServices: [],
    },
  ];

  console.log("Current servicesData length:", servicesData.length);
  console.log("Using fallback?", servicesData.length === 0);

  const currentServicesData =
    servicesData.length > 0 ? servicesData : fallbackServicesData;

  // Fallback industry perspectives data
  const fallbackIndustryPerspectivesData = [
    {
      id: 1,
      imageSrc: "/images/slide.png",
      title:
        "Cutting Through the Noise: The Long-Term Case for Data Centers The Connection",
      category1: "Investment Strategy",
      category2: "Business",
      date: "June 3, 2025",
    },
    {
      id: 2,
      imageSrc: "/images/slide-1.png",
      title: "Market Views: Opportunity Amid Uncertainty",
      category1: "Investment Strategy",
      category2: "Business",
      date: "June 3, 2025",
    },
    {
      id: 3,
      imageSrc: "/images/slide-2.png",
      title: "One-on-One with CYG Partners:All Eyes on Lebanon",
      category1: "Investment Strategy",
      category2: "Business",
      date: "June 3, 2025",
    },
  ];

  const currentIndustryPerspectivesData =
    industryPerspectivesData.length > 0
      ? industryPerspectivesData
      : fallbackIndustryPerspectivesData;

  // Fallback strategic growth data
  const fallbackStrategicGrowthData = {
    id: 1,
    title: "Empowering Strategic",
    titleAccent: "Growth",
    description:
      "Tailored financial advisory from Dubai and Lebanon, driving growth and lasting value.",
    buttonText: "Learn More",
    buttonHref: "/services",
    backgroundImage: "/images/chess.png",
  };

  const currentStrategicGrowthData =
    strategicGrowthData || fallbackStrategicGrowthData;

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

  return (
    <>
      <main className="min-h-screen bg-black text-primary-200">
        {/* Hero Section */}
        <Hero
          backgroundImage={currentHeroData.backgroundImage}
          title={currentHeroData.title}
          titleAccent={currentHeroData.titleAccent}
          description={currentHeroData.description}
          buttons={currentHeroData.buttons}
          textAlign={currentHeroData.textAlign}
          showFooter={currentHeroData.showFooter}
          footerLogos={currentFooterLogosData}
          reviewsLink={currentHeroData.reviewsLink}
        />

        {/* Strategic Growth Section */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <section
            className="bg-black flex items-center justify-center strategic-growth-section"
            style={{
              backgroundImage: `url('${currentStrategicGrowthData.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
            }}
          >
            {/* First content box */}
            <div
              className="w-full max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-40 strategic-growth-container justify-center md:justify-start"
              style={{
                width: "1920px",
                maxWidth: "100%",
                minHeight: "clamp(400px, 60vh, 648px)",
                paddingTop: "clamp(3rem, 10vh, 128px)",
                paddingBottom: "clamp(3rem, 10vh, 128px)",
                gap: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="w-full strategic-growth-content text-center md:text-left"
                style={{
                  width: "clamp(100%, 45vw, 862px)",
                  maxWidth: "100%",
                  minHeight: "clamp(200px, 30vh, 260px)",
                  gap: "clamp(20px, 3vh, 40px)",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <AnimateOnScroll animation="fadeInLeft" delay={400}>
                  <h2
                    className="strategic-growth-title"
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontSize: "clamp(2rem, 5vw, 4.375rem)",
                      lineHeight: "clamp(2rem, 5vw, 4.375rem)",
                      letterSpacing: "0%",
                      color: "white",
                      margin: 0,
                    }}
                  >
                    <span>{currentStrategicGrowthData.title}</span>
                    <br />
                    <span style={{ color: "#77EB8A" }}>
                      {currentStrategicGrowthData.titleAccent}
                    </span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeInUp" delay={600}>
                  <p
                    className="max-w-full strategic-growth-description"
                    style={{
                      width: "clamp(100%, 41vw, 659px)",
                      maxWidth: "100%",
                      minHeight: "clamp(60px, 8vh, 80px)",
                      fontFamily: "Grift, Arial, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "clamp(1rem, 2.5vw, 2rem)",
                      lineHeight: "clamp(1.25rem, 3vh, 2.5rem)",
                      letterSpacing: "0%",
                      color: "#DBDBDB",
                      opacity: 1,
                      transform: "rotate(0deg)",
                      margin: 0,
                    }}
                  >
                    {currentStrategicGrowthData.description}
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="scaleIn" delay={800}>
                  <div className="flex justify-center md:justify-start">
                    <Link
                      href={currentStrategicGrowthData.buttonHref}
                      className="inline-flex items-center justify-center font-semibold hover:scale-105 strategic-growth-button"
                      style={{
                        width: "clamp(200px, 20vw, 268px)",
                        height: "clamp(56px, 7vh, 68px)",
                        borderLeftWidth: "3px",
                        borderLeftColor: "#38A169",
                        borderLeftStyle: "solid",
                        padding: "clamp(12px, 1.5vh, 16px) clamp(32px, 5vw, 64px)",
                        gap: "0px",
                        borderRadius: "80px",
                        backgroundColor: "#9DD8A7",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#4FD1C5";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(56, 161, 105, 0.3)";
                        // Text color stays #0A0A0A on hover
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#9DD8A7";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="w-full"
                        style={{
                          height: "clamp(28px, 4vh, 36px)",
                          gap: "0px",
                          opacity: 1,
                          transform: "rotate(0deg)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          className="strategic-growth-button-text"
                          style={{
                            fontFamily: "Grift, Arial, sans-serif",
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(1rem, 2vw, 1.75rem)",
                            lineHeight: "clamp(1.25rem, 2.5vh, 2.25rem)",
                            letterSpacing: "0%",
                            color: "#0A0A0A",
                            opacity: 1,
                            transform: "rotate(0deg)",
                          }}
                        >
                          {currentStrategicGrowthData.buttonText}
                        </span>
                      </div>
                    </Link>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>

            {/* Desktop-specific styles to maintain original design */}
            <style jsx global>{`
              @media (min-width: 1920px) {
                .strategic-growth-section {
                  height: 100vh !important;
                }
                .strategic-growth-container {
                  width: 1920px !important;
                  min-height: 648px !important;
                  padding-top: 128px !important;
                  padding-bottom: 128px !important;
                  justify-content: start !important;
                }
                .strategic-growth-content {
                  width: 862px !important;
                  min-height: 260px !important;
                  gap: 40px !important;
                  text-align: left !important;
                }
                .strategic-growth-title {
                  font-size: 70px !important;
                  line-height: 70px !important;
                  text-align: left !important;
                }
                .strategic-growth-description {
                  width: 659px !important;
                  min-height: 80px !important;
                  font-size: 32px !important;
                  line-height: 40px !important;
                  text-align: left !important;
                }
                .strategic-growth-button {
                  width: 268px !important;
                  height: 68px !important;
                  padding: 16px 64px !important;
                }
                .strategic-growth-button-text {
                  font-size: 28px !important;
                  line-height: 36px !important;
                }
                .strategic-growth-button div {
                  height: 36px !important;
                }
              }
            `}</style>
          </section>
        </AnimateOnScroll>

        {/* Services Section */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <Services
            title="Our Advisory"
            titleAccent="Blueprint"
            description="Three bespoke services—Strategic, Sell-Side, and Buy-Side—to drive growth, exits, and value creation."
            backgroundGradient="linear-gradient(180deg, #343434 0%, #9A9A9A 100%)"
            services={currentServicesData}
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

        {/* Industry Perspectives Section */}
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <IndustryPerspectivesHeading
            title="Industry"
            titleAccent="Perspectives"
            description="Discover curated insights: expert analyses, breakthrough trends, and thought leadership."
          />
          {/* Old Swiper Carousel - Commented out */}
          {/* <IndustryPerspectivesCarousel
            perspectives={currentIndustryPerspectivesData}
          /> */}
          {/* New Embla Carousel */}
          <IndustryPerspectivesCarouselEmbla
            perspectives={currentIndustryPerspectivesData}
          />
        </AnimateOnScroll>
      </main>
    </>
  );
}
