"use client";

import { useState } from "react";
import Image from "next/image"; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Bag from "../../../public/Bag.svg"; 
import Case from "../../../public/Shopping_Icon.svg"; 

const Index = () => { 
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return ( 
    <section> 
      <div className='w-[270px] bg-white rounded-t-md relative pt-4'> 
        <FavoriteBorderIcon
          className={`absolute top-3 right-3 cursor-pointer ${isLiked ? "text-red-500" : "text-gray-500"}`}
          onClick={handleLikeClick}
        /> 
       <div className="flex justify-center">
       <Image 
          src={Bag} 
          alt="image" 
          className="mt-[15px] w-[200px]" 
        /> 
       </div>
        <div className="ml-[20px] mt-[10px]"> 
          <p className="text-[17px] font-sans w-[216px] font-medium"> 
            Бутса Nike Mercurial Superfly 8 FG 
          </p> 
          <p className="text-[20px] text-[#FF1313] font-sans font-bold mt-[5px]"> 
            500 000 uzs 
          </p> 
          <span className="text-[16px] line-through text-slate-500"> 
            750 000 
          </span> 
        </div> 
      </div> 
      <div> 
        <button className="flex w-[270px] p-4 rounded-b-md bg-[#FBD029] items-center justify-center font-normal hover:bg-[#dcbb4e]"> 
          <Image src={Case} alt="Shop_Icon" /> 
          Корзина 
        </button> 
      </div> 
    </section> 
  ); 
}; 

export default Index;
