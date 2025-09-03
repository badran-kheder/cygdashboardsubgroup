"use client";

interface PerspectiveCardProps {
  imageSrc: string;
  title: string;
  category1: string;
  category2: string;
  date: string;
  href?: string;
}

export default function PerspectiveCard({
  imageSrc,
  title,
  category1,
  category2,
  date,
  href,
}: PerspectiveCardProps) {
  return (
    <div
      className="relative w-full p-4"
      // style={{ width: "80%", marginLeft: "20%" }}
    >
      <div className="overflow-hidden h-full flex flex-col">
        {/* Image and "Read More" */}
        <div className="relative" style={{ height: "60vh" }}>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover filter grayscale"
          />
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full flex items-center hover:bg-opacity-80 transition-all duration-200"
            >
              Directions <span className="ml-1 text-lg leading-none">→</span>
            </a>
          ) : (
            <button className="absolute top-4 right-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full flex items-center">
              Read More <span className="ml-1 text-lg leading-none">+</span>
            </button>
          )}
          <div className="overlay"></div>
        </div>

        {/* Card Content */}
        <div
          className="p-12 flex flex-col justify-between flex-grow"
          style={{ position: "absolute", bottom: 0, left: 0 }}
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
              {title}
            </h3>
            <div className="flex items-center text-sm text-white mb-4">
              <span className="px-2 py-1 rounded mr-2">
                {category1}
              </span>
              <span className="px-2 py-1 rounded">{category2}</span>
            </div>
          </div>
          <p className="text-white">{date}</p>
        </div>
      </div>
    </div>
  );
}
