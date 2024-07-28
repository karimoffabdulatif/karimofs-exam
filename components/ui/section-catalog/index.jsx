"use client";

import Image from "next/image";
import Treyn from "../../../public/Trinajor.svg";
import Bals from "../../../public/Balls.svg";
import Cross from "../../../public/Cross.svg";
import Clothes_Sport from "../../../public/Forma.svg";
import Clothes_Swimming from "../../../public/Swim.svg";
import Clothes_Snow from "../../../public/Snow.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, Pagination } from "swiper/modules";

export default function Index() {
  return (
    <div className="bg-white pb-16 ">
      <div className="container mx-auto px-10 ">
<div className="pt-7 pb-7">
  <p className="text-[32px] font-medium">Катаолог</p>
</div>

        <Swiper
          slidesPerView={"6"}
          centeredSlides={true}
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          autoplay={{
           
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={5000} 
          modules={[Pagination, Autoplay]}
          loop={"false"}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" bg-[#D3E5F2] rounded-lg px-9">
              <p className="text-[18px] font-medium flex mr-auto mt-3 -ml-7">
                Тренажеры
              </p>
              <Image
                src={Treyn}
                alt="Тренажеры"
                className="mt-[70px] mb-7"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-[#E2C6BE] bg-opacity-40 rounded-lg px-9">
              <p className="text-[18px] font-medium flex mr-auto mt-3 -ml-7">
              Мячи
              </p>
              <Image
                src={Bals}
                alt="Тренажеры"
                className="mt-[70px] mb-8"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-[#DADBE0] bg-opacity-40 rounded-lg pb-7 px-9">
              <p className="text-[18px] font-medium  mr-auto mt-3 -ml-7">
              Спротивные обуви
              </p>
              <Image
                src={Cross}
                alt="Тренажеры"
                className="mt-10"
              />
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className=" bg-[#E2EEC0] bg-opacity-40 rounded-lg pb-7 px-9">
              <p className="text-[18px] font-medium  mt-3 -ml-7">
              Спортивные одежды
              </p>
              <Image
                src={Clothes_Sport}
                alt="Тренажеры"
                className="mt-10"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-[#E2C6BE] bg-opacity-40 rounded-lg px-9">
              <p className="text-[18px] font-medium flex mr-auto mt-3 -ml-7">
              Мячи
              </p>
              <Image
                src={Bals}
                alt="Тренажеры"
                className="mt-[70px] mb-8"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-[#D3E5F2] rounded-lg px-9">
              <p className="text-[18px] font-medium flex mr-auto mt-3 -ml-7">
                Тренажеры
              </p>
              <Image
                src={Treyn}
                alt="Тренажеры"
                className="mt-[70px] mb-7"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w- bg-[#C2BCE8]  bg-opacity-40  rounded-lg pb-9 px-9">
              <p className="text-[18px] font-medium  mt-3 -ml-7">
              Водный спорт
              </p>
              <Image
                src={Clothes_Swimming}
                alt="Тренажеры"
                className="mt-10"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w- bg-[#ABA520] bg-opacity-40 rounded-lg pb-8 px-9">
              <p className="text-[18px] font-medium flex mr-auto mt-3 -ml-7">
              Горный спорт
              </p>
              <Image
                src={Clothes_Snow}
                alt="Тренажеры"
                className="mt-10"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}
