"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
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
  href?: string;
}

interface IndustryPerspectivesCarouselProps {
  perspectives: Perspective[];
}

export default function IndustryPerspectivesCarousel({
  perspectives,
}: IndustryPerspectivesCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const hasMultipleItems = perspectives.length > 1;

  useEffect(() => {
    if (swiperRef.current) {
      // Force update to ensure navigation is enabled
      swiperRef.current.update();
      swiperRef.current.updateSlides();
      swiperRef.current.updateSlidesClasses();
    }
  }, [perspectives]);

  return (
    <div className="py-8 pb-16" style={{ backgroundColor: "#262626" }}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Ensure navigation is enabled after initialization
          setTimeout(() => {
            swiper.update();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            // Manually enable navigation buttons
            if (swiper.navigation) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }, 100);
        }}
        onSlideChange={(swiper) => {
          // Update navigation on slide change
          if (swiper.navigation) {
            swiper.navigation.update();
          }
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation={hasMultipleItems}
        pagination={hasMultipleItems ? { clickable: true } : false}
        allowSlideNext={hasMultipleItems}
        allowSlidePrev={hasMultipleItems}
        watchOverflow={false}
        allowTouchMove={hasMultipleItems}
        resistance={true}
        resistanceRatio={0}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.9,
            spaceBetween: 30,
            allowTouchMove: true,
            watchOverflow: false,
            resistance: true,
            resistanceRatio: 0,
            centeredSlides: false,
            slidesOffsetAfter: 200,
            loop: false,
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
              href={perspective.href}
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
          bottom: 5%;
        }

        .industry-perspectives-swiper .swiper-button-next.swiper-button-disabled,
        .industry-perspectives-swiper .swiper-button-prev.swiper-button-disabled {
          opacity: 0.35;
          cursor: pointer;
          pointer-events: auto;
        }

        .industry-perspectives-swiper .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>
    </div>
  );
}
