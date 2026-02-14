import React, { useContext } from 'react'
import { ShopList } from '../Context/ShopList'
import Title from '../Components/Title';

const Oders = () => {
const {products} = useContext(ShopList);

  return (
    <div>
      <div>
        <Title text='Your Oders'/>
      </div>
      {
        products.slice(1,4).map((item , index)=>(
          <div>
             <div key={index} className="max-w-4xl mx-auto p-4">
   <div className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-sm">
    <div className="flex items-center space-x-4">
     <img alt="Boy wearing a round neck pure cotton t-shirt" className="w-20 h-20 object-cover rounded" height="100" src={item.image[0]} width="100"/>
     <div>
      <h2 className="text-lg font-semibold">
       {item.name}
      </h2>
      <p className="text-gray-700">
       ${item.price}
       <span className="ml-2">
        Quantity: 1
       </span>
       <span className="ml-2">
        Size: M
       </span>
      </p>
      <p className="text-gray-500">
       Date: Tue Mar 25 2025
      </p>
      <p className="text-gray-500">
       Payment: COD
      </p>
     </div>
    </div>
    <div className="flex items-center space-x-4 mt-4 md:mt-0">
     <span className="text-green-500 flex items-center">
      <i className="fas fa-circle text-xs mr-1">
      </i>
      Order Placed
     </span>
     <button className="border border-gray-300 px-4 py-2 rounded text-gray-700">
      Track Order
     </button>
    </div>
   </div>
  </div>
            </div>
        ))
      }
    </div>
  )
}

export default Oders
