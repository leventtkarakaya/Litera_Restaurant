import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./Css/Content.module.css";
import Resim from "/FatihŞubesi.png";
import Resim1 from "/GaziosmanpaşaŞubesi.png";
import Resim2 from "/KadıköyŞubesi.png";

export default function Content() {
  return (
    <>
      <div className={style.content} id="home">
        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className={`${style.swiper} mySwiper`}
        >
          <SwiperSlide className={`${style.swiperSlide}`}>
            <img src={Resim} alt="Restaurant" width="100%" height="100%" />
          </SwiperSlide>
          <SwiperSlide className={`${style.swiperSlide}`}>
            <img src={Resim1} alt="Restaurant" width="100%" height="100%" />
          </SwiperSlide>
          <SwiperSlide className={`${style.swiperSlide}`}>
            <img src={Resim2} alt="Restaurant" width="100%" height="100%" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
