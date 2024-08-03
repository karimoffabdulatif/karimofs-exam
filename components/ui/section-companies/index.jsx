"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Puma from "../../../public/Logo_Puma.svg";
import H from "../../../public/Log_H.svg";
import Nike from "../../../public/Logo_Nike.svg";
import Adidas from "../../../public/Logo_Adidas.svg";
import Reebok from "../../../public/Logo_Reebok.svg";
import Image from "next/image";

export default function Index() {
  const logos = [Puma, H, Nike, Adidas, Reebok];
  return (
    <div className="bg-gray-200 py-[40px]">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="card flex items-center max-w-[1240px] w-full h-[154px] bg-white ">
            <Swiper
              slidesPerView={7}
              centeredSlides={true}
              spaceBetween={10}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3000}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1536: {
                  slidesPerView: 7,
                  spaceBetween: 20,
                },
              }}
            >
              {logos.concat(logos).map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <div className="flex items-center justify-center w-[100px] h-[100px]">
                    <Image
                      src={logo}
                      alt={`Logo ${index}`}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
