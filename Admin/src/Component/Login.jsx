import React from 'react'
import { useState } from 'react'
import { backEndurl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
       try {
        e.preventDefault();
        console.log(backEndurl);

        const response = await axios.post(backEndurl + '/api/user/adminlogin', { email, password });
        // console.log(response);
        if (response.data.success) {
           
          setToken(response.data.token) // Set the token in local storage

        } else {
            toast.error(response.data.message)
        }
       } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
       }


        // Perform login logic here (e.g., API call)
        // console.log('Email:', email);
        // console.log('Password:', password);

        // Clear the form fields
        // e.target.email.value = '';
        // e.target.password.value = '';
    }

    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="your@email.com" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-900 cursor-pointer" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
