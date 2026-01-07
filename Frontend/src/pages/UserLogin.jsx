import React, { useState,  useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  const { user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, newUser);
    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token);
      navigate('/home')
    }
    console.log(newUser);
    setEmail(' ')
    setPassword(' ')
  }

  return (
    <div className='w-full h-screen p-6 flex flex-col justify-between'>
      <div>
      <img className='w-40 mb-10' src="https://imgs.search.brave.com/ktp1hcKXCZ7tgiW2FCckgpuC0IlUa7P9Fnpj8ZiEfYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nby10/ZXh0LXBuZy0xLnBu/Zw" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
      <h3 className='text-lg font-semibold mb-3'>What's your Email ? </h3>
      <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='px-4 py-3 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-full font-semibold' required type="email" placeholder='example@example.com' />
      <h2 className='text-lg mt-3 mb-3 font-semibold'>Enter Password</h2>
      <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} className='block mb-3 border-1 placeholder:text-ml px-4 py-3 rounded w-full bg-[#eeeeee] mb-7 font-semibold' required type="text" placeholder='Password' />
      <button className='bg-[#111] px-6 py-2 rounded text-ml w-full text-white text-lg font-semibold'>Login</button>
      </form>
      <p className='font-semibold mt-3 text-center'>New here ? <Link to="/signup" className=' text-blue-600 font-bold'> Create a new account</Link></p>

      </div>
      <div>
        <Link to="/Captain-login" className='bg-[#10b461] flex items-center justify-center px-6 py-3 rounded text-ml w-full text-white text-lg font-semibold mt-4'>Sign in as Captain</Link>
      </div>

    </div>
  )
}

export default UserLogin
