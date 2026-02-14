import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './Component/Navbar.jsx'
import Sidebar from './Component/Sidebar.jsx'
import Login from './Component/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import AddItems from './assets/pages/Add.jsx'
import ListItems from './assets/pages/List.jsx'
import Orders from './assets/pages/Orders.jsx'
import { ToastContainer, toast } from 'react-toastify';

export const backEndurl = import.meta.env.VITE_BACKEND_URL;
// console.log(backEndurl);


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])


  return (
    <div className=' min-h-screen'>
      <ToastContainer />
      {
        token === '' ? <Login setToken={setToken} /> : <>

          <Navbar  setToken={setToken} />
          <hr></hr>
          <div className='flex ' >
          <Sidebar />
          <div className='w-full min-h-screen'>

            <Routes>
              <Route path='/' element={<AddItems token={token} />} />
              <Route path="/add" element={<AddItems token={token} />} />
              <Route path="/list" element={<ListItems token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
            </Routes>
          </div>
          </div>
        </>
      }

    </div>
  )
}

export default App
