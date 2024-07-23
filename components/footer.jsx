import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Logo_Title from "../public/L_T.svg";
import Message from "../public/Message_Icon.svg";
import Tel from "../public/Tel_Icon.svg";
import Navigator from "../public/Icon_Navigator.svg";
import Insta_Icon from "../public/Insta_Icon.svg";
import Facebook_Icon from "../public/Facebook_Icon.svg";
import Telegram_Icon from "../public/Telegram_Icon.svg";

const Index = () => {
  return (
    <>
      <div className="bg-[#FBD029] h-[24px]"></div>

      <div className=" bg-[#1F1D14] w-full h-[380px]">
        <div className="container mx-auto px-10  max-w-1240">
          <div className="flex">
            <div className="Logo">
              <div className="flex mt-[75px]">
                <Image src={Logo} alt="Logo" />
                <div className="w-[107px]">
                  <Image
                    src={Logo_Title}
                    alt="Title"
                    className="ml-[11px] w-[116px]"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="ml-[72px] mt-[73px]">
                <p className="font-sans text-[18px] text-white font-[900px] ml-[35px]">
                  Контакты
                </p>

                <div className="flex  mt-[20px] ml-[32px]  text-white font-sans hover:text-slate-500 transition-all">
                  <Image src={Tel} alt="Telephone_Icon]" className="mt-[5px]" />
                  <p className="ml-[5px] text-[16px]">
                    +998 (90){" "}
                    <span className="font-semibold text-[24px]">565-85-85</span>
                  </p>
                </div>

                <div className="flex  mt-[20px] ml-[32px]  text-white font-sans hover:text-slate-500 transition-all">
                  <Image
                    src={Message}
                    alt="Message_Icon"
                    className="mt-[5px]"
                  />
                  <p className="ml-[5px]">support@figma.com</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-[13px] mt-[123px] ml-[130px]">
                <Image src={Navigator} alt="Navigator_Icon" />
                <p className="w-[232px] text-white font-sans">
                  Tashkent Sh. Chilonzor 9 kvartal 12 uy
                </p>
              </div>
            </div>

            <div className="inputs">
              <div className="mt-[73px] ml-[280px]">
                <p className="text-white text-[18px]">Подписатся</p>
                <input
                  placeholder="support@figma.com"
                  className="bg-white mt-[16px] w-[235px] h-[40px] rounded-[5px] border-[1px] border-slate-400 p-[16px]"
                />
                <div className="button">
                  <button className="bg-[#FBD029] w-[235px] h-[40px] rounded-[5px] mt-[16px] text-[16px] font-normal hover:bg-[#E0B627]">
                    Отправить
                  </button>
                </div>
              </div>
              <div className="icons">
                <div className="flex gap-[20px] mt-[49px] ml-[280px] ">
                  <a href="https://www.instagram.com/">
                    <Image src={Insta_Icon} alt="Insta_icon" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <Image src={Facebook_Icon} alt="Insta_Icon" />
                  </a>
                  <a href="https://t.me/ak_0_001">
                    <Image src={Telegram_Icon} alt="Insta_Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[44px]" />
        <div className="container mx-auto px-10  max-w-1240 flex gap-[720px] mt-[13px]">
          <p className="text-white text-[12px] ">© 2022 All Rights Reserved</p>

          <div className="flex text-[#7B7E86] gap-[40px] ">
            <p className="text-[14px]">Privacy Policy</p>
            <p className="text-[14px]">Terms of Use</p>
            <p className="text-[14px]">Sales and Refunds</p>
            <p className="text-[14px]">Legal</p>
            <p className="text-[14px]">Site Map</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
