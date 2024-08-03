"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "../../public/Icon_Home.svg";
import Next from "../../public/Next_Page_Icon.svg";
import Yellow from "../../public/Yellow_Tick.svg";
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
    <div className="container mx-auto px-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-[24px] md:text-[30px] font-medium">Загрузка...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 pt-[20px] pb-[25px]">
            <Link href="/" className="flex gap-2 items-center">
              <Image src={Home} alt="Home_Icon" className="w-[20px] md:w-[24px]" />
              <p className="text-black opacity-60 text-[14px] md:text-[16px]">Главная</p>
            </Link>
            <Image src={Next} alt="Next_Page_Icon" className="w-[20px] md:w-[24px]" />
            <Link href="../products">
              <p className="text-black text-[14px] md:text-[16px] opacity-60 font-medium">
                Продукты
              </p>
            </Link>
            <Image src={Next} alt="Next_Page_Icon" className="w-[20px] md:w-[24px]" />
            <p className="text-black text-[14px] md:text-[16px] font-medium">
              Оплата и Доставка
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full h-[100px] md:w-[187px] lg:h-[300px] bg-white rounded-lg">
              <div className="flex gap-1 pb-[20px] pt-[10px] ml-[10px]">
                <Image src={Yellow} alt="Tik" className="w-[20px] md:w-[24px]" />
                <p className="text-[14px] md:text-[16px] font-medium">Оплата и Доставка</p>
              </div>
            </div>

            <div className="w-full md:w-[714px] bg-white rounded-lg">
              <p className="text-[20px] md:text-[24px] font-semibold pt-[20px] md:pt-[40px] ml-[10px] md:ml-[50px]">
                Способы оплаты
              </p>
              <p className="text-[14px] md:text-[16px] w-full md:w-[598px] ml-[10px] md:ml-[50px] pt-[10px] md:pt-[17px]">
                Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и
                выбрать тот товар, который Вы хотите купить.
              </p>
              <p className="text-[14px] md:text-[16px] w-full md:w-[598px] ml-[10px] md:ml-[50px] pt-[10px] md:pt-[29px]">
                После перехода в Корзину, откроется список товаров, которые Вы
                добавили. Далее, нажимаем кнопку «Оформить заказ». В окне,
                появится «Контактная информация» и «Способы доставки», которые
                Вам не обходимо заполнить.
              </p>
              <p className="text-[14px] md:text-[16px] w-full md:w-[598px] ml-[10px] md:ml-[50px] pt-[10px] md:pt-[29px]">
                Вы можете выбрать более подходящий для Вас способ оплаты:
                -Оплата на месте; -Оплата по терминалу; -Оплата через платёжные
                системы, такие как CLICK, Payme.
              </p>
              <p className="text-[14px] md:text-[16px] w-full md:w-[598px] ml-[10px] md:ml-[50px] pt-[10px] md:pt-[29px] pb-[25px] md:pb-[35px]">
                Оплатить покупки можно наличными при получении. Убедительная
                просьба вначале ознакомиться с товаром, убедиться в отсутствии
                дефектов в присутствии курьера, после чего оплачивать сумму.
              </p>

              <p className="text-[20px] md:text-[24px] font-semibold pt-[20px] md:pt-[40px] ml-[10px] md:ml-[50px]">
                Доставка
              </p>
              <p className="text-[14px] md:text-[16px] w-full md:w-[598px] ml-[10px] md:ml-[50px] pt-[10px] md:pt-[17px]">
                Тарифы на доставку товаров по Ташкенту:
              </p>
              <p className="text-[14px] md:text-[16px] w-full md:w-[598px] ml-[10px] md:ml-[50px] pt-[10px] md:pt-[29px]">
                -20.000 сум для товаров до 150.000 сум -Бесплатная доставка для
                всех товаров от 150.000 сум
              </p>
              <p className="text-[14px] md:text-[16px] w-full md:w-[598px] ml-[10px] md:ml-[50px] pt-[10px] md:pt-[29px] pb-[50px] md:pb-[74px]">
                Тарифы на доставку товаров по всех регионов: -Платная доставка
                для всех товаров по согласованной цене -Бесплатная установка для
                всех тренажеров
              </p>
            </div>
          </div>

          <div className="pt-[40px] md:pt-[60px]">
            <p className="text-[28px] md:text-[32px] font-medium mb-4 md:mb-6">Акция</p>
            <div className="flex justify-center   flex-wrap lg:justify-between gap-4">
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
