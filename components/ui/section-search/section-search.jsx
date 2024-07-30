"use client";
import { useState } from "react";
import Image from "next/image";
import Category_Icon from "../../../public/Search_Section_Icon.svg";
import Search_Icon from "../../../public/Icon_Search.svg";
import User_Icon from "../../../public/User_Icon.svg";
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
    <div className="bg-white w-full p-4 sm:p-6 md:p-[15px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="bg-black w-full sm:w-auto p-3 sm:p-4 md:p-[11px] text-[16px] sm:text-[18px] md:text-[20px] hover:bg-yellow-300 hover:text-black transition-all gap-2 text-white rounded-[5px] flex items-center justify-center space-x-2">
              <Image src={Category_Icon} alt="Icon" className="hover:text-black" />
              Каталог
            </button>
            <div className="flex w-full sm:w-auto">
              <input
                type="Search"
                placeholder="Поиск"
                className="bg-[#F2F2F2] text-[#1F1D14] w-full sm:w-[300px] md:w-[502px] rounded-[5px] p-3 sm:p-4"
              />
              <Image src={Search_Icon} alt="Search_Icon" className="ml-[-30px] sm:ml-[-40px]" />
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
            <div className="flex gap-2 sm:gap-4">
              <button
                onClick={handleUserButtonClick}
                className="User_Button bg-[#F2F2F2] w-10 h-10 sm:w-11 sm:h-11 rounded-[3px] flex items-center justify-center hover:bg-yellow-300 transition-all"
              >
                <Image src={User_Icon} alt="User_Icon" />
              </button>
              <button className="bg-[#F2F2F2] w-10 h-10 sm:w-11 sm:h-11 rounded-[3px] flex items-center justify-center hover:bg-yellow-300 transition-all">
                <Image src={Like_Icon} alt="Like_Icon" />
              </button>
            </div>

            <Link href="/basket">
              <button className="bg-[#F2F2F2] w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:w-[165px] md:h-[53px] rounded-[3px] flex items-center justify-center hover:bg-yellow-300 transition-all">
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
