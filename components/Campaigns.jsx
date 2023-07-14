import React from 'react'
import Image from "next/image";
import { BiSolidTruck } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdSystemSecurityUpdateGood } from "react-icons/md";

const Campaigns = () => {
  return (
    <div className=" w-full h-full relative py-5 ">
      <div className="flex container  justify-center items-center gap-x-20 mx-auto py-20 bg-slate-500 shadow-lg shadow-slate-400 h-72 rounded-2xl ">
        <div className="flex flex-col justify-center w-1/3  items-center border-2 gap-5 rounded-lg p-5 text-center ">
          <BsFillBoxSeamFill size={60} className='text-white bg-slate-400 p-2 rounded-md rounded-bl-xl rounded-tr-xl '/>
          <div>
            <h1 className="text-2xl font-bold">Özenli Kargolama</h1>
          </div>
          <div>

              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas mollitia nobis d</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <BiSolidTruck size={40} />
          <div>
            <h1 className="text-2xl font-bold">Hızlı Teslimat</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdSystemSecurityUpdateGood size={40} />
          <div>
            <h1 className="text-2xl font-bold">Güvenli Alışveriş</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns
