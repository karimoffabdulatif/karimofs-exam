"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Bag from "@/public/Bag.svg";
import Case from "@/public/Shopping_Icon.svg";
import { getProductApi } from "@/sevice/product.service";
import { Box } from "@mui/material";
import Link from "next/link";

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState();

  const getData = async () => {
    try {
      const response = await getProductApi(4, 1);
      if (response.status === 200) {
        const productsWithLikeState = response.data.products.map((product) => ({
          ...product,
          liked: false,
        }));
        setData(productsWithLikeState);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLikeClick = (productId) => {
    setData((prevData) =>
      prevData.map((product) =>
        product.id === productId ? { ...product, liked: !product.liked } : product
      )
    );
  };

  return (
    <section className=" mb-[18px]">
    <div className="flex flex-wrap justify-between gap-4 ">
    {data.map((product) => (
        <div key={product.id} className="w-[270px] bg-white rounded-t-md relative pt-4 mb-4">
          <FavoriteBorderIcon
            className={`absolute top-3 right-3 cursor-pointer ${product.liked ? "text-red-500" : "text-gray-500"}`}
            onClick={() => handleLikeClick(product.id)}
          />
          <div className="flex justify-center">
            <Box
              sx={{
                mt: '15px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <div className="relative w-[200px] h-[170px]">
               <Link href={`/products/${product.product_id}`}>
               <Image
                  src={product.image_url[1] || Bag}
                  alt="Product Image"
                  className="object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                  layout="fill"
                />
               </Link>
              </div>
            </Box>
          </div>
          <div className="ml-[20px] mt-[10px]">
            <p className="text-[17px] h-[50px] mb-[20px] font-sans w-[216px] font-medium">
              {product.product_name}
            </p>
            <p className="text-[20px] mb-[20px] text-[#FF1313] font-sans font-bold mt-[5px]">
              {product.cost} <span className="text-[18px] font-medium">uzs</span>
            </p>
          </div>
          <button className="korzinka flex w-[270px] p-4 rounded-b-md bg-[#FBD029] items-center justify-center font-normal hover:bg-[#dcbb4e]">
            <Image src={Case} alt="Shop_Icon" />
            Корзина
          </button>
        </div>
      ))}
      {loading && <div className="flex justify-center mt-4">Loading...</div>}
    </div>
    </section>
  );
};

export default Index;
