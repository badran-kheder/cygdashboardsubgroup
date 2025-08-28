"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PerspectiveCard from "./PerspectiveCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Perspective {
  imageSrc: string;
  title: string;
  category1: string;
  category2: string;
  date: string;
}

interface IndustryPerspectivesCarouselProps {
  perspectives: Perspective[];
}

export default function IndustryPerspectivesCarousel({
  perspectives,
}: IndustryPerspectivesCarouselProps) {
  return (
    <div className="py-8" style={{ backgroundColor: "#262626" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="industry-perspectives-swiper"
      >
        {perspectives.map((perspective, index) => (
          <SwiperSlide key={index}>
            <PerspectiveCard
              imageSrc={perspective.imageSrc}
              title={perspective.title}
              category1={perspective.category1}
              category2={perspective.category2}
              date={perspective.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .industry-perspectives-swiper .swiper-button-next,
        .industry-perspectives-swiper .swiper-button-prev {
          color: #77eb8a;
          background: rgba(0, 0, 0, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .industry-perspectives-swiper .swiper-button-next:hover,
        .industry-perspectives-swiper .swiper-button-prev:hover {
          background: rgba(119, 235, 138, 0.2);
          transform: scale(1.1);
        }

        .industry-perspectives-swiper .swiper-button-next::after,
        .industry-perspectives-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        .industry-perspectives-swiper .swiper-pagination-bullet {
          background: #77eb8a;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .industry-perspectives-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        .industry-perspectives-swiper .swiper-pagination {
          bottom: 0;
        }
      `}</style>
    </div>
  );
}
