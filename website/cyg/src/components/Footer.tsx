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
      className="bg-footer border-t border-gray-700"
      style={{ position: "relative", height: "80vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Contact */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              // MODIFIED: Use dynamic data
              src={currentFooterData.logoUrl}
              alt={currentFooterData.logoAlt}
              width={200}
              height={80}
              className="object-contain"
              style={{
                position: "absolute",
                top: "25%",
                left: "50%",
                transform: "translate(-50%, -10%)",
                height: "auto",
                width: "auto",
              }}
            />
          </div>

          {/* Contact Information */}
          <div
            className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            style={{
              position: "absolute",
              bottom: "25%",
              left: "50%",
              transform: "translate(-50%, -10%)",
            }}
          >
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a
                // MODIFIED: Use dynamic data
                href={`mailto:${currentFooterData.email}`}
                className="text-gray-300 hover:text-primary-500 transition-colors duration-200"
              >
                {currentFooterData.email}
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a
                // MODIFIED: Use dynamic data
                href={`tel:${currentFooterData.phone.replace(/\s/g, "")}`}
                className="text-gray-300 hover:text-primary-500 transition-colors duration-200"
              >
                {currentFooterData.phone}
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Address</h3>
              {/* MODIFIED: Use dynamic data */}
              <p className="text-gray-300">{currentFooterData.address}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%, -10%)",
          }}
        >
          {/* MODIFIED: Use dynamic data */}
          <p className="text-white text-sm">
            {currentFooterData.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}
