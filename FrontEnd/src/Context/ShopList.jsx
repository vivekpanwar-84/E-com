import { createContext, use, useEffect, useState } from 'react';
// import { products } from '../assets/assets.js'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopList = createContext();

const ShopListProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;

    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const [search, setSearch] = useState('');
    const [showsearch, setShowSearch] = useState(false);
    const [cartitem, setCartItem] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
    const navigate = useNavigate()


    const addCart = async (itemId, size) => {

        if (!token) {
            toast.error("Please Login to add to cart");
            navigate('/login');
            return;
        }

        if (!size) {
            toast.error('Select Product Size');
            return;
        }
        let cartData = structuredClone(cartitem);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItem(cartData);

        if (token) {
            try {
                await axios.post(backendurl + '/api/user/add-to-cart', { itemId, size }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartitem) {
            for (const item in cartitem[items]) {
                try {
                    if (cartitem[items][item] > 0) {
                        totalCount += cartitem[items][item];
                    }
                } catch (error) {
                    toast.error(error);
                    return;
                }
            }
        }

        return totalCount;
    }



    const updatecQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartitem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);
    };


    const CartTotal = () => {
        let total = 0
        for (const items in cartitem) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartitem[items]) {
                try {
                    if (cartitem[items][item] > 0) {

                        total += itemInfo.price * cartitem[items][item];

                    }
                } catch (error) {

                }
            }
        } return total;
    };

    const getProductData = async () => {
        try {
            const response = await axios.get(backendurl + '/api/product/list');

            if (response.data.success) {
                setProducts(response.data.products);
            }
            else {
                toast.error('Product Not Found');
            }

        } catch (error) {
            toast.error('Product Not Found');
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.get(backendurl + '/api/user/get-cart', { headers: { token } });
            if (response.data.success) {
                setCartItem(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getProductData();
    }
        , [])

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            getUserCart(token);
        } else {
            localStorage.removeItem('token');
            setCartItem({});
        }
    }, [token])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showsearch, setShowSearch,
        cartitem, addCart,
        getCartCount, updatecQuantity,
        CartTotal, navigate, backendurl,
        token, setToken
    }


    return (

        <ShopList.Provider value={value}>
            {props.children}
        </ShopList.Provider>

    )

}

export default ShopListProvider;
