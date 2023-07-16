import React from 'react'
import ImageCarousel from '../../components/ImageCarousel'

const index = () => {
  return (
    <div className="flex w-screen bg-slate-200 h-full flex-cols-1 sm:flex-cols-2 justify-center items-center mt-44">
      <div className="bg-pink justify-center items-center w-1/3 ">
        <ImageCarousel />
      </div>

      <div className="bg-white w-full h-full">
        <div className="bg-black h-3/4 w-1/3">
          <div>
                      <h1 className="font-dancing text-3xl text-white ">Mermer Ürünü</h1>
                      <h2> 349₺ </h2>
                  </div>
        <div>
                     
        </div>
        </div>
      </div>
    </div>
  );
}

export default index
