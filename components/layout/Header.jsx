import React, { useState } from "react";
import Logo from "../ui/Logo";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu,GiCancel } from "react-icons/gi";
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
  const [isMenuModal, setIsMenuModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-[74px]  bg-third  ">
      <div
        className={`container mx-auto text-white flex justify-between items-center h-full ${
          isMenuModal === true && "mt-[-40px]"
        }`}
      >
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute z-40 sm:z-0 top-0 left-0 place-content-center sm:w-auto sm:h-auto w-full h-screen sm:text-white sm:bg-transparent bg-white sm:flex hidden text-black ${
            isMenuModal === true && "!grid place-content-center "
          }`}
        >
          <ul className="flex gap-x-3 sm:flex-row flex-col items-center transition-all">
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
          {isMenuModal && (
            <button
              className="absolute top-4 right-4 text-black z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className="transition-all" />
            </button>
          )}
        </nav>

        <div className="flex gap-x-4 items-center justify-center ">
          <a href="">
            <FaUser className="h-7  hover:text-sixth transition-all" />
          </a>

          <a href="">
            <FaShoppingCart className="h-7 hover:text-sixth transition-all" />
          </a>

          <button onClick={() => setIsSearchModal(!isSearchModal)}>
            <FaSearch className="h-7  hover:text-sixth transition-all" />
          </button>

          <a href="" className="md:inline-block hidden sm:hidden ">
            <button className="btn-primary "> Online Sipariş</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl  hover:text-sixth transition-all" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
