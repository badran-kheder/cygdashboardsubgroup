"use client";

import Link from "next/link";
import Image from "next/image";

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
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div
        className={`mx-auto flex border border-white border-radius bg-black hover:border-primary-500 transition-all duration-200 hover:shadow-glow ${
          mainContentOrder === 2 ? "flex-col-reverse" : "flex-col"
        }`}
        style={{
          padding: "clamp(1rem, 3vw, 2.5rem)",
          maxWidth: "100%",
        }}
      >
        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-1 items-center md:items-start">
          <div>
            <h2 
              className="mb-4 sm:mb-5 md:mb-6 special-service-card-title text-center md:text-left"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "clamp(1.5rem, 4vw, 4.375rem)",
                margin: 0,
              }}
            >
              <span className="text-white">{title}</span>
              <br />
              <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
            </h2>
            <p 
              className="text-white my-4 sm:my-6 md:my-8 special-service-card-description text-center md:text-left"
              style={{
                fontFamily: "Grift, Arial, sans-serif",
                fontSize: "clamp(0.875rem, 2vw, 1.75rem)",
              }}
            >
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center special-service-card-button transition-all duration-300 mx-auto md:mx-0"
              style={{
                width: "fit-content",
                height: "clamp(48px, 6vh, 68px)",
                paddingTop: "clamp(10px, 1.5vh, 16px)",
                paddingRight: "clamp(24px, 5vw, 64px)",
                paddingBottom: "clamp(10px, 1.5vh, 16px)",
                paddingLeft: "clamp(24px, 5vw, 64px)",
                gap: "0px",
                borderRadius: "80px",
                backgroundColor: "#77EB8A",
                color: "#ffffff",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(119, 235, 138, 0.3)",
                display: "flex",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#4FD1C5";
                e.currentTarget.style.transform = "translateY(-2px) rotate(0deg)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(119, 235, 138, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#77EB8A";
                e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(119, 235, 138, 0.3)";
              }}
            >
              <span 
                className="special-service-card-button-text"
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                }}
              >
                {buttonText}
              </span>
            </Link>
          </div>

          <div className="flex justify-center">
            <div 
              className="flex items-center justify-center relative"
              style={{
                width: "clamp(200px, 50vw, 330px)",
                height: "clamp(228px, 55vw, 377px)",
              }}
            >
              <Image
                src={mainIcon}
                alt={mainIconAlt}
                fill
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 330px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Sub-services Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 ${
            mainContentOrder === 2 ? "mb-8 sm:mb-12 md:mb-16" : "mt-8 sm:mt-12 md:mt-16"
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
              className="text-center transition-all duration-300 hover:scale-105 hover:shadow-lg special-service-sub-card"
              style={{
                width: "100%",
                maxWidth: "clamp(280px, 30vw, 448px)",
                height: "clamp(220px, 35vh, 343px)",
                gap: "10px",
                borderRadius: "0px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#454545",
                padding: "clamp(1rem, 3vw, 40px)",
                backgroundColor: "#000000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                margin: "0 auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#52B162";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
              }}
            >
              <div 
                className="flex items-center justify-center mx-auto mb-4 relative special-service-sub-icon"
                style={{
                  width: "clamp(50px, 6vw, 75px)",
                  height: "clamp(50px, 6vw, 75px)",
                }}
              >
                {service.icon && typeof service.icon === "string" && service.icon.trim() !== "" ? (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 50px, (max-width: 1024px) 60px, 75px"
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src="/images/spec-ico.png"
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 50px, (max-width: 1024px) 60px, 75px"
                    className="object-contain"
                  />
                )}
              </div>
              <h3 
                className="special-service-sub-title"
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(1rem, 2.5vw, 2rem)",
                  textAlign: "center",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {service.title}
              </h3>
            </div>
            // </Link>
          ))}
        </div>
      </div>

      {/* Responsive and Desktop lock styles */}
      <style jsx global>{`
        /* Mobile and Tablet: Center text on smaller screens */
        @media (max-width: 1023px) {
          .special-service-card-title {
            text-align: center !important;
          }
          .special-service-card-description {
            text-align: center !important;
          }
        }
        
        /* Desktop lock: Maintain original desktop view */
        @media (min-width: 1920px) {
          .special-service-card-title {
            font-size: 70px !important;
            line-height: 70px !important;
            text-align: left !important;
          }
          .special-service-card-description {
            font-size: 28px !important;
            line-height: 36px !important;
            text-align: left !important;
          }
          .special-service-card-button {
            width: 268px !important;
            height: 68px !important;
            border-left-width: 3px !important;
            padding-top: 16px !important;
            padding-right: 64px !important;
            padding-bottom: 16px !important;
            padding-left: 64px !important;
            gap: 0px !important;
            border-radius: 80px !important;
            opacity: 1 !important;
            transform: rotate(0deg) !important;
          }
          .special-service-card-button-text {
            font-size: 28px !important;
            line-height: 36px !important;
          }
          .special-service-sub-card {
            width: 448px !important;
            height: 343px !important;
            gap: 10px !important;
            padding: 40px !important;
            border: 1px solid #454545 !important;
          }
          .special-service-sub-card:hover {
            background-color: #52B162 !important;
          }
          .special-service-sub-icon {
            width: 75px !important;
            height: 75px !important;
          }
          .special-service-sub-title {
            font-size: 32px !important;
            line-height: 40px !important;
            color: #FFFFFF !important;
          }
        }
      `}</style>
    </div>
  );
}
