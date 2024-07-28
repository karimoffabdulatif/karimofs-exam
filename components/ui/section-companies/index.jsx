"use client";
import Image from "next/image";
import Puma from "../../../public/Logo_Puma.svg";
import H from "../../../public/Log_H.svg";
import Nike from "../../../public/Logo_Nike.svg";
import Adidas from "../../../public/Logo_Adidas.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Yangi import
import {  Autoplay } from "swiper/modules"; // Yangi import
import "./styles.css"

export default function Index() {
  return (
    <section className="Companies container mx-auto px-10 pb-[80px]">
      <div className="bg-white rounded-lg ">
        <Swiper
                slidesPerView={"7"}
                centeredSlides={true}
                spaceBetween={80}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 0, 
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={6000} 
                modules={[ Autoplay]}
                loop={"false"}
                className="mySnip"
        >
          <SwiperSlide className="flex items-center justify-center">
            <Image
              src={Puma}
              alt="Logo_Puma"
              className="w-[75px] h-[75px] pt-[25px] pb-[35px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <Image
              src={H}
              alt="Logo_H"
              className="w-[57px] h-[42px] pt-[35px] pb-[35px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <Image
              src={Nike}
              alt="Logo_Nike"
              className="w-[75px] h-[75px] pt-[42px] pb-[35px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <Image
              src={Adidas}
              alt="Logo_Adidas"
              className="w-[75px] h-[75px] pt-[30px] pb-[35px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <Image
              src={Puma}
              alt="Logo_Puma"
              className="w-[75px] h-[75px] pt-[25px] pb-[35px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <Image
              src={H}
              alt="Logo_H"
              className="w-[75px] h-[75px] pt-[35px] pb-[35px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <Image
              src={Puma}
              alt="Logo_Puma"
              className="w-[75px] h-[75px] pt-[25px] pb-[35px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <Image
              src={H}
              alt="Logo_H"
              className="w-[57px] h-[42px] pt-[35px] pb-[35px]"
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
}
