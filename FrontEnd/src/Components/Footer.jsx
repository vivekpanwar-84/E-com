import React from 'react'

const Footer = () => {
  return (
    <div > 
                    <hr className='w-auto border-none h-[1.5px] bg-gray-700 ' />

        <div className="container mt-20 px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">VENTOR<span className="text-pink-500">.</span></h2>
                <p className="text-gray-600 max-w-xs">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-4">COMPANY</h3>
                <ul className="text-gray-600">
                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Home</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-800">About us</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Delivery</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Privacy policy</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
                <ul className="text-gray-600">
                    <li className="mb-2">+1-000-000-0000</li>
                    <li className="mb-2">valentino@gmail.com</li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className="border-t mt-8 pt-4">
            <p className="text-center text-gray-600">Copyright 2025© valentino.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
