'use client'

import IndustriesGrid from "./IndustriesGrid"

interface StockProps {
  title: string
  titleAccent: string
  description: string
  backgroundImage: string
  backgroundImageAlt: string
}

export default function Stock({
  title,
  titleAccent,
  description,
  backgroundImage,
  backgroundImageAlt
}: StockProps) {
  return (
    <section>
      <div className="relative w-full h-[800px] flex items-center justify-center text-center overflow-hidden bg-black">
        {/* Background Image Overlay */}
        <div className="absolute z-0 opacity-20">
          <img src={backgroundImage} alt={backgroundImageAlt} />
        </div>

        {/* Content */}
        <div className="relative z-10 p-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            {title}{" "}
            <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-lg mx-auto text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="px-40 bg-black pb-20">
          <IndustriesGrid />
        </div>
    </section>
  )
}
