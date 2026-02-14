import React, { useContext, useEffect, useState } from 'react'
import { ShopList } from '../Context/ShopList'
import CartTotal from '../Components/CartTotal';

const Cart = () => {

  const {  cartitem, products ,updatecQuantity ,navigate } = useContext(ShopList);
  const [cartData, setCartData] = useState([])
  useEffect(() => {
    const tempData = [];
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        if (cartitem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartitem[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartitem]
  )
  return (

    <div>
      {
        cartData.map((item, index) => {

          const productData = products.find((product) => product._id === item._id);

          return (
            <div className="container mx-auto p-4">
              {/* <!-- Cart Items --> */}
              <div className="border-b pb-4 mb-4">
                <div key={index} className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img alt="Men Round Neck Pure Cotton T-shirt" className="w-20 h-20 object-cover mr-4" height="100"
                      src={productData.image[0]} width="100" />
                    <div>
                      <h2 className="text-lg font-semibold">
                        {productData.name}
                      </h2>
                      <p className="text-gray-600">
                        <span className="inline-block border border-gray-300 px-2 py-1 text-sm">
                          {item.size}
                        </span>
                        <span className="ml-2">${productData.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input onChange= {(e)=>e.target.value === ''|| e.target.value === '0' ? null : updatecQuantity(item._id , item.size, Number(e.target.value))} className="border border-gray-300 p-2 w-16 text-center mr-4" type="number"min={1} defaultValue={item.quantity} />
                    <button className="text-gray-600 hover:text-red-600">
                      <i  onClick={ ()=> updatecQuantity(item._id,item.size,0) } className="courser-pointer fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>

              </div>
              
            </div>
          )
          
        })
      }
<CartTotal/>
<div className="max-w-md mx-auto">
<button onClick={()=>navigate('/placeOder')} className="bg-black text-white py-2 px-4 mt-4 w-full">
                  PROCEED TO CHECKOUT
                </button>
</div>

    </div>
  )
}

export default Cart
