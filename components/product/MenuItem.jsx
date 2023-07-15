import React from 'react'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa';

const MenuItem = () => {
  return (
    <div
      className="bg-secondary w-full
    "
    >
      <div className='border-2 flex flex-col w-1/3 justify-center items-center'>
        <div className="relative w-72 h-72 z-50 bg-black m-3">
          <Image src="/Images/Tepsiler/altın.jpg" layout="fill" />
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <h3 className='font-assistant text-lg font-bold p-2'>Ürün 1</h3>
                  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa modi ratione sequi facere officiis nostrum! Optio aspernatur quia ipsam neque commodi laboriosam nemo dolore doloremque voluptates accusamus. Facere, quisquam excepturi?</p>
              </div>
              <div className='flex justify-evenly items-center w-full'>
                  <span>$20</span>
                  <button className=' '>
                      <FaShoppingCart/>
                  </button>
              </div>
      </div>
      
    </div>
  );
}

export default MenuItem
