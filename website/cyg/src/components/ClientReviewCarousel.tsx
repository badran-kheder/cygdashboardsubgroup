"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ClientReviewCard from "./ClientReviewCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ClientReview {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  company?: string;
}

interface ClientReviewCarouselProps {
  reviews: ClientReview[];
}

export default function ClientReviewCarousel({
  reviews,
}: ClientReviewCarouselProps) {
  return (
    <div className="py-8" style={{ backgroundColor: "#262626" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        allowSlideNext={true}
        allowSlidePrev={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        className="client-review-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id || index}>
            <ClientReviewCard
              imageSrc={review.image}
              title={review.title}
              description={review.description}
              company={review.company}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .client-review-swiper .swiper-button-next,
        .client-review-swiper .swiper-button-prev {
          color: #77eb8a;
          background: rgba(0, 0, 0, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .client-review-swiper .swiper-button-next:hover,
        .client-review-swiper .swiper-button-prev:hover {
          background: rgba(119, 235, 138, 0.2);
          transform: scale(1.1);
        }

        .client-review-swiper .swiper-button-next::after,
        .client-review-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        .client-review-swiper .swiper-pagination-bullet {
          background: #77eb8a;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .client-review-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        .client-review-swiper .swiper-pagination {
          bottom: 5%;
        }
      `}</style>
    </div>
  );
}

