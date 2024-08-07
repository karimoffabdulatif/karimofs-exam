"use client";
import { useState } from "react";
import Image from "next/image";
import Category_Icon from "../../../public/Search_Section_Icon.svg";
import Search_Icon from "../../../public/Icon_Search.svg";
import Like_Icon from "../../../public/Like_icon.svg";
import Shop_Icon from "../../../public/Shopping_Icon.svg";
import Login_Modal from '../../modal/login/index';
import Link from "next/link";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white w-full p-4 sm:p-6 md:p-8 lg:p-[15px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
            <button className="hidden lg:flex shadow-lg bg-black p-3 sm:p-4 lg:p-[11px] text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-yellow-300 hover:text-black transition-all gap-2 text-white rounded-[5px] items-center justify-center space-x-2">
              <Image src={Category_Icon} alt="Icon" className="hidden lg:block" />
              Каталог
            </button>
            <div className="flex shadow-lg w-full sm:w-auto">
              <input
                type="search"
                placeholder="Поиск"
                className="bg-[#F2F2F2] text-[#1F1D14] w-full sm:w-[300px] md:w-[400px] lg:w-[502px] rounded-[5px] p-3 sm:p-4"
              />
              <Image src={Search_Icon} alt="Search_Icon" className="ml-[-30px] sm:ml-[-40px]" />
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-0">
            <div className="flex gap-2 sm:gap-4 lg:gap-6">
              <Login_Modal />
              <Link href='/wishlist' className="bg-[#F2F2F2] shadow-lg w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-[3px] flex items-center justify-center hover:bg-yellow-300 transition-all">
                <Image src={Like_Icon} alt="Like_Icon" />
              </Link>
            </div>

            <Link href="/basket">
              <button className="bg-[#F2F2F2] w-full shadow-lg sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 md:w-[165px] lg:w-[200px] rounded-[3px] flex items-center justify-center hover:bg-yellow-300 transition-all">
                <Image src={Shop_Icon} alt="Shopping_Icon" />
                <span className="ml-2">Корзина</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && <Login_Modal onClose={closeModal} />}
    </div>
  );
};

export default Index;
