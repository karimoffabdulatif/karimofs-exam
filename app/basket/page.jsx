"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "../../public/Icon_Home.svg";
import Next from "../../public/Next_Page_Icon.svg";
import Gan from "../../public/Tosh.svg";
import Delete from "../../public/Delete_Icon.svg";
import Bag from "../../public/Bag.svg";
import Clothes from "../../public/Forma.svg";
import Jump from "../../public/Jumping.svg";
import Location from "../../public/Yellow-Location.svg";
import Click from "../../public/Click_Logo.svg";
import Payme from "../../public/Payme_Logo.svg";
import For_Card from "../../public/For_Card.svg";
import Wallet from "../../public/Wallet.svg";
import Card_Modal from '../../components/modal/bank-card';
import Location_Modal from '../../components/modal/location/index'

const Index = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Гантель виниловая, 2 х 3 кг Гантель",
      price: 300000,
      initialCount: 1,
      image: Gan,
    },
    {
      id: 2,
      name: "Сумка спортивная",
      price: 220000,
      initialCount: 1,
      image: Bag,
    },
    {
      id: 3,
      name: "Форма спортивная",
      price: 1500000,
      initialCount: 1,
      image: Clothes,
    },
    {
      id: 4,
      name: "Скакалка",
      price: 30000,
      initialCount: 1,
      image: Jump,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const updateProductCount = (id, newCount) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, count: newCount } : product
      )
    );
  };

  const getTotalCount = () => {
    return products.reduce((total, product) => total + (product.count || 0), 0);
  };

  const getTotalPrice = () => {
    return products.reduce(
      (total, product) => total + (product.count || 0) * product.price,
      0
    );
  };

  return (
    <div className="container mx-auto">
      <div className="flex gap-2 pt-[20px] pb-[20px]">
        <Link href="/" className="flex gap-2">
          <Image src={Home} alt="Home_Icon" />
          <p className="text-black opacity-60 text-[16px]">Главная</p>
        </Link>
        <Image src={Next} alt="Next_Page_Icon" />
        <p className="text-black text-[16px] font-medium">Корзина</p>
      </div>

      <div className="flex gap-[24px]">
        <div className="w-[713px] bg-white rounded-lg mb-[60px]">
          <div className="flex pt-[20px] p-7">
            <p className="text-[24px] font-semibold">Ваша корзина</p>
            <p className="text-[12px] text-[#FF1313] font-medium pt-[8px] ml-auto pr-3">
              Очистить все
            </p>
          </div>

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCountChange={(newCount) =>
                updateProductCount(product.id, newCount)
              }
            />
          ))}

          <div className="pt-[63px] pl-[32px]">
            <p className="text-[20px] font-medium text-[#06F] underline">
              Все информация о доставке
            </p>
            <p className="text-[20px] w-[385px] pb-[60px]">
              Если у вас имеются вопросы позаоните по номеру:{" "}
              <span className="text-[#06F] fort-medium">+998940017653</span>
            </p>
          </div>
        </div>

        <div className="w-[504px] bg-white rounded-lg p-6 self-start">
          <p className="text-[20px] font-semibold">Итого</p>
          <div className="flex gap-[150px]">
            <div>
              <p className="text-[20px] font-medium w-[200px]">
                Кол-во товаров:
              </p>
              <p className="text-[20px] font-medium w-[20px]">
                {getTotalCount()}
              </p>
            </div>
            <div>
              <p className="text-[20px] font-medium w-[63px]">Сумма:</p>
              <p className="text-[22px] font-bold">
                {getTotalPrice().toLocaleString()}
              </p>
            </div>
          </div>

          <div className="pt-[24px]">
            <p className="text-[20px] font-semibold">Ваши данные</p>
            <p className="text-[16px] pt-[24px] mb-[8px]">Имя /Фамиля</p>
            <input
              placeholder="Имя /Фамиля"
              className="w-[414px] p-[16px] rounded-[5px] bg-[#F2F2F2]"
            />
            <div>
              <p className="text-[16px] pt-[24px] mb-[8px]">Ваш номер</p>
              <input
                type="tel"
                placeholder="+998__- __ - __ - __"
                className="w-[414px] p-[16px] rounded-[5px] bg-[#F2F2F2]"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
            <div className="mb-10">
              <p className="text-[16px] pt-[24px] mb-[8px]">Адрес доставки</p>
              <div className="flex">
                <input
                  placeholder="Область/город/улица/дом"
                  className="w-[350px] p-[16px] rounded-[5px]  bg-[#F2F2F2]"
                />
                <button className="Location btn" onClick={() => setIsLocationModalOpen(true)}>
                  <Image src={Location} alt="Yellow_Location" />
                </button>
              </div>
            </div>

            <div className="mb-[59px]">
              <p className="text-[20px]  font-semibold mb-[24px]">Тип оплаты</p>
              <div className=" grid grid-cols-3 gap-4 w-full">
                <Image src={Click} alt="Click_Logo" />
                <Image src={Payme} alt="Payme_Logo" />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="Card"
                >
                  <Image src={For_Card} alt="Card" />
                </button>
                <Image src={Wallet} alt="Wallet" />
              </div>
            </div>

            <div className="mb-[50px]">
              <button className="bg-[#FBD029]  hover:bg-yellow-300 transition-all w-[424px] p-4 rounded-md text-[24px] font-semibold">Купить</button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <Card_Modal onClose={() => setIsModalOpen(false)} />}
      {isLocationModalOpen && <Location_Modal onClose={() => setIsLocationModalOpen(false)} />}
    </div>
  );
};

const ProductCard = ({ product, onCountChange }) => {
  const [count, setCount] = useState(product.initialCount || 1);
  const totalPrice = count * product.price;

  const handleCountChange = (newCount) => {
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="w-[655px] ml-[30px] bg-[#F2F2F2] flex gap-[60px] mb-[20px]">
      <div className="pt-[10px] p-3">
        <Image src={product.image} alt={product.name} className="w-[160px]" />
      </div>
      <div className="pt-[19px]">
        <p className="w-[292px] text-[20px] mb-[30px]">{product.name}</p>
        <div className="flex gap-[40px]">
          <div className="flex gap-3 mt-[15px]">
            <button
              onClick={() => handleCountChange(count > 1 ? count - 1 : count)}
              className="text-[24px] bg-white rounded-full w-[33px]"
            >
              -
            </button>
            <p className="text-[18px] mt-1">{count}</p>
            <button
              onClick={() => handleCountChange(count + 1)}
              className="text-[24px] bg-white rounded-full w-[33px]"
            >
              +
            </button>
          </div>

          <div className="flex gap-1">
            <p className="text-[22px] font-bold">
              {totalPrice.toLocaleString()}
            </p>
            <p className="text-[16px] mt-[5px] font-normal">UZS</p>
          </div>
        </div>
      </div>

      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center  mt-4">
        <Image src={Delete} alt="Delete-Icon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Index;
