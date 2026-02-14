import React, { useContext, useEffect, useState } from 'react'
import { ShopList } from '../Context/ShopList';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {

    const { token, backendurl, products, currency, cartitem, navigate } = useContext(ShopList);
    const [userData, setUserData] = useState(null);
    const [cartData, setCartData] = useState([]);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get(backendurl + '/api/user/profile', { headers: { token } });
            if (response.data.success) {
                setUserData(response.data.userData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            fetchUserProfile();
        }
    }, [token])

    useEffect(() => {
        if (products.length > 0 && cartitem) {
            const tempData = [];
            for (const items in cartitem) {
                for (const item in cartitem[items]) {
                    if (cartitem[items][item] > 0) {
                        const product = products.find((product) => product._id === items);
                        if (product) {
                            tempData.push({
                                _id: product._id,
                                size: item,
                                quantity: cartitem[items][item],
                                productData: product
                            })
                        }
                    }
                }
            }
            setCartData(tempData);
        }
    }, [cartitem, products])


    if (!userData) {
        return <div className='pt-14 text-center'>Loading...</div>
    }

    return (
        <div className='border-t pt-14'>
            <div className='text-2xl mb-3'>
                <h1>My Profile</h1>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg shadow-md mb-8'>
                <p className='text-lg'><strong>Name:</strong> {userData.name}</p>
                <p className='text-lg'><strong>Email:</strong> {userData.email}</p>
            </div>


            <div className='text-2xl mb-3'>
                <h2>My Cart</h2>
            </div>

            <div className='flex flex-col gap-4'>
                {
                    cartData.map((item, index) => (
                        <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                            <div className='flex items-start gap-6'>
                                <img className='w-16 sm:w-20' src={item.productData.image[0]} alt="" />
                                <div>
                                    <p className='text-xs sm:text-lg font-medium'>{item.productData.name}</p>
                                    <div className='flex items-center gap-5 mt-2'>
                                        <p>{currency}{item.productData.price}</p>
                                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                                    </div>
                                </div>
                            </div>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))
                }
                {cartData.length === 0 && <p>Your cart is empty.</p>}
            </div>

        </div>
    )
}

export default Profile
