import Image from "next/image";
import Data from "@/public/Data_Icon.svg";
import Eye from "@/public/Eye_Icon.svg";

const Index = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[560px] lg:mb-[40px] shadow-xl bg-white rounded-lg mx-4 md:mx-auto">
        <p className=" text-[18px] flex text-start ml-[18px] lg:w-full lg:pl-14 max-w-[462px]  mx-auto lg:text-[24px] md:text-[32px] font-semibold pt-[20px] md:pt-[38px]">
          Как правильно выбрать эллиптический тренажер?
        </p>
        <p className="text-[14px] p-5 md:text-[16px] w-full max-w-[454px] mx-auto opacity-70 pt-[9px]">
          Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки. Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...
        </p>
        <div className="flex  gap-[20px] justify-start pl-6 lg:pl-20 md:gap-[39px] pt-[50px] md:pt-[100px] pb-[25px] md:pb-[45px] mx-auto lg:justify-start md:justify-start">
          <div className="flex gap-1">
            <Image src={Data} alt="Data_Icon" />
            <p>{currentDate}</p>
          </div>
          <div className="flex gap-1">
            <Image src={Eye} alt="Eye_Icon" />
            <p>250</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
