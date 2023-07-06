import Image from "next/image";
import React from "react";
import Title  from "./ui/Title";
    
export const Carousel = () => {
  return (
    <div className="h-[calc(100vh_-_80px)] w-full container mx-auto">
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="relative h-full w-full">
          <Image
            src="/Images/mermer tek.jpg"
            alt=""
            layout="fill"
                      objectFit="cover"
                      className="opacity-80"
          />
        </div>
      </div>
      <div className="relative z-50 text-black top-48 flex flex-col items-start gap-y-10">
        <Title addClass="text-8xl font-dancing font-bold">Fenne Tasarım Ürünleri</Title>
        <p className="text-lg font-assistant w-3/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptatibus voluptatem
          quod quae doloribus quas natus. Quisquam voluptatum,
        </p>
        <button className="btn-primary">Alışverişe Başla</button>
      </div>
    </div>
  );
};
