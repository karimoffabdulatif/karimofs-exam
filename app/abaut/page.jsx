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
            <p className="text-black text-[16px] font-medium">О нас</p>
          </div>

          <div className="Big Div flex gap-[24px]">
            <div>
              <div className="w-[187px] bg-white rounded-lg">
                <div className="flex gap-1 pb-[15px] pt-[18px] ml-[9px]">
                  <Image src={Yellow} alt="Tik" />
                  <p className="text-[16px] font-medium">О нас</p>
                </div>
                <p className="text-[16px] font-medium ml-[30px] pb-[184px]">
                  Вканация
                </p>
              </div>
            </div>

            <div className="w-[714px] bg-white rounded-lg">
              <p className="text-[24px] font-semibold pt-[40px] ml-[50px]">
                7 SPORT MARKET
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[17px]">
                В составе томатов в большом количестве содержатся сахара, клетчатка,
                пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а
                также нужные организму человека.
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[29px]">
                Овощи содержат в себе много полезных витаминов, которые укрепляют
                здоровье и иммунитет и являются необходимым компонентом в рационе
                человека. Тепличный помидор - всегда доступен для вас и в сети
                супермаркетов “Makro” вы всегда можете найти его по выгодной цене и
                заказать их с доставкой в Ташкенте.
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[29px]">
                В составе томатов в большом количестве содержатся сахара, клетчатка,
                пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а
                также нужные организму человека.
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[29px] pb-[62px]">
                Овощи содержат в себе много полезных витаминов, которые укрепляют
                здоровье и иммунитет и являются необходимым компонентом в рационе
                человека. Тепличный помидор - всегда доступен для вас и в сети
                супермаркетов “Makro” вы всегда можете найти его по выгодной цене и
                заказать их с доставкой в Ташкенте.
              </p>

              <div className="flex gap-[32px] pl-[434px] pb-[70px]">
                <div className="flex gap-[5px]">
                  <p>Поделиться:</p>
                  <Image src={Share} alt="Share_Icon" />
                </div>
                <div className="flex gap-[5px]">
                  <p>Распечатать:</p>
                  <Image src={Print} alt="Print_Icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="Aksiya pt-[60px]">
            <p className="text-[32px] font-medium mb-6">Акция</p>
            <div className="flex flex-wrap gap-4">
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
