"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "../../public/Icon_Home.svg";
import Next from "../../public/Next_Page_Icon.svg";
import Yellow from "../../public/Yellow_Tick.svg";
import Action_Card from "../../components/ui/cards/cards-comment";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const actions = [
    { id: 1, text: "Great action!", author: "Alice" },
    { id: 2, text: "Amazing offer.", author: "Bob" },
    { id: 3, text: "Don't miss this.", author: "Charlie" },
    { id: 4, text: "Limited time offer.", author: "Dave" },
    { id: 5, text: "Special discount.", author: "Eve" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-10">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-[30px] font-medium">Загрузка...</p>
        </div>
      ) : (
        <>
          <div className="flex gap-2 pt-[27px] pb-[35px]">
            <Link href="/" className="flex gap-2">
              <Image src={Home} alt="Home_Icon" />
              <p className="text-black opacity-60 text-[16px]">Главная</p>
            </Link>
            <Image src={Next} alt="Next_Page_Icon" />
            <Link href="../products">
              <p className="text-black text-[16px] opacity-60 font-medium">
                Продукты
              </p>
            </Link>
            <Image src={Next} alt="Next_Page_Icon" />
            <p className="text-black text-[16px] font-medium">
            Контакты
            </p>
          </div>

          <div className="flex gap-[24px] flex-col md:flex-row">
            <div className="w-full md:w-[187px] bg-white rounded-lg">
              <div className="flex gap-1 pb-[289px] pt-[18px] ml-[9px]">
                <Image src={Yellow} alt="Tik" />
                <p className="text-[16px] font-medium">Контакты</p>
              </div>
            </div>

            <div className="w-full md:w-[714px] bg-white rounded-lg">
              <p className="text-[24px] font-semibold pt-[40px] ml-[50px]">
              Номер телефона
              </p>
              <p className="text-[16px] w-full md:w-[598px] ml-[50px] pt-[17px]">
              +998 (90) 565-85-85
              </p>
             

              <p className="text-[24px] font-semibold pt-[40px] ml-[50px]">
              Адрес. Электронная почта
              Uzum в соцсетях
              </p>
              <p className="text-[16px] w-full md:w-[598px] ml-[50px] pt-[17px]">
              info@gmail.com
              </p>
              <p className="text-[24px] font-semibold pt-[40px] ml-[50px]">
              {`"Sport Market" в соцсетях`}
              </p>

              <div className="flex gap-[20px] pl-16 py-10 justify-center">
                <a href="https://www.instagram.com/">
                  <InstagramIcon className="text-black w-[70px]" />
                </a>
                <a href="https://www.facebook.com/">
                  <FacebookIcon className="text-black" />
                </a>
                <a href="https://t.me/ak_0_001">
                  <TelegramIcon className="text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-[60px]">
            <p className="text-[32px] font-medium mb-6">Акция</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {actions.slice(4).map((action) => (
                <Action_Card key={action.id} {...action} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
