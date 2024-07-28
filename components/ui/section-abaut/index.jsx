import Image from "next/image";

import Left_Icon from "../../../public/Left_icon.svg";
const Index = () => {
  return (
    <section className="Abaut  container mx-auto px-10 pb-[80px]">
      <p className="text-[32px] font-medium  mb-6">О нас</p>
      <div className="w-[1160px] bg-[#1F1D14] rounded-lg">
        <p className="w-[710px] text-white text-[20px] pt-[70px] ml-[80px]">
          Интернет магазин спортивных товаров{" "}
          <span className="font-semibold underline">7MARKETSPORT.UZ</span>{" "}
          предлагает широкий ассортимент продукции с доставкой по Ташкенту,
          области и другим регионам Узбекистана. Ведется работа как с розничными
          покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты
          заметно упрощает процесс приобретения товара. Действует гибкая система
          скидок. Разнообразие форм оплаты заметно упрощает процесс приобретения
          товара. Действует гибкая система скидок.
        </p>
        <div className="pt-[25px] pb-[50px] ">
          <Image
            src={Left_Icon}
            alt="Left_Icon"
            className="ml-auto mr-[110px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
