import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";
export const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 6000,
      autoplay: true,
      pauseOnHover: true,
      arrows: false,


      customPaging: (i) => (
        <div className="w-4 h-4 border ml-5 bg-white rounded-full mt-10 ">
          
        </div>
      )
    };
  return (
    <div className="h-screen w-full container mx-auto">
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="relative h-screen w-full ">
          <Image
            src="/Images/Tahta mermer.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="opacity-100 "
          />
        </div>
      </div>
      <Slider {...settings}>
        <div className="mt-40 ">
          <div className=" text-white top-48 flex flex-col items-start gap-y-10 px-5 ">
            <Title addClass="md:text-7xl text-5xl font-dancing font-bold ">
              Fenne Tasarım Ürünleri
            </Title>
            <p className="md:text-xl top-48 text-md font-assistant w-3/4 sm:w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptatibus
              voluptatem quod quae doloribus quas natus. Quisquam
              voluptatum,lore
            </p>
          </div>
        </div>
        <div className="mt-40 ">
          <div className=" text-white top-48 flex flex-col items-start gap-y-10 px-5 ">
            <Title addClass="md:text-7xl text-5xl font-dancing font-bold ">
              Fenne Tasarım Ürünleri
            </Title>
            <p className="md:text-xl top-48 text-md font-assistant w-3/4 sm:w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptatibus
              voluptatem quod quae doloribus quas natus. Quisquam
              voluptatum,lore
            </p>
          </div>
        </div>
      </Slider>
      <button className="btn-primary ml-5 text-slate-50 relative mt-[85px]">
        Alışverişe Başla
      </button>
    </div>
  );
};
