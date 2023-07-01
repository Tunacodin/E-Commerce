import React from "react";
import Logo from "../ui/Logo";
import { AiOutlineUser } from "react-icons/ai";
import {
  FaRegUser,
  FaCartShopping,
  FaUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
const Header = () => {
  return (
    <div className="h-[5rem] bg-primary">
      <div className="container mx-auto text-white flex justify-between items-center h-full ">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-3 transition-all">
            <li className="px-[5px] py-[20px] font-assistant  font-medium hover:text-orange-200 hover cursor-pointer">
              <a href="">ANASAYFA</a>
            </li>
            <li className="px-[5px] py-[20px] font-assistant font-medium hover:text-orange-200 hover cursor-pointer">
              <a href="">KATEGORİ</a>
            </li>
            <li className="px-[5px] py-[20px] font-assistant font-medium hover:text-orange-200 hover cursor-pointer">
              <a href="">HAKKIMIZDA</a>
            </li>
            <li className="px-[5px] py-[20px] font-assistant font-medium hover:text-orange-200  hover cursor-pointer">
              <a href="">İLETİŞİM</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center justify-center">
          <a href="">
            <FaUser className="h-7" />
          </a>
          <a href="">
            <FaShoppingCart className="h-[20px]" />
          </a>
          <a href="">
            <FaSearch />
          </a>
          <button className="btn-primary font-assistant text-[16px] font-medium hover:bg-white hover:text-teal-700 transition-all ">
            Online Sipariş
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
