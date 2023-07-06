import React, { useState } from 'react'
import OutsideClickHandler from "react-outside-click-handler";
import Title from './Title';
import Image from 'next/image';
import {AiFillCloseCircle} from "react-icons/ai"

const Search = ({setIsSearchModal}) => {
    //console.log("localModal",setIsSearchModal);
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black z-10 after:content-[" "] after:w-screen after:h-screen after:bg-primary after:absolute after:top-0 after:left-0 grid place-content-center'>
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-40  md:w-[700px] md:h-[370px]  bg-slate-50 text-center p-5 rounded-[40px] ">
            <Title addClass="text-5xl font-bold font-dancing">ARA</Title>
            <input
              type="text"
              placeholder="Search.."
              className="border-2 border-secondary rounded-[10px] w-full h-10 px-3 mt-5"
            />
            <div>
              <ul>
                <li className="flex items-center justify-between mt-1  p-2 rounded-[10px] hover:bg-fourth">
                  <div className="relative ">
                    <Image
                      src="/Images/fincan-1.png"
                      alt=""
                      width={48}
                      height={48}
                      style={{ borderRadius: "100%" }}
                    />
                  </div>
                  <span className="font-bold italic">Fincan Seti</span>
                  <span className="font-bold italic">285₺</span>
                </li>
                <li className="flex items-center justify-between  p-2 rounded-[10px] hover:bg-fourth">
                  <div className="relative ">
                    <Image
                      src="/Images/tepsi.png "
                      alt=""
                      width={48}
                      height={48}
                      style={{
                        borderRadius: "100%"
                      }}
                    />
                  </div>
                  <span className="font-bold italic">İsim Baskılı Tepsi</span>
                  <span className="font-bold italic">285₺</span>
                </li>
              </ul>
              <button
                className="absolute top-5 right-5"
                onClick={() => setIsSearchModal(false)}
              >
                <AiFillCloseCircle
                  className="hover:text-primary
                transition-all "
                  size={20}
                />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Search
