"use client";

interface IndustryPerspectivesHeadingProps {
  title: string;
  titleAccent: string;
  description: string;
}

export default function IndustryPerspectivesHeading({
  title,
  titleAccent,
  description,
}: IndustryPerspectivesHeadingProps) {
  return (
    <div
      className="text-center py-16 px-4 text-white"
      style={{ backgroundColor: "#262626" }}
    >
      <h2 className="text-4xl font-bold mb-4">
        {title} <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
    </div>
  );
}
