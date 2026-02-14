import React, { useContext, useEffect, useState } from 'react'
import { ShopList } from '../Context/ShopList';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [status, SetStatus] = useState('login');
  const { token, setToken, navigate, backendurl } = useContext(ShopList);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (status === 'signup') {
        const response = await axios.post(backendurl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Account Created Successfully');
        } else {
          toast.error(response.data.message);
        }

      } else {
        const response = await axios.post(backendurl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Logged In Successfully');
        } else {
          toast.error(response.data.message);
        }

      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token])

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-xs">
          <h1 className="text-4xl font-bold text-center mb-6" >{status} —</h1>
          <form onSubmit={onSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              {status === 'login' ? ' ' : <input onChange={(e) => setName(e.target.value)} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" required />}
            </div>
            <div className="mb-4">
              <input onChange={(e) => setEmail(e.target.value)} value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
            </div>
            <div className="mb-6">
              <input onChange={(e) => setPassword(e.target.value)} value={password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required />
            </div>
            <div className="flex items-center justify-between mb-6">
              <p className="cursor-pointer inline-block align-baseline  text-sm text-gray-700 hover:text-gray-800" >
                Forgot your password?
              </p>
              {
                status === 'login' ? <p onClick={() => SetStatus('signup')} className=" cursor-pointer inline-block align-baseline text-sm text-gray-700 hover:text-gray-800" >
                  Create Account
                </p>
                  : <p onClick={() => SetStatus('login')} className=" cursor-pointer inline-block align-baseline  text-sm text-gray-700 hover:text-gray-800" >
                    Login Here
                  </p>
              }

            </div>
            <div className="flex items-center justify-center">

              <button className="cursor-pointer bg-black text-white px-6 py-3">{status === 'login' ? 'Sign In' : 'Sign Up'}</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
