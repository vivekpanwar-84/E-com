import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopList } from '../Context/ShopList'

const navbar = () => {
    const [visible, setVisible] = useState(false);

    const { getCartCount, search, setSearch, showsearch, setShowSearch, navigate, token, setToken, setCartItem } = useContext(ShopList);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItem({});
    }

    // console.log(visible);
    return (
        <div className=' flex item -center justify-between py-5 front-medium'>

            <Link to='/'><span className="text-3xl font-bold">VENTOR<span className="text-pink-500">.</span></span></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray - 700 '>
                <NavLink to='/' className={'flex flex-col item-center gap-1'}>
                    <p>HOME  </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className={'flex flex-col item-center gap-1'}>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className={'flex flex-col item-center gap-1'}>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className={'flex flex-col item-center gap-1'}>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                {/* <a href='/' className="px-4 py-2 border rounded-full text-gray-800 hover:text-gray-600">Admin Panel</a> */}

            </ul>

            <div className=' flex item-center gap-6'>
                {/* <img src={assets.search_icon} className='w-5 cursor-pointer' alt='' /> */}
                <i onClick={() => setShowSearch(true)} className="fas fa-search  w-5 cursor-pointer"></i>
                <div className='group relative '>

                    {/* <img src={assets.profile_icon} className='w-5 cursor-pointer ' alt='' /> */}



                    <i onClick={() => token ? null : navigate('/login')} className="fas fa-user w-5 cursor-pointer"></i>

                    {/* dropdown menu */}
                    {token &&
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded'>
                                <p onClick={() => navigate('/profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                                {/* <p className='cursor-pointer hover:text-black'>Orders</p> */}
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>}
                </div>
                <Link to='/cart' className='relative'>
                    <p className='absolute right-[-5px] bottom-[8px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
                    {/* <img src={assets.cart_icon} className='w-5 min-w-5' alt=''/> */}
                    <i className="fas fa-shopping-cart w-5 cursor-pointer "></i>

                </Link>
                <div >

                    <li className='fas fa-bars  cursor-pointer text-xl sm:invisible' onClick={() => setVisible(true)} ></li>
                </div>

                {/* <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=''/> */}
            </div>


            {/* sider manu for smalll  */}
            <div className={`absolute top-4 right-0 bottom-0 left-4 overflow-hidden bg-white transition-all ${visible ? 'w-full ' : 'w-0'}`}>
                <div>
                    <h1 className='text-3xl cursor-pointer' onClick={() => setVisible(false)}> Back...</h1>
                    <hr className='w-auto border-none h-[1.5px] bg-gray-700 ' />

                    <div className='m-3 '>
                        <NavLink to="/" onClick={() => setVisible(false)}>
                            <p className='mt-3'>HOME</p>

                        </NavLink>
                        <NavLink to='/about' onClick={() => setVisible(false)} >
                            <p className='mt-3'>ABOUT</p>

                        </NavLink>
                        <NavLink to='/contact' onClick={() => setVisible(false)}>
                            <p className='mt-3'>CONTACT</p>

                        </NavLink>
                        <NavLink to='/listings' onClick={() => setVisible(false)}>
                            <p className='mt-3'>LISTINGS</p>

                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar



