import React, { useState } from 'react'
import OutsideClickHandler from "react-outside-click-handler";
import Title from './Title';
import Image from 'next/image';


const Search = ({setIsSearchModal}) => {
    //console.log("localModal",setIsSearchModal);
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black z-10 after:content-[" "] after:w-screen after:h-screen after:bg-sky-200 after:absolute after:top-0 after:left-0 grid place-content-center'>
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-40 w-[400px] h-[400px] bg-slate-50 text-center p-5 rounded-[40px] ">
            <Title addClass="text-5xl font-bold font-dancing">ARA</Title>
            <input
              type="text"
              placeholder="Search.."
              className="border-2 border-slate-500 rounded-[40px] w-full h-10 px-3 mt-5"
            />
            <div>
              <ul>
                <li className="flex items-center justify-between mt-2 bg-slate-300 p-2 rounded-[10px]">
                  <div className="relative ">
                    <Image
                      src="/Images/tepsi-1.jpg "
                      alt=""
                      width={48}
                      height={48}
                      style={{ borderRadius: "100%" }}
                    />
                  </div>
                  <span className="font-bold italic">Tepsiler</span>
                  <span className="font-bold italic">285₺</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Search
