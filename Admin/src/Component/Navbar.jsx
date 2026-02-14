import React from 'react'

const Navbar = ({setToken}) => {
  return (
    <div>
     
      
          <header className="flex justify-between items-center p-4 bg-gray-50">
        <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">VENTOR<span className="text-pink-500">.</span></h1>
            <span className="text-sm text-pink-500 ml-2">ADMIN PANEL</span>
        </div>
        <button onClick={()=>setToken('')} className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-black">Logout</button>
    </header>
    </div>
  )
}

export default Navbar
