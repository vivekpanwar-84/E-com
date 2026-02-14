import React, { useContext, useEffect, useState } from 'react'
import { ShopList } from '../Context/ShopList.jsx'
import Title from './Title.jsx';
import LatestItem  from './LatestItem.jsx';

const LatestList = () => {

    const {products} = useContext(ShopList);


    const [ latestItem, setLatestItem] = useState([]);
    const [ BestItem, setBestItem] = useState([]);
    
    useEffect(()=>{
        setLatestItem(products.slice(0,8));
    },[products])

    useEffect(()=>{
        setBestItem(products.slice(10,14));
    },[products])


  return (
    <>
    <div>
    <Title text='LATEST COLLECTIONS'/>
    </div>
    <div className="container mx-auto px-4 py-8">
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
   {
       latestItem.map((item , index)=>(
           <LatestItem key={index} id={item._id} img={item.image} name ={ item.name} price={item.price} />
        ))
    }
    </div>
   </div>

   <div>
   <Title text='BEST SELLERS'/>
   </div>

   <div className="container mx-auto px-4 py-8">
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
   {
       BestItem.map((item , index)=>(
           <LatestItem key={index} id={item._id} img={item.image} name ={ item.name} price={item.price} />
        ))
    }
    </div>
   </div>
</>
  )
}

export default LatestList
