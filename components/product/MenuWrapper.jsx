import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className='container border-2 mx-auto flex flex-col items-center h-[500px]'>
          <Title addClass="text-[40px] font-bold mb-10" >KATALOG</Title>
          <div className='flex gap-x-5 text-white sm:flex-row flex-col gap-y-1 '>
              <button className='btn-primary '>Tüm Ürünler</button>
              <button className='btn-primary '>Setler</button>
              <button className='btn-primary '>Ahşap </button>
              <button className='btn-primary '>Aksesuar</button>
              <button className='btn-primary '>İşlemeler</button>
          </div>
          <MenuItem/>
    </div>
  )
}

export default MenuWrapper
