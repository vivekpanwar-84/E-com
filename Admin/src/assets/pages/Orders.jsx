import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backEndurl } from '../../App'
import { toast } from 'react-toastify'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {

      const response = await axios.post(backEndurl + '/api/order/list', {}, { headers: { Authorization: `Bearer ${token}` } })
      if (response.data.success) {
        if (response.data.orders.length > 0) {
          setOrders(response.data.orders);
        } else {
          // DUMMY DATA FALLBACK as per user request
          setOrders([
            {
              _id: "dummy_1",
              items: [
                { name: "Cotton T-Shirt", quantity: 2, size: "L" },
                { name: "Denim Jeans", quantity: 1, size: "M" }
              ],
              amount: 120,
              address: {
                firstName: "John",
                lastName: "Doe",
                street: "123 Main St",
                city: "New York",
                country: "USA",
                zipcode: "10001",
                phone: "1234567890"
              },
              status: "Order Placed",
              paymentMethod: "COD",
              payment: false,
              date: Date.now()
            },
            {
              _id: "dummy_2",
              items: [
                { name: "Sneakers", quantity: 1, size: "9" }
              ],
              amount: 85,
              address: {
                firstName: "Jane",
                lastName: "Smith",
                street: "456 Oak Ave",
                city: "Los Angeles",
                country: "USA",
                zipcode: "90001",
                phone: "0987654321"
              },
              status: "Packing",
              paymentMethod: "Stripe",
              payment: true,
              date: Date.now() - 86400000
            }
          ])
        }
      } else {
        toast.error(response.data.message)
      }


    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backEndurl + '/api/order/status', { orderId, status: event.target.value }, { headers: { Authorization: `Bearer ${token}` } })
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <i className="fas fa-box-open text-3xl text-gray-400"></i>
              <div>
                <div>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return <p className='py-0.5' key={index}> {item.name} x {item.quantity} <span> {item.size} </span> </p>
                    }
                    else {
                      return <p className='py-0.5' key={index}> {item.name} x {item.quantity} <span> {item.size} </span> ,</p>
                    }
                  })}
                </div>
                <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
                <div>
                  <p>{order.address.street + ","}</p>
                  <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <div>
                <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
                <p className='mt-3'>Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className='text-sm sm:text-[15px]'>${order.amount}</p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='p-2 font-semibold'>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
