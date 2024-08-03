"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "../../public/Icon_Home.svg";
import Next from "../../public/Next_Page_Icon.svg";
import Yellow from "../../public/Yellow_Tick.svg";
import Share from "../../public/Share_Icon.svg";
import Print from "../../public/Print_Icon.svg";
import Action_Card from "../../components/ui/cards/cards-comment";

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
    <div className="container mx-auto px-4 md:px-10">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-[24px] md:text-[30px] font-medium">Загрузка...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 pt-[20px] md:pt-[27px] pb-[20px] md:pb-[35px]">
            <Link href="/" className="flex gap-2 items-center">
              <Image src={Home} alt="Home_Icon" className="w-4 h-4 md:w-auto md:h-auto" />
              <p className="text-black opacity-60 text-[14px] md:text-[16px]">Главная</p>
            </Link>
            <Image src={Next} alt="Next_Page_Icon" className="w-4 h-4 md:w-auto md:h-auto" />
            <Link href="../products" className="flex gap-2 items-center">
              <p className="text-black text-[14px] md:text-[16px] opacity-60 font-medium">Продукты</p>
            </Link>
            <Image src={Next} alt="Next_Page_Icon" className="w-4 h-4 md:w-auto md:h-auto" />
            <p className="text-black text-[14px] md:text-[16px] font-medium">О нас</p>
          </div>

          <div className="flex flex-col md:flex-row gap-[24px]">
            <div className="flex-shrink-0">
              <div className="w-full md:w-[187px] bg-white rounded-lg">
                <div className="flex gap-1 pb-[15px] pt-[18px] ml-[9px]">
                  <Image src={Yellow} alt="Tik" className="w-4 h-4 md:w-auto md:h-auto" />
                  <p className="text-[16px] font-medium">О нас</p>
                </div>
                <p className="text-[16px] font-medium ml-[30px] pb-[184px]">Вканация</p>
              </div>
            </div>

            <div className="w-full md:w-[714px] bg-white rounded-lg">
              <p className="text-[24px] font-semibold pt-[20px] md:pt-[40px] ml-[20px] md:ml-[50px]">
                7 SPORT MARKET
              </p>
              <p className="text-[16px] w-[90%] md:w-[598px] ml-[20px] md:ml-[50px] pt-[17px]">
                В составе томатов в большом количестве содержатся сахара, клетчатка,
                пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а
                также нужные организму человека.
              </p>
              <p className="text-[16px] w-[90%] md:w-[598px] ml-[20px] md:ml-[50px] pt-[29px]">
                Овощи содержат в себе много полезных витаминов, которые укрепляют
                здоровье и иммунитет и являются необходимым компонентом в рационе
                человека. Тепличный помидор - всегда доступен для вас и в сети
                супермаркетов “Makro” вы всегда можете найти его по выгодной цене и
                заказать их с доставкой в Ташкенте.
              </p>
              <p className="text-[16px] w-[90%] md:w-[598px] ml-[20px] md:ml-[50px] pt-[29px]">
                В составе томатов в большом количестве содержатся сахара, клетчатка,
                пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а
                также нужные организму человека.
              </p>
              <p className="text-[16px] w-[90%] md:w-[598px] ml-[20px] md:ml-[50px] pt-[29px] pb-[30px] md:pb-[62px]">
                Овощи содержат в себе много полезных витаминов, которые укрепляют
                здоровье и иммунитет и являются необходимым компонентом в рационе
                человека. Тепличный помидор - всегда доступен для вас и в сети
                супермаркетов “Makro” вы всегда можете найти его по выгодной цене и
                заказать их с доставкой в Ташкенте.
              </p>

              <div className="flex gap-[16px] lg:pr-20 md:gap-[32px] justify-center md:justify-end pl-[20px] md:pl-[434px] pb-[30px] md:pb-[70px]">
                <div className="flex gap-[5px]">
                  <p>Поделиться:</p>
                  <Image src={Share} alt="Share_Icon" className="w-4 h-4 md:w-auto md:h-auto" />
                </div>
                <div className="flex gap-[5px]">
                  <p>Распечатать:</p>
                  <Image src={Print} alt="Print_Icon" className="w-4 h-4 md:w-auto md:h-auto" />
                </div>
              </div>
            </div>
          </div>

          <div className="Aksiya pt-[40px] md:pt-[60px]">
            <p className="text-[24px] md:text-[32px] font-medium mb-6">Акция</p>
            <div className="flex justify-center lg:flex-wrap gap-4 lg:gap-10  md:justify-between">
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
