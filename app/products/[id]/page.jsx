"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Home from "@/public/Icon_Home.svg";
import Next from "@/public/Next_Page_Icon.svg";
import Share from "@/public/Share_Icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardComment from "../../../components/ui/cards/cards-comment";
import { Navigation, Pagination } from "swiper/modules";
import { useParams } from "next/navigation";
import { getComment } from "@/sevice/comment.service";
import { getProductId } from "@/sevice/product.service";

const Index = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [commentsProduct, setCommentsProduct] = useState([]);

  const fetchProduct = useCallback(async () => {
    try {
      if (id) {
        const productId = Array.isArray(id) ? id[0] : id;
        const response = await getProductId(productId);
        const commentResponse = await getComment(1, 4, productId);
        setCommentsProduct(commentResponse.Comment || []);
        setProducts(Array.isArray(response) ? response : [response]);
      }
    } catch (error) {
      console.error("Error fetching product or comments:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-2 pt-5 pb-5">
        <Link href="/" className="flex gap-2">
          <Image src={Home} alt="Home_Icon" />
          <p className="text-black opacity-60 text-[16px]">Главная</p>
        </Link>
        <Image src={Next} alt="Next_Page_Icon" />
        <p className="text-black text-[16px] font-medium">Корзина</p>
        <Image src={Next} alt="Next_Page_Icon" />
        {products.map((item, index) => (
          <p className="text-black text-[16px] font-medium" key={index}>
            {item.product_name}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between mb-[80px]">
        <div className="Swiper_Slider w-full md:w-auto">
          <div className="relative w-full md:w-[713px]">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              className="w-full rounded-lg bg-white overflow-hidden"
              modules={[Navigation, Pagination]}
            >
              {products.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <div className="w-full md:w-[713px] h-[441px] relative flex justify-center py-10">
                    <Image
                      src={item.image_url[0]}
                      alt={`Product image ${index + 1}`}
                      width={513}
                      height={341}
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[136px] h-[90px] bg-white border-2 border-yellow-500 rounded-lg overflow-hidden"
                >
                  <Image
                    src={item.image_url[0]}
                    width={136}
                    height={90}
                    alt={`Thumbnail image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="Product_Title bg-white p-4 md:px-12 rounded-lg mt-4 md:mt-0">
          {products.map((item, index) => (
            <div key={index}>
              <p className="text-[24px] md:text-[32px] pt-[20px] font-semibold w-full md:w-[320px] h-[100px]">
                {item.product_name}
              </p>
              <p className="text-[14px] md:text-[16px] pt-[20px] w-full md:w-[371px]">{item.description}</p>
              <p className="text-[14px] md:text-[16px] mb-[20px]">
                В комлекте: <span className="font-semibold">{item.count} шт.</span>
              </p>
              <p className="text-[14px] md:text-[16px] mb-[70px]">
                Страна производства: <span className="font-semibold">{item.made_in}</span>
              </p>
              <p className="text-[18px] md:text-[24px] mb-[80px] font-bold">
                <span className="font-medium">Цена:</span> {item.cost}{" "}
                <span className="text-[16px] md:text-[20px] font-normal bg-opacity-80">uzs</span>
              </p>
              <div className="flex gap-5 mb-[60px]">
                <button className="w-[145px] bg-[#FBD029] hover:bg-[#bfa84d] font-medium p-4 rounded-md">
                  Корзина
                </button>
                <button className="w-[145px] border border-[#FBD029] hover:bg-[#FBD029] font-medium p-4 rounded-md">
                  Сравнить
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Image src={Share} alt="Share_Icon" width={24} height={24} />
                <p className="text-[14px] md:text-[16px]">Поделиться</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-between mb-[81px]">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <p className="text-[24px] md:text-[32px] font-medium mb-[31px]">Описание</p>
          <div className="bg-white py-[20px] md:py-[40px] pr-[20px] md:pr-[140px] pl-[20px] md:pl-[50px] rounded-lg">
            <p className="text-[20px] md:text-[24px] font-medium mb-[28px]">
              Гантель виниловая, 2 х 3 кг
            </p>
            <p className="text-[14px] md:text-[16px] w-full md:w-[371px] mb-[53px]">
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <div className="flex flex-wrap gap-14">
              <div>
                <div className="mb-[30px]">
                  <p className="text-[18px] md:text-[20px] font-semibold">Вес гантела:</p>
                  <p>5кг</p>
                </div>
                <div>
                  <p className="text-[18px] md:text-[20px] font-semibold">Вес гантела:</p>
                  <p>5кг</p>
                </div>
              </div>
              <div>
                <div className="mb-[30px]">
                  <p className="text-[18px] md:text-[20px] font-semibold">Цвета:</p>
                  <p>Синий, Красный</p>
                </div>
                <div>
                  <p className="text-[18px] md:text-[20px] font-semibold">Цвета:</p>
                  <p>Синий, Красный</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <p className="text-[24px] md:text-[32px] font-medium mb-[31px]">Отзыви</p>
          <div className="bg-white py-[20px] md:py-[40px] pr-[20px] md:pr-[140px] pl-[20px] md:pl-[50px] rounded-lg">
            <p className="text-[20px] md:text-[24px] font-medium mb-[28px]">
              Гантель виниловая, 2 х 3 кг
            </p>
            <p className="text-[14px] md:text-[16px] w-full md:w-[371px] mb-[53px]">
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <div className="flex flex-wrap gap-14">
              <div>
                <div className="mb-[30px]">
                  <p className="text-[18px] md:text-[20px] font-semibold">Вес гантела:</p>
                  <p>5кг</p>
                </div>
                <div>
                  <p className="text-[18px] md:text-[20px] font-semibold">Вес гантела:</p>
                  <p>5кг</p>
                </div>
              </div>
              <div>
                <div className="mb-[30px]">
                  <p className="text-[18px] md:text-[20px] font-semibold">Цвета:</p>
                  <p>Синий, Красный</p>
                </div>
                <div>
                  <p className="text-[18px] md:text-[20px] font-semibold">Цвета:</p>
                  <p>Синий, Красный</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[24px] md:text-[32px] font-medium mb-10">Рекомендованные продукты</p>
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
          {commentsProduct.slice(0).map((item, index) => (
            <CardComment key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
