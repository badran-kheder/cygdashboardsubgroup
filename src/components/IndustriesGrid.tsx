// src/components/IndustriesGrid.tsx
import React from "react";
import {
  MdCode,
  MdFavorite,
  MdLocalHotel,
  MdShoppingCart,
  MdApartment,
  MdEngineering,
  MdSchool,
  MdWork,
} from "react-icons/md";

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  isFeatured?: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  icon,
  title,
  isFeatured = false,
}) => {
  const baseClasses =
    "flex flex-col items-center justify-center p-6 border border-gray-700 text-center transition-all duration-300 p-20";
  const featuredClasses = isFeatured
    ? "bg-primary-500 text-white"
    : "bg-black text-white hover:bg-gray-800";

  return (
    <div className={`${baseClasses} ${featuredClasses}`}>
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-base font-medium">{title}</p>
    </div>
  );
};

const IndustriesGrid: React.FC = () => {
  const industries = [
    { title: "Technology", icon: <MdCode />, isFeatured: true },
    { title: "Healthcare", icon: <MdFavorite /> },
    { title: "Hospitality", icon: <MdLocalHotel /> },
    { title: "E-commerce", icon: <MdShoppingCart /> },
    { title: "Real Estate", icon: <MdApartment /> },
    { title: "Manufacturing", icon: <MdEngineering /> },
    { title: "Education", icon: <MdSchool /> },
    { title: "Professional Services", icon: <MdWork /> },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-gray-700">
      {industries.map((industry, index) => (
        <IndustryCard
          key={index}
          icon={industry.icon}
          title={industry.title}
          isFeatured={industry.isFeatured}
        />
      ))}
    </div>
  );
};

export default IndustriesGrid;
