import Link from "next/link";
import React from "react";
import path from "path";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Logo_Title from "../public/L_T.svg";
import Message from "../public/Message_Icon.svg";
import Tel from "../public/Tel_Icon.svg";

const Index = () => {
  const links = [
    { path: "/products", title: "Продукты" },
    { path: "/contacts", title: "Контакты" },
    { path: "/paymond", title: "Оплата и Доставка" },
    { path: "/news", title: "Новости" },
    { path: "/abaut", title: "О нас" },
  ];

  return (
    <>
      <div className="justify-end flex gap-4 pt-3 pb-3 bg-[#1F1D14] w-full h-[79px]">
        <div className="container mx-auto px-10  max-w-1240">
          <div className="w-full flex gap-[40px]">
            <div className="flex">
              <Image src={Logo} alt="Logo " />
              <div className="w-[107px]">
                <Image src={Logo_Title} alt="Title" className="ml-[11px]" />
              </div>
            </div>

            {links.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className="text-[16px] text-white font-sans hover:text-yellow-300 transition-all mt-[12px]"
                >
                  {item.title}
                </Link>
              );
            })}

            <div className="flex ml-[234.5px] mt-[12px]  text-white font-sans hover:text-yellow-300 transition-all">
              <Image src={Tel} alt="Telephone_Icon]" className="mt-[-15px]" />
              <p className="ml-[5px]">+998 (90) 565-85-85</p>
            </div>

            <div className="flex  mt-[12px] ml-[30px]  text-white font-sans hover:text-yellow-300 transition-all">
              <Image src={Message} alt="Message_Icon" className="mt-[-15px]" />
              <p className="ml-[5px]">info@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
