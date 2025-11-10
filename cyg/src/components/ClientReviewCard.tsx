"use client";

import Image from "next/image";

interface ClientReviewCardProps {
  imageSrc: string;
  title: string;
  description: string;
  company?: string;
}

export default function ClientReviewCard({
  imageSrc,
  title,
  description,
  company,
}: ClientReviewCardProps) {
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
            <h3 className="text-xl sm:text-2xl font-bold text-primary-500 mb-2">
              {title}
            </h3>
            {company && (
              <p className="text-white text-sm sm:text-base mb-4">{company}</p>
            )}
            <div className="w-full h-px bg-white mb-4"></div>
          </div>
          <div className="flex-grow">
            {descriptionParagraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-white text-xs sm:text-sm leading-relaxed mb-3"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

