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
    <div className="container">
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
              Оплата и Доставка
            </p>
          </div>

          <div className="Big Div flex gap-[24px]">
            <div>
              <div className="w-[187px] bg-white rounded-lg">
                <div className="flex gap-1 pb-[289px] pt-[18px] ml-[9px]">
                  <Image src={Yellow} alt="Tik" />
                  <p className="text-[16px] font-medium">Оплата и Доставка</p>
                </div>
              </div>
            </div>

            <div className="w-[714px] bg-white rounded-lg">
              <p className="text-[24px] font-semibold pt-[40px] ml-[50px]">
                Способы оплаты
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[17px]">
                Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и
                выбрать тот товар, который Вы хотите купить.
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[29px]">
                После перехода в Корзину, откроется список товаров, которые Вы
                добавили. Далее, нажимаем кнопку «Оформить заказ». В окне,
                появится «Контактная информация» и «Способы доставки», которые
                Вам не обходимо заполнить.
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[29px]">
                Вы можете выбрать более подходящий для Вас способ оплаты:
                -Оплата на месте; -Оплата по терминалу; -Оплата через платёжные
                системы, такие как CLICK, Payme.
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[29px] pb-[35px]">
                Оплатить покупки можно наличными при получении. Убедительная
                просьба вначале ознакомиться с товаром, убедиться в отсутствии
                дефектов в присутствии курьера, после чего оплачивать сумму.
              </p>

              <p className="text-[24px] font-semibold pt-[40px] ml-[50px]">
                Доставка
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[17px]">
                Тарифы на доставку товаров по Ташкенту:
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[29px]">
                -20.000 сум для товаров до 150.000 сум -Бесплатная доставка для
                всех товаров от 150.000 сум
              </p>
              <p className="text-[16px] w-[598px] ml-[50px] pt-[29px] pb-[74px]">
                Тарифы на доставку товаров по всех регионов: -Платная доставка
                для всех товаров по согласованной цене -Бесплатная установка для
                всех тренажеров
              </p>
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
