"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TeamMemberCard from "./TeamMemberCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamMember {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  position?: string;
}

interface TeamMemberCarouselProps {
  teamMembers: TeamMember[];
}

export default function TeamMemberCarousel({
  teamMembers,
}: TeamMemberCarouselProps) {
  return (
    <div className="py-8">
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
        className="team-member-swiper"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={member.id || index}>
            <TeamMemberCard
              imageSrc={member.image}
              title={member.title}
              position={member.position || "Team Member"}
              description={member.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .team-member-swiper .swiper-button-next,
        .team-member-swiper .swiper-button-prev {
          color: #77eb8a;
          background: rgba(0, 0, 0, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .team-member-swiper .swiper-button-next:hover,
        .team-member-swiper .swiper-button-prev:hover {
          background: rgba(119, 235, 138, 0.2);
          transform: scale(1.1);
        }

        .team-member-swiper .swiper-button-next::after,
        .team-member-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        .team-member-swiper .swiper-pagination-bullet {
          background: #77eb8a;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .team-member-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        .team-member-swiper .swiper-pagination {
          bottom: 5%;
        }
      `}</style>
    </div>
  );
}

