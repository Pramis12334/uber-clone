import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {
 const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')
  const [firstname, setFirstName] = useState(' ')
  const [lastname, setLastName] = useState(' ')
  const [userData, setUserData] = useState({})

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [ vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicletype] = useState('')

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData={
      fullname:{
      firstname: firstname,
      lastname: lastname
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if(response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token);
      navigate('/Captain-home')
    }
    console.log(captainData);
    setFirstName(' ')
    setLastName(' ')
    setEmail(' ')
    setPassword(' ')
    setVehicleCapacity(' ')
    setVehicleColor(' ')
    setVehiclePlate(' ')
    setVehicletype(' ')
  }
  return (
    <div className='w-full h-screen p-6 flex flex-col justify-between'>
      <div>
      <img className='w-20' src="https://www.bing.com/th/id/OIP.i46ZYQ96Cr4QQlisKZXN0gHaHa?w=205&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className='text-lg font-semibold mb-1'>What's our Captain Name ? </h3>
        <div className='flex gap-4'>
          
      <input value={firstname} onChange={(e) => {setFirstName(e.target.value)}} className='px-4 py-2 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-1/2 font-semibold' required type="text" placeholder='firstname' />
      <input value={lastname} onChange={(e) => {setLastName(e.target.value)}} className='px-4 py-2 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-1/2 font-semibold' required type="text" placeholder='lastname' />
        </div>
      <h3 className='text-lg font-semibold mb-1'>What's our Captain Email ? </h3>
      <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='px-4 py-3 bg-[#eeeeee] border-1 placeholder:text-ml rounded w-full font-semibold' required type="email" placeholder='example@example.com' />
      <h2 className='text-lg mt-1 mb-1 font-semibold'>Enter Password</h2>
      <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} className='block border-1 placeholder:text-ml px-4 py-3 rounded w-full bg-[#eeeeee] font-semibold' required type="text" placeholder='Password' />

      <h3 className='text-lg font-semibold'>Vehicle Information:</h3>
      <div className='flex gap-4 mb-4'>
        <input value={vehicleColor} onChange={(e) => {setVehicleColor(e.target.value)}} type="text" placeholder='Vehicle Color' className='w-1/2 font-semibold border px-2 rounded py-2 placeholder:text-center bg-[#eeeeee] required'/>
        <input value={vehiclePlate} onChange={(e) => { setVehiclePlate(e.target.value)}} type="text" placeholder='Vehicle Plate' className='w-1/2 font-semibold border px-2 rounded py-2 placeholder:text-center bg-[#eeeeee] required'/>
      </div>
      <div className='flex gap-4 mb-4'>
        <input value={vehicleCapacity} onChange={(e) => {setVehicleCapacity(e.target.value)}} type="number" placeholder='Vehicle Capacity' className='w-1/2 font-semibold border px-2 rounded py-2 placeholder:text-center bg-[#eeeeee] required'/>
        <select value={vehicleType} onChange={(e) => {setVehicletype(e.target.value)}} className='w-1/2 px-2 py-2 rounded border bg-[#eeeeee] font-semibold' required>
          <option value="" disabled>Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="motorcycle">Motorcycle</option>
        </select>

      </div>

      <button className='bg-[#111] px-6 py-2 rounded text-ml w-full text-white text-lg font-semibold'>Create Captain Account</button>
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
