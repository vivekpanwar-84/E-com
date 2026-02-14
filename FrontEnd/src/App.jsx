import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login.jsx'
import Oders from './Pages/Oders'
import PlaceOder from './Pages/PlaceOder'
import Profile from './Pages/Profile.jsx'
import Navbar from './Components/navbar.jsx'
import Footer from './Components/Footer.jsx'
import Search from './Components/Search.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/oder' element={<Oders />} />
        <Route path='/placeOder' element={<PlaceOder />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
