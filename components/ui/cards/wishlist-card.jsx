'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import CardButton from '@/public/Shopping_Icon.svg';
import { like } from '@/sevice/wishlist.sevice';
import { getWishlistLike } from '@/sevice/wishlist.sevice';
import { useRouter } from 'next/navigation';
import Img1 from '@/public/Bag.svg';

const Index = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const getData = async () => {
    try {
      const response = await getWishlistLike(1, 4);
      if (response?.products) {
        const productsWithLikeState = response.products.map((product) => ({
          ...product,
          liked: true,
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

  const moveSingle = (productId) => {
    router.push(`/products/${productId}`);
  };  

  const handleLike = async (productId) => {
    try {
      const response = await like(productId);
      if (response) {
        const productsWithLikeState = data.map((product) =>
          product.product_id === productId
            ? { ...product, liked: !product.liked }
            : product
        );
        setData(productsWithLikeState);
      }
      window.location.reload()
    } catch (error) {
      console.error('Error liking the product:', error);
    }
  };

  return (
    <div className="flex-wrap sm:flex sm:justify-between w-full mb-[40px] lg:mb-0 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="py-[15px] px-[20px] flex flex-col gap-3 sm:w-[300px] w-full rounded-md bg-[#fff] cursor-pointer"
          onClick={() => moveSingle(item.id)}
        >
          <div className="relative w-full h-[200px]">
            <Image
              src={Array.isArray(item.image_url) && item.image_url[0] ? item.image_url[0] : Img1}
              alt="product image"
              className="object-cover rounded-md"
              fill
              style={{ borderRadius: '8px' }}
            />
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(item.product_id);
              }}
              className="absolute top-2 right-2 p-1"
              style={{
                minWidth: 'unset',
                padding: '0',
                color: item.liked ? 'red' : 'white',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              {item.liked ? (
                <FavoriteIcon style={{ color: 'red', fontSize: 24 }} />
              ) : (
                <FavoriteBorderIcon style={{ color: 'black', fontSize: 24 }} />
              )}
            </Button>
          </div>
          <p className="text-lg text-black font-normal">{item.product_name.slice(0, 25)}...</p>
          <div>
            <p className="text-lg text-[#000] font-bold">{item.cost}</p>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FBD029',
              color: '#1F1D14',
              '&:hover': {
                backgroundColor: '#FBD029',
              },
              height: '40px',
              borderRadius: '5px',
              minWidth: 'max-content',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <Image src={CardButton} alt="CardButton" width={20} height={20} />
            Корзина
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Index;