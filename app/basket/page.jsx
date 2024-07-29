"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from '../../public/Icon_Home.svg';
import Next from '../../public/Next_Page_Icon.svg';
import Gan from '../../public/Tosh.svg';
import Delete from '../../public/Delete_Icon.svg'

const Index = () => {
  const products = [
    {
      id: 1,
      name: 'Гантель виниловая, 2 х 3 кг Гантель',
      price: 300000,
      initialCount: 1,
      image: Gan
    },
    {
      id: 1,
      name: 'Гантель виниловая, 2 х 3 кг Гантель',
      price: 300000,
      initialCount: 1,
      image: Gan
    },
    {
      id: 1,
      name: 'Гантель виниловая, 2 х 3 кг Гантель',
      price: 300000,
      initialCount: 1,
      image: Gan
    },
    {
      id: 1,
      name: 'Гантель виниловая, 2 х 3 кг Гантель',
      price: 300000,
      initialCount: 1,
      image: Gan
    },
  
    // boshqa mahsulotlar qo'shilishi mumkin
  ];

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

      <div className="w-[713px] bg-white rounded-lg ">
        <div className="flex pt-[20px] p-7">
          <p className="text-[24px] font-semibold">Ваша корзина</p>
          <p className="text-[12px] text-[#FF1313] font-medium pt-[8px] ml-auto pr-3">Очистить все</p>
        </div>

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(product.initialCount || 1);
  const totalPrice = count * product.price;

  return (
    <div className="w-[655px] ml-[30px] bg-[#F2F2F2] flex gap-[22px] mb-[20px]">
      <div className="pt-[10px] p-3">
        <Image src={product.image} alt={product.name} className="w-[160px]"/>
      </div>
      <div className="pt-[19px]">
        <p className="w-[292px] text-[20px] mb-[30px]">{product.name}</p>
        <div className="flex gap-[40px]">
          <div className="flex gap-3">
            <button onClick={() => setCount(count > 1 ? count - 1 : count)} className="text-[24px] bg-white rounded-full w-[33px]">-</button>
            <p className="text-[18px] mt-1">{count}</p>
            <button onClick={() => setCount(count + 1)} className="text-[24px] bg-white rounded-full w-[33px]">+</button>
          </div>
          <div className="flex gap-1">
            <p className="text-[22px] font-bold">{totalPrice.toLocaleString()}</p>
            <p className="text-[16px] mt-[5px] font-normal">UZS</p>
          </div>
        </div>
      </div>

      <div className="bg-white w-10 mt-4 h-10 rounded-full ml-[80px]">
      <Image src={Delete} alt="Delete-Icon" className="w-6 flex pt-2 ml-2"/>
      </div>
    </div>
  );
};

export default Index;
