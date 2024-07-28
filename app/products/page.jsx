"use client";
import Link from "next/link";
import Image from "next/image";
import Home from "../../public/Icon_Home.svg";
import Next from "../../public/Next_Page_Icon.svg";
import Cadr from "../../public/Cadr_Icon.svg";
import Lists from "../../public/Lists_Icon.svg";
import CardsComment from "../../components/ui/cards/cards-comment";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Cards from "../../components/ui/cards/cards";
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [shownProducts, setShownProducts] = useState(6);
  const [value, setValue] = useState([20, 37]);
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
    { id: 7, name: "Product 7", price: 700 },
    { id: 8, name: "Product 8", price: 800 },
    { id: 9, name: "Product 9", price: 900 },
  ]);

  const [comments, setComments] = useState([
    { id: 1, text: "Great product!", author: "Alice" },
    { id: 2, text: "Really enjoyed using this.", author: "Bob" },
    { id: 3, text: "Highly recommend it to everyone.", author: "Charlie" },
    { id: 4, text: "Worth the price.", author: "Dave" },
    { id: 5, text: "Fantastic quality!", author: "Eve" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMore = () => {
    setShownProducts((prev) => Math.min(prev + 6, products.length));
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value} uzs`;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-[30px] font-medium">Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10">
      <div className="flex gap-2 pt-[27px] pb-[20px]">
        <Link href="/" className="flex gap-2">
          <Image src={Home} alt="Home_Icon" />
          <p className="text-black opacity-60 text-[16px]">Главная</p>
        </Link>
        <Image src={Next} alt="Next_Page_Icon" />
        <p className="text-black text-[16px] font-medium">Продукты</p>
      </div>

      <div className="Big div flex gap-[24px]">
        <div className="filter">
          <div className="bg-white pb-[38px] w-[292px] rounded-lg">
            <p className="text-[16px] font-medium pt-5 ml-[18px]">Филтрь</p>
            <p className="text-[12px] font-normal pt-5 ml-[18px]">Цена</p>
            <div className="bg-[#F2F2F2] w-[256px] ml-[18px] rounded-md flex items-center justify-center mt-[10px]">
              <Box sx={{ width: 147 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={100}
                  step={1}
                  sx={{
                    color: "#FBD029",
                  }}
                />
                <div className="flex justify-between mt-2">
                  <span className="font-semibold">{`${value[0]} uzs`}</span>
                  <span className="font-semibold">{`${value[1]} uzs`}</span>
                </div>
              </Box>
            </div>

            <div className="pt-[16px] ml-[18px]">
              <p className="text-[14px] font-medium">Артикул:</p>
              <input
                type="text"
                placeholder="аф566"
                className="w-[256px] bg-[#F2F2F2] p-3 rounded-lg mt-[10px]"
              />
              <p className="text-[14px] font-medium pt-[16px]">
                Выберите категорию:
              </p>
              <select className="w-[256px] bg-[#F2F2F2] p-3 rounded-lg mt-[10px]">
                <option value="all" className="opacity-100">
                  Все
                </option>
                <option value="option1">Option 1</option>
              </select>

              <p className="text-[14px] font-medium pt-[16px]">Новинка:</p>
              <select className="w-[256px] bg-[#F2F2F2] p-3 rounded-lg mt-[10px]">
                <option value="all" className="opacity-100">
                  Все
                </option>
                <option value="option1">Option 1</option>
              </select>

              <p className="text-[14px] font-medium pt-[16px]">Акция:</p>
              <select className="w-[256px] bg-[#F2F2F2] p-3 rounded-lg mt-[10px]">
                <option value="all" className="opacity-100">
                  Все
                </option>
                <option value="option1">Option 1</option>
              </select>
            </div>
          </div>
          <div className="pb-[10px]">
            <button className="w-[292px] p-5 bg-[#E4E4E4] rounded-bl-lg rounded-br-lg text-[15px] font-medium">
              Показать результат
            </button>
          </div>
        </div>

        <div>
          <div className="Card w-full flex gap-[331px] items-start">
            <div className="flex gap-[25px] items-center">
              <select className="w-[147px] bg-white px-[15px] py-[7px] rounded-md">
                <option value="all" className="font-semibold">
                  Сортировать
                </option>
                <option value="option1">Option 1</option>
              </select>
              <select className="w-[147px] bg-white px-[15px] py-[7px] rounded-md">
                <option value="all" className="font-semibold">
                  Все продукты
                </option>
                <option value="option1">Option 1</option>
              </select>
            </div>

            <div className="flex gap-[8px] items-center">
              <div className="bg-white flex w-[93px] rounded-lg px-[15px] py-[7px] items-center">
                <p className="text-[16px] pl-2">Кард</p>
                <Image src={Cadr} alt="Cadr_Icon" className="ml-[10px]" />
              </div>

              <div className="bg-white flex w-[93px] px-[15px] py-[7px] rounded-lg items-center">
                <p className="text-[16px] opacity-80 pl-2 ">Лист</p>
                <Image
                  src={Lists}
                  alt="Cadr_Icon"
                  className="opacity-80 ml-[10px]"
                />
              </div>
            </div>
          </div>

          <div className="Products_Table grid gap-4 mt-5  grid-cols-3">
            {products.slice(0, shownProducts).map((product) => (
              <Cards key={product.id} {...product} />
            ))}
          </div>
          {shownProducts < products.length && (
            <div className="pt-[15px] pb-[110px]">
              <button
                onClick={handleMore}
                className="w-full p-[15px] text-[16px] font-semibold bg-white hover:bg-yellow-300 transition-all hover:font-semibold  border-[3px] rounded-[5px] flex items-center justify-center"
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-[32px] font-medium mb-[60px]">
        Реконмендуемые продукты
      </p>
      <div className="Comments flex gap-4 mt-5 ">
        {comments.slice(4).map((comment) => (
          <CardsComment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Index;
