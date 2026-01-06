import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
 const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')
  const [firstname, setFirstName] = useState(' ')
  const [lastname, setLastName] = useState(' ')
  const [captainData, setCaptainData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      username:{
      firstname: firstname,
      lastname: lastname
      },
      email: email,
      password: password
    })
    console.log(captainData);
    setFirstName(' ')
    setLastName(' ')
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
        <h3 className='text-lg font-semibold mb-3'>What's our Captain Name ? </h3>
        <div className='flex gap-4'>
          
      <input value={firstname} onChange={(e) => {setFirstName(e.target.value)}} className='px-4 py-3 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-1/2 font-semibold' required type="text" placeholder='firstname' />
      <input value={lastname} onChange={(e) => {setLastName(e.target.value)}} className='px-4 py-3 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-1/2 font-semibold' required type="text" placeholder='lastname' />
        </div>
      <h3 className='text-lg font-semibold mb-3'>What's our Captain Email ? </h3>
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

export default CaptainSignup
