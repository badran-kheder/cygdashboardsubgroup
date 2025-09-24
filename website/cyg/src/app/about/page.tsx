"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import SimpleHero from "@/components/SimpleHero";
import Services from "@/components/Services";
import FlyonCarousel from "@/components/FlyonCarousel";
// ADDED: Import functions and types for the services section
import {
  getPageHeroSectionByPageName,
  getTeamMembers,
  getPageServicesSectionByPageName,
  getPageSectionBySectionId,
} from "@/lib/strapi";
import {
  transformPageHeroSection,
  transformTeamMember,
  transformPageServicesSection,
  transformPageSection,
} from "@/lib/transform";
import {
  PageHeroSectionData,
  TeamMember,
  TeamMemberData,
  PageServicesSectionData,
  PageSectionData,
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">
              Meet <span className="text-primary-500">CYG</span> Team
            </h2>
            <p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              style={{ fontFamily: "Grift, Arial, sans-serif" }}
            >
              We provide end‑to‑end advisory—from capital raises and M&A to
              long‑term strategy—empowering confident, growth‑driven decisions
            </p>
          </div>
          <FlyonCarousel teamMembers={teamMembersData} />
        </div>
      </section>
    </main>
  );
}
