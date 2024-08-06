"use client";
import Image from "next/image";
import Banner1 from "@/public/Banner1.jpg";
import Banner2 from "@/public/Banner_2.jpg";
import Banner3 from "@/public/Banner3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Index() {
  return (
    <div className=" mx-auto px-2 container lg:mx-auto lg:pt-[10px] pb-[40px] lg:mt-[20px]">
      <div className=" mb-[-130px] lg:w-full h-[350px] mt-[50px] lg:mb-[80px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop="false"
          className="myBanner"
        >
          <SwiperSlide>
            <div className="rounded-lg lg:rounded-[15px] overflow-hidden">
              <Image src={Banner1} alt="..." />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg lg:rounded-[15px] overflow-hidden">
              <Image src={Banner2} alt="..." />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg lg:rounded-[15px] overflow-hidden">
              <Image src={Banner3} alt="..." />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}