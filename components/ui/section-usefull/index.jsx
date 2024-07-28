import Image from "next/image";
import Data from "../../../public/Data_Icon.svg";
import Eye from "../../../public/Eye_Icon.svg";
import Bicycle from "../../../public/Treyn_Bycicle.svg"; // Corrected import

const Index = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <section className="container mx-auto px-10">
      <p className="text-[32px] font-medium pt-[86px] mb-6">Полезное</p>
      <div className="Cards flex gap-[24px]">
        <div className="w-[688px] bg-white rounded-lg">
          <p className="w-[462px] ml-[35px] text-[32px] font-semibold pt-[38px]">
            Как правильно выбрать эллиптический тренажер?
          </p>
          <p className="text-[16px] w-[454px] ml-[35px] opacity-70 pt-[9px]">
            Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...
          </p>
          <div className="flex gap-[39px] pt-[125px] ml-[35px]">
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
        <div>
          <div className="w-[638px] bg-white h-[350px] rounded-lg">
            <Image src={Bicycle} alt="Img_Treyn" className="pt-[18px] ml-[145px]" />
          </div>
          <button className="w-[638px] text-[16px] mt-[15px] rounded-md bg-white p-4 hover:bg-yellow-300 transition-all">
            Посмотрет все
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
