// src/components/IndustriesGrid.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getIndustries } from "@/lib/strapi";
import { transformIndustry } from "@/lib/transform";
import { Industry, IndustryData } from "@/types/strapi";

interface IndustryCardProps {
  icon: string;
  title: string;
  href: string;
  isLastInRow?: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, href, isLastInRow }) => {
  return (
    <Link
      href={href}
      className={`industry-card flex items-center justify-center text-center transition-all duration-300 bg-black text-white hover:bg-primary-500 w-full ${isLastInRow ? 'industry-card-last-in-row-desktop' : ''}`}
      style={{
        minHeight: "clamp(200px, 30vh, 303px)",
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        borderRightWidth: "0px",
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        borderLeftStyle: "solid",
        borderRightStyle: "none",
        borderTopColor: "#D3D3D3",
        borderBottomColor: "#D3D3D3",
        borderLeftColor: "#D3D3D3",
        borderRightColor: "transparent",
        opacity: 1,
        transform: "rotate(0deg)",
        position: "relative",
      }}
    >
      {/* Wrapper for image and text */}
      <div
        className="industry-card-content"
        style={{
          width: "clamp(150px, 20vw, 199px)",
          maxWidth: "100%",
          minHeight: "clamp(100px, 15vh, 131px)",
          gap: "clamp(12px, 2vh, 16px)",
          opacity: 1,
          transform: "rotate(0deg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image */}
        <div
          className="relative industry-card-icon"
          style={{
            width: "clamp(50px, 8vw, 75px)",
            height: "clamp(50px, 8vw, 75px)",
            opacity: 1,
            transform: "rotate(-180deg)",
          }}
        >
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50px, (max-width: 1024px) 60px, 75px"
          />
        </div>
        {/* Text */}
        <p
          className="industry-card-text"
          style={{
            width: "clamp(150px, 20vw, 199px)",
            maxWidth: "100%",
            minHeight: "clamp(30px, 5vh, 40px)",
            opacity: 1,
            transform: "rotate(0deg)",
            fontFamily: "Grift, Arial, sans-serif",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "clamp(1.25rem, 3vw, 2.5rem)",
            lineHeight: "clamp(1.25rem, 3vw, 2.5rem)",
            letterSpacing: "0%",
            margin: 0,
            textAlign: "center",
          }}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

// Fallback data when Strapi is unavailable or returns no data
const FALLBACK_INDUSTRIES: IndustryData[] = [
  { id: 1, title: "Technology", icon: "/images/cpu.png", href: "/services", order: 0 },
  { id: 2, title: "Healthcare", icon: "/images/cpu.png", href: "/services", order: 1 },
  { id: 3, title: "Hospitality", icon: "/images/cpu.png", href: "/services", order: 2 },
  { id: 4, title: "E-commerce", icon: "/images/cpu.png", href: "/services", order: 3 },
  { id: 5, title: "Real Estate", icon: "/images/cpu.png", href: "/services", order: 4 },
  { id: 6, title: "Manufacturing", icon: "/images/cpu.png", href: "/services", order: 5 },
  { id: 7, title: "Education", icon: "/images/cpu.png", href: "/services", order: 6 },
  { id: 8, title: "Professional Services", icon: "/images/cpu.png", href: "/services", order: 7 },
];

const IndustriesGrid: React.FC = () => {
  const [industriesData, setIndustriesData] = useState<IndustryData[]>(FALLBACK_INDUSTRIES);

  // useEffect(() => {
  //   const fetchIndustries = async () => {
  //     try {
  //       const industries = await getIndustries();
  //       console.log("Industries from Strapi:", industries);
  //       if (industries && industries.length > 0) {
  //         const transformedIndustriesData = industries.map((industry: Industry) =>
  //           transformIndustry(industry)
  //         );
  //         console.log("Transformed industries data:", transformedIndustriesData);
  //         setIndustriesData(transformedIndustriesData);
  //       } else {
  //         // Use fallback if Strapi returns empty array
  //         console.log("No industries found in Strapi, using fallback data");
  //         setIndustriesData(FALLBACK_INDUSTRIES);
  //       }
  //     } catch (error) {
  //       // Check if it's a 403 Forbidden error
  //       if (error instanceof Error && error.message === "FORBIDDEN_403") {
  //         console.warn("Access forbidden (403) when fetching industries, using fallback data");
  //       } else {
  //         console.error("Error fetching industries:", error);
  //       }
  //       // Fallback to default industries if Strapi fails or returns 403
  //       setIndustriesData(FALLBACK_INDUSTRIES);
  //     }
  //   };

  //   fetchIndustries();
  // }, []);

  return (
    <>
      <div className="industries-grid grid grid-cols-2 lg:grid-cols-4">
        {industriesData.map((industry, index) => {
          // For desktop (4 columns), last in row is every 4th item
          const isLastInRowDesktop = (index + 1) % 4 === 0;
          
          return (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              href={industry.href}
              isLastInRow={isLastInRowDesktop}
            />
          );
        })}
      </div>

      {/* Responsive border and desktop-specific styles */}
      <style jsx global>{`
        /* Mobile and Tablet: Right border on every 2nd item (2 columns) */
        .industries-grid > .industry-card:nth-child(2n) {
          border-right-width: 1px !important;
          border-right-style: solid !important;
          border-right-color: #D3D3D3 !important;
        }
        
        /* Desktop: Override to show right border only on every 4th item (4 columns) */
        @media (min-width: 1024px) {
          .industries-grid > .industry-card:nth-child(2n) {
            border-right-width: 0px !important;
            border-right-style: none !important;
            border-right-color: transparent !important;
          }
          /* Target every 4th item directly */
          .industries-grid > .industry-card:nth-child(4n) {
            border-right-width: 1px !important;
            border-right-style: solid !important;
            border-right-color: #D3D3D3 !important;
          }
          /* Also ensure class-based approach works */
          .industries-grid > .industry-card-last-in-row-desktop {
            border-right-width: 1px !important;
            border-right-style: solid !important;
            border-right-color: #D3D3D3 !important;
          }
        }
        
        /* Desktop-specific styles to maintain original design */
        @media (min-width: 1920px) {
          .industry-card {
            width: 400px !important;
            max-width: 400px !important;
            height: 303px !important;
          }
          .industry-card-content {
            width: 199px !important;
            max-width: 199px !important;
            height: 131px !important;
            top: 86px !important;
            left: 101px !important;
            gap: 16px !important;
            position: absolute !important;
          }
          .industry-card-icon {
            width: 75px !important;
            height: 75px !important;
          }
          .industry-card-text {
            width: 199px !important;
            max-width: 199px !important;
            height: 40px !important;
            font-size: 40px !important;
            line-height: 40px !important;
          }
        }
        @media (max-width: 1919px) {
          .industry-card-content {
            position: relative !important;
            top: auto !important;
            left: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default IndustriesGrid;
