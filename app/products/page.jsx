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
    <div className="container mx-auto px-4 md:px-10">
      <div className="flex gap-2 pt-[27px] pb-[20px]">
        <Link href="/" className="flex gap-2 items-center">
          <Image src={Home} alt="Home_Icon" className="w-6 h-6" />
          <p className="text-black opacity-60 text-[16px]">Главная</p>
        </Link>
        <Image src={Next} alt="Next_Page_Icon" className="w-6 h-6" />
        <p className="text-black text-[16px] font-medium">Продукты</p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="md:w-[300px] w-full">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-[16px] font-medium">Филтрь</p>
            <p className="text-[12px] font-normal mt-4">Цена</p>
            <div className="bg-[#F2F2F2] w-full rounded-md flex items-center justify-center mt-2">
              <Box sx={{ width: 1 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={1000}
                  step={10}
                  sx={{ color: "#FBD029",  xs: "100%", 
                    sm: "100%",
                    md: "170px", }}
                />
                <div className="flex p-3 justify-between mt-2 text-sm font-semibold">
                  <span>{`${value[0]} uzs`}</span>
                  <span>{`${value[1]} uzs`}</span>
                </div>
              </Box>
            </div>

            <div className="mt-4">
              <p className="text-[14px] font-medium">Артикул:</p>
              <input
                type="text"
                placeholder="аф566"
                className="w-full bg-[#F2F2F2] p-3 rounded-lg mt-2"
              />
              <p className="text-[14px] font-medium mt-4">Выберите категорию:</p>
              <select className="w-full bg-[#F2F2F2] p-3 rounded-lg mt-2">
                <option value="all">Все</option>
                <option value="option1">Option 1</option>
              </select>

              <p className="text-[14px] font-medium mt-4">Новинка:</p>
              <select className="w-full bg-[#F2F2F2] p-3 rounded-lg mt-2">
                <option value="all">Все</option>
                <option value="option1">Option 1</option>
              </select>

              <p className="text-[14px] font-medium mt-4">Акция:</p>
              <select className="w-full bg-[#F2F2F2] p-3 rounded-lg mt-2">
                <option value="all">Все</option>
                <option value="option1">Option 1</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full p-4 bg-[#E4E4E4] rounded-bl-lg rounded-br-lg text-[15px] font-medium">
              Показать результат
            </button>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-2 items-center">
              <select className="w-full md:w-[147px] bg-white px-3 py-2 rounded-md">
                <option value="all" className="font-semibold">
                  Сортировать
                </option>
                <option value="option1">Option 1</option>
              </select>
              <select className="w-full md:w-[147px] bg-white px-3 py-2 rounded-md">
                <option value="all" className="font-semibold">
                  Все продукты
                </option>
                <option value="option1">Option 1</option>
              </select>
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-white flex w-full md:w-[93px] rounded-lg px-3 py-2 items-center">
                <p className="text-[16px] pl-2">Кард</p>
                <Image src={Cadr} alt="Cadr_Icon" className="ml-2 w-6 h-6" />
              </div>

              <div className="bg-white flex w-full md:w-[93px] px-3 py-2 rounded-lg items-center">
                <p className="text-[16px] opacity-80 pl-2">Лист</p>
                <Image src={Lists} alt="Lists_Icon" className="opacity-80 ml-2 w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-5 mb-4">
            {products.slice(0, shownProducts).map((product) => (
              <Cards key={product.id} {...product} />
            ))}
          </div>
          {shownProducts < products.length && (
            <div >
              <button
                onClick={handleMore}
                className="w-full p-4 mb-[50px] text-[16px] font-semibold bg-white hover:bg-yellow-300 transition-all border rounded-md flex items-center justify-center"
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-[32px] font-medium mb-14">Реконмендуемые продукты</p>
      <div className="flex flex-wrap gap-5">
        {comments.slice(4).map((comment) => (
          <CardsComment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Index;
