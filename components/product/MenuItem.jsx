import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className="bg-third w-72 relative shadow-2xl text-white font-assistant rounded-lg flex flex-col justify-center items-center hover:scale-105 transition-all">
      <div className="absolute bg-sixth bottom-[168px] left-0">
        <h2>Yeni Ürün</h2>
      </div>

      <div className="relative w-72 h-80 ">
        <Image src="/Images/ikili mermer-2.jpg" layout="fill" className="pointer-events-none" />
      </div>

      <div className="flex flex-col justify-center items-center gap-y-3">
        <h3 className="font-dancing font-bold text-xl pt-4 text-center">
          HARMONY
        </h3>
        <p className="text-center">
          NERGİS Mermer Söz / Nişan / Sunum Tepsisi - Mat Altın Düz Kulplu
          Boyut: 70*28
        </p>
      </div>

      <div className="relative flex flex-row w-72 justify-between items-center p-5">
        <div className="absolute rounded-br-xl w-40 h-12 bottom-2 bg-fourth left-[-18px]"></div>
        <span className="text-lg opacity-80 line-through text-white">346₺</span>
        <span className="font-semibold text-xl text-gray-800 absolute bottom-[7px] ml-9">
          299₺
        </span>
        <button>
          <FaShoppingCart
            size="40px"
            className="font-bold hover:bg-slate-800 hover:text-white transition-all text-gray-900 bg-white rounded-xl p-2"
          />
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
