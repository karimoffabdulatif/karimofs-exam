"use client";

import { useState } from "react";
import { Card } from '@/components/ui/cards/index';

const Index = () => {
  return (
    <section className="Action container mx-auto px-4 sm:px-6 lg:px-8">
     <div>
     <p className="flex justify-center lg:flex-0 text-[24px] font-semibold lg:flex lg:justify-start lg:text-[36px] lg:font-medium md:text-[24px] sm:text-[32px] md:font-medium pt-[86px] mb-6">
        Продукты
      </p>
      <div className="pl-4 lg:pl-0">
        <Card />
      </div>
     </div>
    </section>
  );
};

export default Index;
