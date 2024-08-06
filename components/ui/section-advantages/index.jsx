import Image from "next/image";
import Truc from "@/public/Truck_Icons.svg";
import Check from '@/public/Check_Icon.svg'
import Persond from '@/public/Porsend_Icon.svg'
import Doc from '@/public/Doc_Icon.svg'

const Index = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-[80px]">
      <p className="flex justify-center lg:justify-start text-[24px] sm:text-[32px] font-medium pt-[86px] mb-6">Примущества</p>

      <div className="flex flex-wrap gap-6 justify-center sm:justify-between mb-[100px]">
        <div className="bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[22%] rounded-lg group transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="pt-[64px] ml-[72px] relative">
            <div className="w-[26px] h-[26px] bg-[#FBD029] rounded-lg"></div>
            <Image
              src={Truc}
              alt="Truc_icon"
              className="absolute -mt-5 -ml-7"
            />
          </div>
          <p className="w-[200px] font-medium ml-[40px] pt-[56px] pb-[99px] text-[20px]">
            Доставка по всему Узбекистану
          </p>
        </div>

        <div className="bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[22%] rounded-lg group transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="pt-[64px] ml-[72px] relative">
            <div className="w-[26px] h-[26px] bg-[#FBD029] rounded-lg"></div>
            <Image
              src={Check}
              alt="Check_icon"
              className="absolute -mt-5 -ml-7"
            />
          </div>
          <p className="w-[200px] font-medium ml-[40px] pt-[56px] pb-[99px] text-[20px]">
            Высокое качество
          </p>
        </div>

        <div className="bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[22%] rounded-lg group transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="pt-[64px] ml-[72px] relative">
            <div className="w-[26px] h-[26px] bg-[#FBD029] rounded-lg"></div>
            <Image
              src={Persond}
              alt="Persond_icon"
              className="absolute -mt-5 -ml-7"
            />
          </div>
          <p className="w-[200px] font-medium ml-[40px] pt-[56px] pb-[99px] text-[20px]">
            Профессиональный подход
          </p>
        </div>

        <div className="bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[22%] rounded-lg group transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="pt-[64px] ml-[72px] relative">
            <div className="w-[26px] h-[26px] bg-[#FBD029] rounded-lg"></div>
            <Image
              src={Doc}
              alt="Doc_icon"
              className="absolute -mt-5 -ml-7"
            />
          </div>
          <p className="w-[200px] font-medium ml-[40px] pt-[56px] pb-[99px] text-[20px]">
            Оформление документов
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
