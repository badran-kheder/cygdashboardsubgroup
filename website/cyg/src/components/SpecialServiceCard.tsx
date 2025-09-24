"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface SubService {
  title: string;
  icon: string; // Changed to string for image src
  backgroundColor: "green" | "black";
  href?: string;
}

interface SpecialServiceCardProps {
  title: string;
  titleAccent: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  mainIcon: string;
  mainIconAlt: string;
  subServices: SubService[];
  mainContentOrder?: 1 | 2;
  subServicesOrder?: 1 | 2;
}

export default function SpecialServiceCard({
  title,
  titleAccent,
  description,
  buttonText,
  buttonHref,
  mainIcon,
  mainIconAlt,
  subServices,
  mainContentOrder = 1,
}: SpecialServiceCardProps) {
  return (
    <div className="py-20 px-4">
      <div
        className={`max-w-7xl mx-auto flex border border-white border-radius p-10 bg-black hover:border-primary-500 transition-all duration-200 hover:shadow-glow ${
          mainContentOrder === 2 ? "flex-col-reverse" : "flex-col"
        }`}
      >
        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">{title}</span>
              <br />
              <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
            </h2>
            <p className="text-xl text-white mb-8 text-gray-300">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center font-semibold hover:scale-105 px-8 py-4 rounded-full transition-all duration-300"
              style={{
                backgroundColor: "#77EB8A",
                color: "#0B1F3A",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(119, 235, 138, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#4FD1C5";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(119, 235, 138, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#77EB8A";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(119, 235, 138, 0.3)";
              }}
            >
              {buttonText}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="flex justify-end">
            <div className="w-64 h-64 flex items-center justify-center relative">
              <Image
                src={mainIcon}
                alt={mainIconAlt}
                fill
                sizes="256px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Sub-services Grid */}
        <div
          className={`grid md:grid-cols-3 ${
            mainContentOrder === 2 ? "mb-16" : "mt-16"
          }`}
        >
          {subServices.map((service, index) => (
            // <Link
            //   key={index}
            //   href={service.href || "#"}
            //   className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black border border-gray-700 hover:border-primary-500 hover:bg-primary-500"
            // >
            <div
              key={index}
              className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black border border-gray-700 hover:border-primary-500 hover:bg-primary-500"
            >
              <div className="w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                {service.icon && typeof service.icon === "string" && service.icon.trim() !== "" ? (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src="/images/spec-ico.png"
                    alt={service.title}
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                )}
              </div>
              <h3 className="text-white font-semibold text-lg">
                {service.title}
              </h3>
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
