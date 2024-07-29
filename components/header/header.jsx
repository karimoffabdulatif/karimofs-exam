import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Logo_Title from "../../public/L_T.svg";
import Message from "../../public/Message_Icon.svg";
import Tel from "../../public/Tel_Icon.svg";

const Index = () => {
  const links = [
    { path: "/products", title: "Продукты" },
    { path: "/contacts", title: "Контакты" },
    { path: "/paymond", title: "Оплата и Доставка" },
    { path: "/news", title: "Новости" },
    { path: "/abaut", title: "О нас" },
  ];

  return (
    <header>
      <div className="justify-end flex gap-4 pt-3 pb-3 bg-[#1F1D14] w-full h-[79px]">
        <div className="container   ">
          <div className="flex justify-between gap-[124px]">
            <div className=" flex  gap-[30px]">
              <div className="flex cursor-pointer">
                <Link href="/" className="flex">
                  <Image src={Logo} alt="Logo" />
                  <div className="w-[107px]">
                    <Image src={Logo_Title} alt="Title" className="ml-[11px]" />
                  </div>
                </Link>
              </div>

              {links.map((item, index) => {
                return (
                  <Link
                    href={item.path}
                    key={index}
                    className="text-[16px] text-white font-sans hover:text-yellow-300 transition-all mt-[12px] "
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            <div className="flex gap-[30px]">
              <div className="flex  mt-[12px]  text-white font-sans hover:text-yellow-300 transition-all">
                <Image src={Tel} alt="Telephone_Icon]" className="mt-[-15px]" />
                <p className="ml-[5px]">+998 (90) 565-85-85</p>
              </div>

              <div className="flex  mt-[12px]  text-white font-sans hover:text-yellow-300 transition-all">
                <Image
                  src={Message}
                  alt="Message_Icon"
                  className="mt-[-15px]"
                />
                <p className="ml-[5px]">info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
