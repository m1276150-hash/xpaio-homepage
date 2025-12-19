"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      style={{ width: "100%", height: "600px" }}
    >
      <SwiperSlide>
        <img src="/hero-banner1.webp" alt="배너1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-banner2.webp" alt="배너2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-banner3.webp" alt="배너3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-banner4.webp" alt="배너4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-banner5.webp" alt="배너5" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </SwiperSlide>
    </Swiper>
  );
}