// ADDED: "use client" directive is necessary for hooks
"use client";

import Image from "next/image";
// ADDED: Import hooks and data-layer functions/types
import { useState, useEffect } from "react";
import { getFooter } from "@/lib/strapi";
import { transformFooter } from "@/lib/transform";
import { FooterData } from "@/types/strapi";

export default function Footer() {
  // ADDED: State to hold footer data
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  // ADDED: Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const footer = await getFooter();
        if (footer) {
          const transformedFooterData = transformFooter(footer);
          setFooterData(transformedFooterData);
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, []);

  // ADDED: Fallback data using your original hard-coded values
  const fallbackFooterData: FooterData = {
    logoUrl: "/images/cyg-logo.png",
    logoAlt: "CYG Partners",
    email: "info@CYGPartners.com",
    phone: "+971 56 322 1025",
    address: "Boulevard, Dubai, UAE",
    copyrightText: "© Copyright 2025 CYG Partners. All rights reserved.",
  };

  // ADDED: Selects fetched data or the fallback
  const currentFooterData = footerData || fallbackFooterData;

  return (
    <footer
      className="bg-footer border-t border-gray-700 w-full"
      style={{
        minHeight: "100vh",
        opacity: 1,
        transform: "rotate(0deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-40"
        style={{
          maxWidth: "1920px",
          width: "100%",
          minHeight: "inherit",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          paddingBottom: "3rem",
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-[20vh]">
          <Image
            src={currentFooterData.logoUrl}
            alt={currentFooterData.logoAlt}
            width={200}
            height={80}
            className="object-contain w-auto h-auto"
            style={{
              width: "clamp(80px, 20vw, 200px)",
              height: "auto",
            }}
          />
        </div>

        {/* Contact Information */}
        <div className="mt-4 sm:mt-8 md:mt-10 grid grid-cols-1 gap-4 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-full">
          <div className="flex justify-center align-center">
            <div className="text-left">
              <h3
                style={{
                  fontFamily: "SF Pro Display, Arial, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1rem)",
                  textAlign: "inherit",
                  color: "white",
                  margin: "0 0 -15px 0",
                }}
              >
                Email
              </h3>
              <a
                href={`mailto:${currentFooterData.email}`}
                className="hover:text-primary-500 transition-colors duration-200 break-all block"
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(0.875rem, 2.5vw, 2rem)",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {currentFooterData.email}
              </a>
            </div>
          </div>
          <div className="flex justify-center align-center">
            <div className="text-left">
              <h3
                style={{
                  fontFamily: "SF Pro Display, Arial, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1rem)",
                  textAlign: "inherit",
                  color: "white",
                  margin: "0 0 -15px 0",
                }}
              >
                Phone
              </h3>
              <a
                href={`tel:${currentFooterData.phone.replace(/\s/g, "")}`}
                className="hover:text-primary-500 transition-colors duration-200 block"
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(0.875rem, 2.5vw, 2rem)",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {currentFooterData.phone}
              </a>
            </div>
          </div>
          <div className="flex justify-center align-center sm:col-span-2 lg:col-span-1">
            <div className="text-left">
              <h3
                style={{
                  fontFamily: "SF Pro Display, Arial, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1rem)",
                  textAlign: "inherit",
                  color: "white",
                  margin: "0 0 -15px 0",
                }}
              >
                Address
              </h3>
              <p
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(0.875rem, 2.5vw, 2rem)",
                  color: "white",
                  margin: "0 0 -15px 0",
                }}
              >
                {currentFooterData.address}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-10 md:mt-12 lg:mt-16 flex justify-center w-full absolute bottom-3 sm:bottom-6 md:bottom-8 left-0 right-0">
          <p
            className="text-center px-4"
            style={{
              fontFamily: "Grift, Arial, sans-serif",
              fontSize: "clamp(0.625rem, 1.2vw, 0.875rem)",
              textAlign: "center",
              color: "white",
              margin: 0,
            }}
          >
            {currentFooterData.copyrightText}
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        @media (max-width: 639px) {
          footer {
            min-height: auto !important;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
        @media (min-width: 1920px) {
          footer {
            height: 850px !important;
            min-height: 850px !important;
          }
        }
      `}</style>
    </footer>
  );
}
