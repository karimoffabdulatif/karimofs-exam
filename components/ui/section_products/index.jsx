"use client";

import { useState } from "react";
import { Card } from "../cards";

const products = [
  { id: 1, title: 'Product 1', description: 'Description for Product 1' },
  { id: 2, title: 'Product 2', description: 'Description for Product 2' },
  { id: 3, title: 'Product 3', description: 'Description for Product 3' },
  { id: 4, title: 'Product 4', description: 'Description for Product 4' },
  { id: 5, title: 'Product 5', description: 'Description for Product 5' },
  { id: 6, title: 'Product 6', description: 'Description for Product 6' },
  { id: 7, title: 'Product 7', description: 'Description for Product 7' },
  { id: 8, title: 'Product 8', description: 'Description for Product 8' },
];

const Index = () => {
  const [visibleProducts, setVisibleProducts] = useState(4); 

  const handleShowMore = () => {
    setVisibleProducts(products.length);
  };

  return (
    <section className="Action container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-[24px] sm:text-[32px] font-medium pt-[86px] mb-6">Продукты</p>
      <div className="flex flex-wrap justify-between pl-[35px] gap-4">
        {products.slice(0, visibleProducts).map(product => (
          <div key={product.id} className="w-full sm:w-[48%] lg:w-[30%] xl:w-[22%]">
            <Card title={product.title} description={product.description} />
          </div>
        ))}
      </div>
 
      <div className="flex items-center justify-center pt-6 pb-6">
        {visibleProducts < products.length && (
          <button
            onClick={handleShowMore}
            className="w-[209px] p-[15px] border-[#FBD029] hover:bg-yellow-300 transition-all hover:font-semibold font-medium border-[3px] rounded-[5px] flex items-center justify-center"
          >
            Показать ещё
          </button>
        )}
      </div>
    </section>
  );
};

export default Index;
