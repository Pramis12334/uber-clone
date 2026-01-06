import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})
   const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password
    })
    console.log(captainData);
    setEmail(' ')
    setPassword(' ')
  }
  return (
      <div className='w-full h-screen p-6 flex flex-col justify-between'>
      <div>
      <img className='w-20' src="https://www.bing.com/th/id/OIP.i46ZYQ96Cr4QQlisKZXN0gHaHa?w=205&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
      <h3 className='text-lg font-semibold mb-3'>What's our Captain Email ? </h3>
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='px-4 py-3 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-full font-semibold' required type="email" placeholder='example@example.com' />
      <h2 className='text-lg mt-3 mb-3 font-semibold'>Enter Password</h2>
      <input value={password} onChange={(e) => {setPassword(e.target.value)}}  className='block mb-3 border-1 placeholder:text-ml px-4 py-3 rounded w-full bg-[#eeeeee] mb-7 font-semibold' required type="text" placeholder='Password' />
      <button className='bg-[#111] px-6 py-2 rounded text-ml w-full text-white text-lg font-semibold'>Login</button>
      </form>
      <p className='font-semibold mt-3 text-center'> New here ? <Link to="/Captain-signup" className=' text-blue-600 font-bold'> Register as a Captain</Link></p>

      </div>
      <div>
        <Link to="/login" className='bg-[#10b461] flex items-center justify-center px-6 py-3 rounded text-ml w-full text-white text-lg font-semibold mt-4'>Sign in as User</Link>
      </div>
    </div>
  )
}



export default CaptainLogin
