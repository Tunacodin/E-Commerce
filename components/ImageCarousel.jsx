import React from 'react'
import Image from 'next/image'
const ImageCarousel = () => {
  return (
    <div className="w-full flex z-50 mx-auto justify-center items-center p-12">
      <div className="carousel carousel-center max-w-md p-2 space-x-4 bg-neutral rounded-box ">
        <div className="relative carousel-item w-[320px] h-[520px] ">
          <Image
            src="/Images/Tahta mermer.jpg"
            className="rounded-box pointer-events-none"
            layout="fill"
          />
        </div>
        <div className="relative carousel-item w-[320px] h-[520px] ">
          <Image
            src="/Images/Tahta mermer.jpg"
            className="rounded-box pointer-events-none"
            layout="fill"
          />
        </div>
        <div className="relative carousel-item w-[320px] h-[520px] ">
          <Image
            src="/Images/Tahta mermer.jpg"
            className="rounded-box pointer-events-none"
            layout="fill"
          />
        </div>
        <div className="relative carousel-item w-[320px] h-[520px] ">
          <Image
            src="/Images/Tahta mermer.jpg"
            className="rounded-box pointer-events-none"
            layout="fill"
          />
        </div>
      
        
      </div>
    </div>
  );
}

export default ImageCarousel
