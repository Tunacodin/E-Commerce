import React, { useState } from "react";
import Logo from "../ui/Logo";
import { AiOutlineUser } from "react-icons/ai";
import {
  FaRegUser,
  FaCartShopping,
  FaUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Search from "../ui/Search";
const Header = () => {
      const [isSearchModal, setIsSearchModal] = useState(false);

  return (
    <div className="h-[5rem] bg-primary">
      <div className="container mx-auto text-white flex justify-between items-center h-full ">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-3 transition-all">
            <li className="px-[5px] py-[20px] font-assistant  font-medium  hover:text-sixth hover cursor-pointer transition-all">
              <a href="">ANASAYFA</a>
            </li>
            <li className="px-[5px] py-[20px] font-assistant font-medium  hover:text-sixth hover cursor-pointer transition-all">
              <a href="">KATEGORİ</a>
            </li>
            <li className="px-[5px] py-[20px] font-assistant font-medium  hover:text-sixth hover cursor-pointer transition-all">
              <a href="">HAKKIMIZDA</a>
            </li>
            <li className="px-[5px] py-[20px] font-assistant font-medium  hover:text-sixth cursor-pointer transition-all">
              <a href="">İLETİŞİM</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center justify-center ">

          <button>
            <FaUser className="h-7  hover:text-sixth transition-all" />
          </button>
          
          <button>
            <FaShoppingCart className="h-7 hover:text-sixth transition-all" />
          </button>

          <button onClick={() => setIsSearchModal(!isSearchModal)}>
            <FaSearch className="h-7  hover:text-sixth transition-all" />
          </button>

          <button className="btn-primary font-assistant text-[16px] font-medium hover:bg-white hover:text-teal-700 transition-all ">
            Online Sipariş
          </button>

        </div>

      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
