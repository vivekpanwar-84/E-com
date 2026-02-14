import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { ShopList } from '../Context/ShopList'
import { useMatch } from 'react-router-dom'

const PlaceOder = () => {
const {navigate} = useContext(ShopList);
const [method , setMethod] = useState('COD')
  return (
    <div>
      <Title text='DELIVERY INFORMATION'/>
       <div className="container md-10 mx-auto p-4">
   <div className="flex flex-col lg:flex-row justify-between">
    {/* <!-- Left Form Section --> */}
    <div className="w-full lg:w-1/2">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input className="border border-gray-300 p-2 rounded w-full" placeholder="First name" type="First name" required/>
      <input className="border border-gray-300 p-2 rounded w-full" placeholder="Last name" type="Last name"/>
      <input className="border border-gray-300 p-2 rounded w-full md:col-span-2" placeholder="Email address" type="email"/>
      <input className="border border-gray-300 p-2 rounded w-full md:col-span-2" placeholder="Street" type="Street"/>
      <input className="border border-gray-300 p-2 rounded w-full" placeholder="City" type="City"/>
      <input className="border border-gray-300 p-2 rounded w-full" placeholder="State" type="State"/>
      <input className="border border-gray-300 p-2 rounded w-full" placeholder="Zipcode" type="Zipcode"/>
      <input className="border border-gray-300 p-2 rounded w-full" placeholder="Country" type="Country"/>
      <input className="border border-gray-300 p-2 rounded w-full md:col-span-2" placeholder="Phone" type="number"/>
     </div>
    </div>
    {/* <!-- Right Cart Totals Section --> */}
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
     <div className="border-b border-gray-300 pb-4 mb-4">
      <CartTotal/>
     </div>
     
     
    
     <div className="border-b border-gray-300 pb-4 mb-4">
      
      <Title text='PAYMENT METHOD'/>

     </div>
     <div className="flex flex-wrap gap-4 mb-4">
      <label className="flex items-center space-x-2">
       <input onClick={()=> setMethod('stripe')}className="form-radio" name="payment" type="radio"/>
       <span className="flex items-center space-x-2">
        <img alt="Stripe logo" className="h-5" height="20" src="https://storage.googleapis.com/a1aa/image/eQegig42ZsIIVOUUFTxeNAwcwAQ8n2BBN70mAcztZm4.jpg" width="50"/>
        <span>
         stripe
        </span>
       </span>
      </label>
      <label className="flex items-center space-x-2">
       <input onClick={()=> setMethod('Razorpay')} className="form-radio" name="payment" type="radio"/>
       <span className="flex items-center space-x-2">
        <img alt="Razorpay logo" className="h-5" height="20" src="https://storage.googleapis.com/a1aa/image/P1jJz-en-YqN-WoH4nsXSslVzbqG_Ap1LvpcAYxRgq4.jpg" width="50"/>
        <span>
         Razorpay
        </span>
       </span>
      </label>
      <label className="flex items-center space-x-2">
       <input onClick={()=> setMethod('COD')} className="form-radio" name="payment" type="radio"/>
       <span className="flex items-center space-x-2">
        <span className="bg-green-500 rounded-full w-3 h-3 inline-block">
        </span>
        <span>
         CASH ON DELIVERY
        </span>
       </span>
      </label>
     </div>
     <button onClick={()=>navigate('/oder')} className="bg-black text-white py-2 px-4 rounded w-full">
      PLACE ORDER
     </button>
    </div>
   </div>
  </div>
    </div>
  )
}

export default PlaceOder
