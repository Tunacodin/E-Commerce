import React from "react";
import Image from "next/image";
import { BiSolidTruck } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdSystemSecurityUpdateGood } from "react-icons/md";

const Features = () => {
  return (
    
    <div className=" w-full relative py-5  ">
      <div className="flex container sm:gap-y-2 relative  item-center sm:flex-row flex-col justify-center sm:items-center gap-x-10 mx-auto sm:p-20 p-5 m-5 bg-primary bg-opacity-50 shadow-lg shadow-slate-400 sm:h-80  rounded-2xl font-assistant ">
        <div className="flex gap-y-2 mb-5 sm:m-0 flex-col  hover:scale-105 hover:rounded-3xl hover:border-cyan-300  transition-all justify-center w-full sm:w-1/3 items-center border-t-2 border-b-2 gap-5 border-indigo-200  rounded-md rounded-bl-3xl  rounded-tr-3xl p-5 text-center text-gray-100  ">
          <div>
            <BsFillBoxSeamFill
              size={60}
              className=" bg-slate-400  p-2 rounded-md rounded-bl-xl  rounded-tr-xl "
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-black  ">
              Özenli Kargolama
            </h1>
          </div>
          <div className="text-black  ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem</p>
          </div>
        </div>
        <div className="flex mb-5 gap-y-2 sm:m-0 flex-col  hover:scale-105 hover:rounded-3xl hover:border-cyan-300  transition-all justify-center w-full sm:w-1/3 items-center border-t-2 border-b-2 gap-5 border-indigo-200  rounded-md rounded-bl-3xl  rounded-tr-3xl p-5 text-center text-gray-100 ">
          <BiSolidTruck
            size={60}
            className=" bg-slate-400 p-2 rounded-md rounded-bl-xl  rounded-tr-xl "
          />
          <div>
            <h1 className="text-2xl font-bold text-black  ">Hızlı Kargo</h1>
          </div>
          <div className="text-black ">
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
        <div className="flex gap-y-2 mb-5 sm:m-0 flex-col  hover:scale-105 hover:rounded-3xl hover:border-cyan-300  transition-all justify-center w-full sm:w-1/3 items-center border-t-2 border-b-2 gap-5 border-indigo-200  rounded-md rounded-bl-3xl  rounded-tr-3xl p-5 text-center text-gray-100 ">
          <MdSystemSecurityUpdateGood
            size={60}
            className=" bg-slate-400 p-2 rounded-md rounded-bl-xl  rounded-tr-xl "
          />
          <div>
            <h1 className="text-2xl font-bold text-black  ">Güvenilir Ödeme</h1>
          </div>
          <div className="text-black ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
