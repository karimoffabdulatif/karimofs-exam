"use client";
import Image from "next/image";
import Link from "next/link";
import Cards from '../../components/ui/cards/cards-news';
import Product_Cards from '../../components/ui/cards/cards';
import Home from '../../public/Icon_Home.svg';
import Next from '../../public/Next_Page_Icon.svg';
import { useState, useEffect } from "react";

const cardsData = [
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    description: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    views: 250
  },
  {
    title: "Еще одна полезная статья",
    description: "Описание еще одной полезной статьи...",
    date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    views: 150
  },
  {
    title: "Третья статья",
    description: "Краткое описание третьей статьи...",
    date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    views: 100
  },
  {
    title: "Четвертая статья",
    description: "Краткое описание четвертой статьи...",
    date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    views: 90
  },
  {
    title: "Пятая статья",
    description: "Краткое описание пятой статьи...",
    date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    views: 80
  },
  {
    title: "Шестая статья",
    description: "Краткое описание шестой статьи...",
    date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    views: 70
  },
];

const products = [
  { id: 1, title: 'Product 1', description: 'Description for Product 1' },
  { id: 2, title: 'Product 2', description: 'Description for Product 2' },
  { id: 3, title: 'Product 3', description: 'Description for Product 3' },
  { id: 4, title: 'Product 4', description: 'Description for Product 4' },
];

const Index = () => {
  const [cards, setCards] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const handleMore = () => {
    setCards(prev => Math.min(prev + 4, cardsData.length)); 
  };

  return (
    <div className="container mx-auto px-10">
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <p className="text-[30px] font-medium">Загрузка...</p> 
        </div>
      ) : (
        <>
          <div className="flex gap-2 pt-[27px] pb-[20px]">
            <Link href="/" className="flex gap-2">
              <Image src={Home} alt="Home_Icon" />
              <p className="text-black opacity-60 text-[16px]">Главная</p>
            </Link>
            <Image src={Next} alt="Next_Page_Icon" />
            <p className="text-black text-[16px] font-medium">Полезные информации</p>
          </div>

          <p className="text-[32px] font-medium mb-6">Полезные информации</p>

          <div className="grid grid-cols-2 gap-6 pb-[30px]">
            {cardsData.slice(0, cards).map((card, index) => (
              <Cards
                key={index}
                title={card.title}
                description={card.description}
                date={card.date}
                views={card.views}
              />
            ))}
          </div>

          {cards < cardsData.length && (
            <div className="pt-[15px] pb-[80px]">
              <button
                onClick={handleMore}
                className="w-[209px] p-[15px] border-[#FBD029] hover:bg-yellow-300 transition-all hover:font-semibold font-medium border-[3px] rounded-[5px] flex items-center justify-center"
              >
                Показать ещё
              </button>
            </div>
          )}
          <div className="pb-[80px]">
            <p className="text-[32px] font-medium mb-6">Акция</p>
            <div className="flex flex-wrap gap-6">
              {products.map(product => (
                <Product_Cards key={product.id} title={product.title} description={product.description} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
