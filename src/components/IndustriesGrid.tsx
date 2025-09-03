// src/components/IndustriesGrid.tsx
import React from "react";
import Link from "next/link";
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
  href: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, href }) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center p-6 border border-gray-700 text-center transition-all duration-300 p-20 bg-black text-white hover:bg-primary-500"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-base font-medium">{title}</p>
    </Link>
  );
};

const IndustriesGrid: React.FC = () => {
  const industries = [
    { title: "Technology", icon: <MdCode />, href: "/services" },
    { title: "Healthcare", icon: <MdFavorite />, href: "/services" },
    { title: "Hospitality", icon: <MdLocalHotel />, href: "/services" },
    { title: "E-commerce", icon: <MdShoppingCart />, href: "/services" },
    { title: "Real Estate", icon: <MdApartment />, href: "/services" },
    { title: "Manufacturing", icon: <MdEngineering />, href: "/services" },
    { title: "Education", icon: <MdSchool />, href: "/services" },
    { title: "Professional Services", icon: <MdWork />, href: "/services" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-gray-700">
      {industries.map((industry, index) => (
        <IndustryCard
          key={index}
          icon={industry.icon}
          title={industry.title}
          href={industry.href}
        />
      ))}
    </div>
  );
};

export default IndustriesGrid;
