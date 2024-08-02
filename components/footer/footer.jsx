"use client";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Logo_Title from "../../public/L_T.svg";
import Message from "../../public/Message_Icon.svg";
import Tel from "../../public/Tel_Icon.svg";
import Navigator from "../../public/Icon_Navigator.svg";
import Insta_Icon from "../../public/Insta_Icon.svg";
import Facebook_Icon from "../../public/Facebook_Icon.svg";
import Telegram_Icon from "../../public/Telegram_Icon.svg";

const Index = () => {
  return (
    <>
      <div className="bg-[#FBD029] h-[24px]"></div>

      <div className="bg-[#1F1D14] w-full py-10">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="flex flex-col items-center lg:items-start">
              <div className="flex mt-8 gap-3 ">
                <Image src={Logo} alt="Logo" />
                <div className="w-[107px]">
                  <Image src={Logo_Title} alt="Title" className="lg:ml-2 w-[116px]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0">
              <p className="font-sans text-[18px] text-white font-semibold">
                Контакты
              </p>
              <div className="flex items-center mt-4 text-white hover:text-slate-500 transition-all">
                <Image src={Tel} alt="Telephone Icon" className="w-5 h-5 mr-2" />
                <p className="text-[16px]">
                  +998 (90){" "}
                  <span className="font-semibold text-[20px]">565-85-85</span>
                </p>
              </div>
              <div className="flex items-center mt-4 text-white hover:text-slate-500 transition-all">
                <Image src={Message} alt="Message Icon" className="w-5 h-5 mr-2" />
                <p className="text-[16px]">support@figma.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0">
              <div className="flex items-center gap-4 mt-8">
                <Image src={Navigator} alt="Navigator Icon" className="w-6 h-6" />
                <p className="text-white font-sans w-[232px]">
                  Tashkent Sh. Chilonzor 9 kvartal 12 uy
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0">
              <p className="text-white text-[18px]">Подписатся</p>
              <input
                placeholder="support@figma.com"
                className="bg-white mt-4 w-full h-[40px] rounded-[5px] border border-slate-400 p-2"
              />
              <button className="bg-[#FBD029] w-full h-[40px] rounded-[5px] mt-4 text-[16px] font-normal hover:bg-[#E0B627]">
                Отправить
              </button>
              <div className="flex gap-4 mt-8">
                <a href="https://www.instagram.com/">
                  <Image src={Insta_Icon} alt="Instagram Icon" className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/">
                  <Image src={Facebook_Icon} alt="Facebook Icon" className="w-6 h-6" />
                </a>
                <a href="https://t.me/ak_0_001">
                  <Image src={Telegram_Icon} alt="Telegram Icon" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <hr className="mt-10 mb-4 border-gray-700" />

          <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left">
            <p className="text-white text-[12px] mb-4 lg:mb-0">© 2022 All Rights Reserved</p>
            <div className="flex justify-center lg:justify-start text-[#7B7E86] gap-4">
              <p className="text-[14px]">Privacy Policy</p>
              <p className="text-[14px]">Terms of Use</p>
              <p className="text-[14px]">Sales and Refunds</p>
              <p className="text-[14px]">Legal</p>
              <p className="text-[14px]">Site Map</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
