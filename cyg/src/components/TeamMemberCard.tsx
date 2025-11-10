"use client";

import Image from "next/image";

interface TeamMemberCardProps {
  imageSrc: string;
  title: string;
  position: string;
  description: string;
}

export default function TeamMemberCard({
  imageSrc,
  title,
  position,
  description,
}: TeamMemberCardProps) {
  // Split description into paragraphs
  const descriptionParagraphs = description
    .split(". ")
    .filter((sentence) => sentence.trim().length > 0)
    .map((sentence) => (sentence.endsWith(".") ? sentence : sentence + "."));

  return (
    <div className="relative w-full p-3 sm:p-4">
      <div className="overflow-hidden h-full flex flex-col bg-black rounded-2xl">
        {/* Image */}
        <div className="relative h-[40vh] sm:h-[45vh]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="overlay"></div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow bg-black">
          <div className="mb-4">
            <h3
              className="text-primary-500 mb-2 team-member-card-name"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "clamp(2rem, 5vw, 4.375rem)",
                margin: 0,
              }}
            >
              {title}
            </h3>
            <p
              className="text-white mb-4 mt-5 team-member-card-position"
              style={{
                fontFamily: "Grift, Arial, sans-serif",
                fontStyle: "italic",
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
              }}
            >
              {position}
            </p>
            <div className="w-full my-10 h-px bg-white mb-6"></div>
          </div>
          <div className="flex-grow">
            {descriptionParagraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-white mb-3 sm:mb-4 team-member-card-description"
                style={{
                  fontFamily: "Grift, Arial, sans-serif",
                  fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
                  margin: 0,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop lock: Maintain original desktop view for team member name, position, and description */}
      <style jsx global>{`
        @media (min-width: 1920px) {
          .team-member-card-name {
            font-size: 70px !important;
            line-height: 70px !important;
          }
          .team-member-card-position {
            font-size: 32px !important;
            line-height: 40px !important;
          }
          .team-member-card-description {
            font-size: 20px !important;
            line-height: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}

