import Image from "next/image";
import Left_Icon from "@/public/Left_icon.svg";

const Index = () => {
  return (
    <section className="Abaut container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="flex justify-center lg:justify-start text-[24px] sm:text-[32px] font-medium mb-6">О нас</p>
      <div className="w-full bg-[#1F1D14] rounded-lg mb-[100px] p-6 sm:p-10 lg:p-14">
        <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed">
          Интернет магазин спортивных товаров{" "}
          <span className="font-semibold underline">7MARKETSPORT.UZ</span>{" "}
          предлагает широкий ассортимент продукции с доставкой по Ташкенту,
          области и другим регионам Узбекистана. Ведется работа как с розничными
          покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты
          заметно упрощает процесс приобретения товара. Действует гибкая система
          скидок. Разнообразие форм оплаты заметно упрощает процесс приобретения
          товара. Действует гибкая система скидок.
        </p>
        <div className="pt-[25px] pb-[50px] flex justify-center sm:justify-end">
          <Image
            src={Left_Icon}
            alt="Left_Icon"
            className="w-[50px] h-[50px] sm:w-auto sm:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
