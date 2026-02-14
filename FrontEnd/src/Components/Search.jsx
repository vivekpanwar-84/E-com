import React, { useContext, useEffect, useState } from 'react'
import { ShopList } from '../Context/ShopList'
import { useLocation } from 'react-router-dom';

const Search = () => {
    const {  search , setSearch , showsearch , setShowSearch} = useContext(ShopList);
    const [visible ,setVisible] = useState(true);

    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection') ){
            setVisible(true);            
        }
        else{
            setVisible(false);
        }
    },[location])


  return showsearch && visible ? (
    <div>
      <div className='mb-5'>
      <div className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <i  className="fas fa-search  w-5 cursor-pointer"></i>
           
        </div>
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-black focus:border-black" placeholder="Search Mockups, Logos..." required />
        <i  onClick={()=>setShowSearch(false)} className="fas fa-times text-gray-900  absolute  end-8 bottom-5 cursor-pointer "/>

        {/* <i onClick={()=>setShowSearch(false)} type="submit" className=" fas fa-time cursor-pointer text-black absolute end-2.5 bottom-2.5   text-sm px-4 py-2"/> */}
    </div>
</div>
      </div>

    </div>
  ):null
}

export default Search
