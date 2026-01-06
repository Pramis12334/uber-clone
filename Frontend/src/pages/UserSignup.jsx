import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
 const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')
  const [firstname, setFirstName] = useState(' ')
  const [lastname, setLastName] = useState(' ')
  const [userData, setUserData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username:{
      firstname: firstname,
      lastname: lastname
      },
      email: email,
      password: password
    })
    console.log(userData);
    setFirstName(' ')
    setLastName(' ')
    setEmail(' ')
    setPassword(' ')
  }
  return (
    <div className='w-full h-screen p-6 flex flex-col justify-between'>
      <div>
      <img className='w-40' src="https://imgs.search.brave.com/ktp1hcKXCZ7tgiW2FCckgpuC0IlUa7P9Fnpj8ZiEfYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nby10/ZXh0LXBuZy0xLnBu/Zw" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className='text-lg font-semibold mb-3'>What's your Name ? </h3>
        <div className='flex gap-4 mb-3'>
          
      <input value={firstname} onChange={(e) => {setFirstName(e.target.value)}} className='px-4 py-3 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-1/2 font-semibold' required type="text" placeholder='firstname' />
      <input value={lastname} onChange={(e) => {setLastName(e.target.value)}} className='px-4 py-3 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-1/2 font-semibold' required type="text" placeholder='lastname' />
        </div>
      <h3 className='text-lg font-semibold mb-3'>What's your Email ? </h3>
      <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='px-4 py-3 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-full font-semibold' required type="email" placeholder='example@example.com' />
      <h2 className='text-lg mt-3 mb-3 font-semibold'>Enter Password</h2>
      <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} className='block mb-3 border-1 placeholder:text-ml px-4 py-3 rounded w-full bg-[#eeeeee] mb-7 font-semibold' required type="text" placeholder='Password' />
      <button className='bg-[#111] px-6 py-2 rounded text-ml w-full text-white text-lg font-semibold'>Sign Up</button>
      </form>
      <p className='font-semibold mt-3 text-center'>Already have an account ? <Link to="/login" className=' text-blue-600 font-bold'> Sign in</Link></p>

      </div>
      <div>
        <p className=' text-[11px] font-bold leading-tight'>By proceeding, you consent to get calls,Whatsapp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>

    </div>
  )
}

export default UserSignup
