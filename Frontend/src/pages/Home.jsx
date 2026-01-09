import React, { useRef, useState } from 'react'
import { useActionState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const[destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
   const submitHandler = (e) => {
e.preventDefault()
  }
  useGSAP(function() {
    if(panelOpen) {
      gsap.to(panelRef.current, {
      height:'70%',
      padding:24
      
    })
    gsap.to(panelCloseRef.current,{
      opacity:'1'
    })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
      opacity:'0'
    })
    }
  },[panelOpen])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img src="https://media.gettyimages.com/id/2188263310/vector/car-navigation-direction-map-ride-share-carpooling-travel-driving-city-map.jpg?s=612x612&w=0&k=20&c=MNbWgtlPcrVlAfbrj-9GxHJRQvUhXvzbTsRaxl4HRKs=" className='w-full h-full object-cover'/>
      <div className='w-full h-screen absolute flex flex-col justify-end top-0'>
         <div className='w-full h-[30%] p-5 bg-white relative'>
          <h3 ref={panelCloseRef} onClick={()=>{
setPanelOpen(false)
          }} 
          className='absolute top-6 right-6 text-2xl opacity-0'><i className="ri-arrow-down-wide-line"></i></h3>
<h4 className='text-2xl font-semibold mb-2'>Find a trip</h4>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <div className="line w-1 h-16 absolute top-[40%] left-10 bg-gray-900 rounded-full"></div>
          <input 
          onClick={() => {
            setPanelOpen(true)
          }}
           value={pickup} 
           onChange={(e) => {
            setPickup(e.target.value)
          }}
           type="text"
            placeholder='Add a pick-up location'
             className='w-full px-12 py-2 bg-[#eee] font-semibold rounded-lg mb-3 text-lg'
             />
          <input
          onClick={()=>{
            setPanelOpen(true)
          }}
          value={destination}
          onChange={(e) =>  {
            setDestination(e.target.value)
          }} 
          type="text"
           placeholder='Enter your destination' 
           className='w-full px-12 py-2 bg-[#eee] font-semibold rounded-lg text-lg'
           />
        </form>
        </div>
        <div ref={panelRef} className='w-full h-[70%] bg-white '>
          <LocationSearchPanel/>

        </div>
        
       
      </div>
      <div className='fixed z-10 bottom-0 w-full py-6 px-3 translate-y-full bg-white'>
        <h1 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h1>
        <div className='flex border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5'>
          <img src="https://imgs.search.brave.com/gDyLccf_4d-ZeHG-6zHCd2LJECGUhUA-yidKTDo5waU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/MTI2LzQ0NS9zbWFs/bC9zZXJlbmUtdmlu/dGFnZS10b3ktY2Fy/LXJlZC1zcG9ydHMt/Y2FyLXN0eWxlLTRr/LXBuZy5wbmc" className='h-14 w-14 '/>
          <div className=' ml-4 w-1/2'>
            <h1 className='font-medium text-base'>Uber Go <span><i className="ri-user-fill"></i>4</span></h1>
            <h3 className='font-medium text-sm'>2 mins away</h3>
            <p className='font-medium text-xs text-gray-500'>Affordable, Comfort ride</p>

          </div>
          <h2 className='font-semibold text-xl'>Rs 129.20</h2>
        </div>
        <div className='flex border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5'>
          <img src="https://imgs.search.brave.com/AvqrkxpNNd5xv016tySVcAr7JUqA0pH6296lxrb0O-Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzQv/NDY3Lzk4NC9zbWFs/bC90b3ktbW90b3Jj/eWNsZS1tb2RlbC1t/b3RvcmN5Y2xlLWRl/bW8tbW90b3JjeWNs/ZS1raWRzLW1vdG9y/Y3ljbGUtY29sb3Jm/dWwtdG95LW1vdG9y/YmlrZS1jb2xvdXJm/dWwtdG95LW1vdG9y/Y3ljbGUtdG95LW1v/dG9yY3ljbGUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1haS1n/ZW5lcmF0ZWQtcG5n/LnBuZw" className='h-14 w-14 '/>
          <div className=' ml-4 w-1/2'>
            <h1 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h1>
            <h3 className='font-medium text-sm'>2 mins away</h3>
            <p className='font-medium text-xs text-gray-500'>Affordable, Motorcycle ride</p>

          </div>
          <h2 className='font-semibold text-xl'>Rs 65</h2>
        </div>
         <div className='flex border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5'>
          <img src="https://w7.pngwing.com/pngs/185/46/png-transparent-bajaj-auto-auto-rickshaw-car-bajaj-qute-auto-rickshaw-mode-of-transport-motorcycle-vehicle-thumbnail.png" className='h-14 w-14 '/>
          <div className=' ml-4 w-1/2'>
            <h1 className='font-medium text-base'>Uber Go <span><i className="ri-user-fill"></i>3</span></h1>
            <h3 className='font-medium text-sm'>2 mins away</h3>
            <p className='font-medium text-xs text-gray-500'>Affordable, Auto ride</p>

          </div>
          <h2 className='font-semibold text-xl'>Rs 129.20</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
