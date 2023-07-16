import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className="mx-auto p-15 w-full flex flex-col items-center ">
      <Title addClass="text-[40px] font-bold text-white mt-20"> KATALOG </Title>
      <div className="flex justify-center items-center gap-x-5 w-full lg:rounded-3xl text-white sm:flex-row flex-col gap-y-1 my-4 ">
        <button className="btn-primary !sm:rounded-none">Tüm Ürünler</button>
        <button className="btn-primary !sm:rounded-none">Setler</button>
        <button className="btn-primary !sm:rounded-none">Ahşap </button>
        <button className="btn-primary !sm:rounded-none">İşlemeler</button>
        <button className="btn-primary !sm:rounded-none">Aksesuar</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      
    </div>
  );
}

export default MenuWrapper
