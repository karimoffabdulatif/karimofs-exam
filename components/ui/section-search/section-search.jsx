import Image from "next/image";
import Category_Icon from "../../../public/Search_Section_Icon.svg";
import Search_Icon from "../../../public/Icon_Search.svg";
import User_Icon from "../../../public/User_Icon.svg";
import Like_Icon from "../../../public/Like_icon.svg";
import Shop_Icon from "../../../public/Shopping_Icon.svg";

const Index = () => {
  return (
    <div className="bg-white w-full h-[80px]">
      <div className="container mx-auto px-10 ">
        <div className="flex gap-[100px]">
          <div className="mt-[13px] flex gap-2">
            <button className="bg-black w-[184px] h-[54px] text-[20px] hover:bg-yellow-300 hover:text-black transition-all gap-2 text-white rounded-[5px] flex items-center justify-center space-x-2">
              <Image
                src={Category_Icon}
                alt="Icon"
                className="hover:text-black"
              />
              Каталог
            </button>

            <div className="flex">
              <input
                type="Search"
                placeholder="Поиск"
                className="bg-[#F2F2F2] text-[#1F1D14] w-[502px] h-[54px] rounded-[5px] p-5"
              />
              <Image
                src={Search_Icon}
                alt="Search_Icon"
                className="ml-[-40px]"
              />
            </div>
          </div>

          <div className="mt-[13px] flex ">
            <div className="flex mt-[8px] gap-[13px] ml-[100px]  ">
              <button className="bg-[#F2F2F2] w-11 h-11 rounded-[3px] flex items-center justify-center hover:bg-yellow-300 transition-all ">
                <Image src={User_Icon} alt="User_Icon" />
              </button>

              <button className="bg-[#F2F2F2] w-11 h-11 rounded-[3px] flex items-center justify-center hover:bg-yellow-300 transition-all">
                <Image src={Like_Icon} alt="Like_Icon" />
              </button>
            </div>

            <button className="bg-[#F2F2F2] ml-[25px] w-[165px] h-[53px] rounded-[3px] flex items-center justify-center size-5 mt-[2px] hover:bg-yellow-300 transition-all">
              <Image src={Shop_Icon} alt="Shopping_Icon" />
              Корзина
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
