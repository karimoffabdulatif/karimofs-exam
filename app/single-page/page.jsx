"use client";
import Link from "next/link";
import Image from "next/image";
import Home from "../../public/Icon_Home.svg";
import Next from "../../public/Next_Page_Icon.svg";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Index = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container">
      <div className="flex gap-2 pt-[20px] pb-[20px]">
        <Link href="/" className="flex gap-2">
          <Image src={Home} alt="Home_Icon" />
          <p className="text-black opacity-60 text-[16px]">Главная</p>
        </Link>
        <Image src={Next} alt="Next_Page_Icon" />
        <p className="text-black text-[16px] font-medium">Корзина</p>
        <Image src={Next} alt="Next_Page_Icon" />
        <p className="text-black text-[16px] font-medium">Гантель виниловая, 2 х 3 кг</p>
      </div>
      <div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper3 bg-none"
        >
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" className="rounded-md"/>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={1}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper_2  rounded-lg shadow-lg"
        >
          <SwiperSlide className=" p-2">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className=" p-2">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className=" p-2">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className=" p-2">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className=" p-2">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className=" p-2">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="rounded-md"/>
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" className="rounded-md"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Index;
