"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import SimpleHero from "@/components/SimpleHero";
import Services from "@/components/Services";
import FlyonCarousel from "@/components/FlyonCarousel";
import TeamMemberCarousel from "@/components/TeamMemberCarousel";
// ADDED: Import functions and types for the services section
import {
  getPageHeroSectionByPageName,
  getTeamMembers,
  getPageServicesSectionByPageName,
  getPageSectionBySectionId,
  getAboutTeamSection,
} from "@/lib/strapi";
import {
  transformPageHeroSection,
  transformTeamMember,
  transformPageServicesSection,
  transformPageSection,
  transformAboutTeamSection,
} from "@/lib/transform";
import {
  PageHeroSectionData,
  TeamMember,
  TeamMemberData,
  PageServicesSectionData,
  PageSectionData,
  AboutTeamSectionData,
} from "@/types/strapi";

export default function AboutPage() {
  const [heroData, setHeroData] = useState<PageHeroSectionData | null>(null);
  const [teamMembersData, setTeamMembersData] = useState<TeamMemberData[]>([]);
  // ADDED: State for the page services data
  const [pageServicesData, setPageServicesData] =
    useState<PageServicesSectionData | null>(null);
  const [simpleHeroData, setSimpleHeroData] = useState<PageSectionData | null>(
    null
  );
  const [teamSectionData, setTeamSectionData] = useState<AboutTeamSectionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hero data
        const pageHero = await getPageHeroSectionByPageName("about");
        if (pageHero) {
          const transformedHeroData = transformPageHeroSection(pageHero);
          setHeroData(transformedHeroData);
        }

        // Fetch team members data
        const teamMembers = await getTeamMembers();
        if (teamMembers && teamMembers.length > 0) {
          const transformedTeamMembersData = teamMembers.map(
            (member: TeamMember) => transformTeamMember(member)
          );
          setTeamMembersData(transformedTeamMembersData);
        }

        // ADDED: Fetch and transform page services data
        const pageServices = await getPageServicesSectionByPageName("about");
        if (pageServices) {
          const transformedPageServicesData =
            transformPageServicesSection(pageServices);
          setPageServicesData(transformedPageServicesData);
        }

        const simpleHeroSection = await getPageSectionBySectionId(
          "about-page-hero"
        );
        if (simpleHeroSection) {
          setSimpleHeroData(transformPageSection(simpleHeroSection));
        }

        // Fetch team section heading data
        const teamSection = await getAboutTeamSection();
        if (teamSection) {
          setTeamSectionData(transformAboutTeamSection(teamSection));
        }
      } catch (error) {
        console.error("Error fetching about page data:", error);
      }
    };

    fetchData();
  }, []);

  // Fallback hero data
  const fallbackHeroData = {
    id: 1,
    pageName: "about",
    title: "Behind",
    titleAccent: "CYG Partners",
    description:
      "Global advisors driving growth, performance, and confidence with tailored solutions.",
    backgroundImage: "/images/hero-bg.png",
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

  // ADDED: Fallback services data (based on your original hard-coded values)
  const fallbackPageServicesData = {
    id: 1,
    pageName: "about",
    title: "What We ",
    titleAccent: "Create Together",
    description:
      "At CYG, we deliver for investors by building businesses that power tomorrow’s economy.",
    backgroundGradient: "linear-gradient(180deg, #83685B 0%, #979797 100.02%)",
    showSpecialService: false,
    clickableCards: false,
    services: [
      {
        id: 1,
        title: "Build",
        titleAccent: "financial security",
        description:
          "We help you gain clarity, monitor key performance metrics, and build a foundation for sustainable growth.",
        image: "/images/serv-ico.png",
        imageAlt: "Financial Security Icon",
        buttonText: "",
        buttonHref: "",
        serviceKey: "",
        subServices: [],
      },
      {
        id: 2,
        title: "Build",
        titleAccent: "sustainable growth",
        description:
          "We streamline decisions and boost efficiency by optimizing your financial and operational setup.",
        image: "/images/serv-ico.png",
        imageAlt: "Sustainable Growth Icon",
        buttonText: "",
        buttonHref: "",
        serviceKey: "",
        subServices: [],
      },
      {
        id: 3,
        title: "Build",
        titleAccent: "strong businesses",
        description:
          "Strategic guidance and tailored solutions to help you grow and adapt with confidence.",
        image: "/images/serv-ico.png",
        imageAlt: "Strong Businesses Icon",
        buttonText: "",
        buttonHref: "",
        serviceKey: "",
        subServices: [],
      },
    ],
  };

  const currentPageServicesData = pageServicesData || fallbackPageServicesData;
  const fallbackSimpleHeroData: PageSectionData = {
    id: 1,
    sectionId: "about-page-hero",
    title: "Transparent Advice,",
    titleAccent: "Lasting Results",
    description:
      "Deliver transparent, precise advisory that empowers companies at every stage to achieve lasting results.",
    backgroundImage: "/images/about-bg.png",
  };
  const currentSimpleHeroData = simpleHeroData || fallbackSimpleHeroData;

  // Fallback team members data
  const fallbackTeamMembersData = [
    {
      id: 1,
      title: "Fouad Najjar",
      description:
        "With over a decade of banking and advisory experience across MENA, Fouad guides business through complex financial decisions—from strategic planning to mergers & acquisitions. He turns data into actionable insights, empowering teams to make confident, growth-driven decisions, and is known for his collaborative approach and clear communication.",
      image: "/images/slide.png",
      alt: "Fouad Najjar",
      position: "Managing Director",
    },
    {
      id: 2,
      title: "Sarah Johnson",
      description:
        "Sarah brings extensive experience in financial strategy and risk management, helping organizations navigate complex market conditions with data-driven insights. Her expertise in regulatory compliance and strategic planning has helped numerous companies achieve sustainable growth and operational excellence.",
      image: "/images/hero-bg.png",
      alt: "Sarah Johnson",
      position: "Senior Advisor",
    },
    {
      id: 3,
      title: "Ahmed Hassan",
      description:
        "Ahmed specializes in investment analysis and portfolio management, with a proven track record of identifying high-potential opportunities across diverse sectors. His analytical approach and deep market knowledge enable clients to make informed investment decisions that drive long-term value creation.",
      image: "/images/services.png",
      alt: "Ahmed Hassan",
      position: "Investment Director",
    },
  ];

  const currentTeamMembersData =
    teamMembersData.length > 0 ? teamMembersData : fallbackTeamMembersData;

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

      {/* Second Hero Section - Center Aligned */}
      <SimpleHero
        backgroundImage={currentSimpleHeroData.backgroundImage}
        title={currentSimpleHeroData.title}
        titleAccent={currentSimpleHeroData.titleAccent}
        description={currentSimpleHeroData.description}
      />

      {/* MODIFIED: Services Overview Section now uses dynamic data */}
      <Services
        title={currentPageServicesData.title}
        titleAccent={currentPageServicesData.titleAccent}
        description={currentPageServicesData.description}
        backgroundGradient={currentPageServicesData.backgroundGradient}
        services={currentPageServicesData.services}
        showSpecialService={currentPageServicesData.showSpecialService}
      />

      {/* Industry Perspectives Section */}
      <section className="py-16 px-4 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
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
              {teamSectionData ? (
                <>
                  {teamSectionData.title}{" "}
                  <span className="text-primary-500">{teamSectionData.titleAccent}</span>
                </>
              ) : (
                <>
                  Meet <span className="text-primary-500">CYG</span> Team
                </>
              )}
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
              {teamSectionData?.description || 
                "We provide end‑to‑end advisory—from capital raises and M&A to long‑term strategy—empowering confident, growth‑driven decisions"}
            </p>
          </div>
          {/* Mobile: TeamMemberCarousel */}
          <div className="block md:hidden">
            <TeamMemberCarousel teamMembers={currentTeamMembersData} />
          </div>
        </div>
        {/* Desktop: FlyonCarousel */}
        <div className="hidden md:block w-[80%] mx-auto">
          <FlyonCarousel teamMembers={currentTeamMembersData} />
        </div>
      </section>

      {/* Desktop lock: Maintain original desktop view for team heading and description */}
      <style jsx global>{`
        @media (min-width: 1920px) {
          .about-team-heading {
            font-size: 70px !important;
            line-height: 70px !important;
          }
          .about-team-description {
            font-size: 32px !important;
            line-height: 40px !important;
          }
        }
      `}</style>
    </main>
  );
}
