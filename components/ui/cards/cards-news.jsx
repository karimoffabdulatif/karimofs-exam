import Image from "next/image";
import Data from "../../../public/Data_Icon.svg";
import Eye from "../../../public/Eye_Icon.svg";

const Index = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div>
      <div className="w-[560px] bg-white rounded-lg">
        <p className="w-[462px] ml-[35px] text-[32px] font-semibold pt-[38px]">
          Как правильно выбрать эллиптический тренажер?
        </p>
        <p className="text-[16px] w-[454px] ml-[35px] opacity-70 pt-[9px]">
          Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки. Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...
        </p>
        <div className="flex gap-[39px] pt-[100px] pb-[45px] ml-[35px]">
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
