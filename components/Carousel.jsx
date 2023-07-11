import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

export const Carousel = () => {
  return (
    <div className="h-screen w-full container mx-auto ">
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="relative h-full w-full">
          <Image
            src="/Images/Tahta mermer.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="opacity-100"
          />
        </div>
      </div>
      <div className="relative text-white top-28  flex flex-col items-start gap-y-10 px-5 ">
        <Title addClass="md:text-7xl text-5xl font-dancing font-bold ">
          Fenne Tasarım Ürünleri
        </Title>
        <p className="md:text-xl text-md font-assistant w-3/4 sm:w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptatibus voluptatem
          quod quae doloribus quas natus. Quisquam voluptatum,lore
        </p>
        <button className="btn-primary ">Alışverişe Başla</button>
      </div>
    </div>
  );
};
