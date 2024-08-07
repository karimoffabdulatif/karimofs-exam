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
    <section className="container">
      <p className="flex justify-center text-[24px] font-semibold md:text-[32px] lg:flex lg:justify-start lg:font-medium pt-[86px] mb-6">Полезное</p>
      <div className=" flex gap-[24px] justify-between my-6 max-lg:grid max-lg:grid-cols-1 max-lg:justify-items-center ">
        <div className="max-w-[608px] shadow-xl w-full bg-white rounded-lg p-9">
          <h3 className="text-[18px] text-center mb-[15px]  lg:text-[32px] lg:text-start lg:font-semibold ">
            Как правильно выбрать эллиптический тренажер?
          </h3>
          <p className="text-[16px]  opacity-70 pt-[9px]">
            Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...
          </p>
          <div className="flex gap-[39px] pt-[160px]">
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
        <div className="max-w-[608px] w-full">
          <div className=" shadow-xl bg-white py-[18px] px-6 flex justify-center rounded-lg">
            <Image src={Bicycle} alt="Img_Treyn" className="max-w-[508px] " />
          </div>
          <button className="shadow-xl w-full text-[16px] mt-[15px] rounded-md bg-white p-4 hover:bg-yellow-300 transition-all">
            Посмотрет все
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
