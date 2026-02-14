import React, { useContext } from 'react'
import { ShopList } from '../Context/ShopList'
import Title from './Title';

const CartTotal = () => {

    const {CartTotal ,delivery_fee} = useContext(ShopList);

    
  return (
    <div>
      {/* <!-- Cart Totals --> */}
<div className="max-w-md mx-auto">
      <Title text='CART TOTALS'/>
                
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between mb-2">
                    <span>
                      Subtotal
                    </span>
                    <span>
                      ${CartTotal()}.00
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>
                      Shipping Fee
                    </span>
                    <span>
                      ${delivery_fee}.00
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>
                      Total
                    </span>
                    <span>
                      ${CartTotal()=== 0 ? 0: CartTotal()+delivery_fee}.00
                    </span>
                  </div>
                </div>
               
              </div>
    </div>
  )
}

export default CartTotal
