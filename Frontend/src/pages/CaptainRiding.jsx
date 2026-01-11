import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {
  const [finshedRidePanel, setFinishedRidePanel] = useState(false)
  const finishedRidePanelRef = useRef(null)
  useGSAP(function(){
    if(finshedRidePanel){
gsap.to(finishedRidePanelRef.current, {
  transform: 'translateY(0%)'
})
    } else {
      gsap.to(finishedRidePanelRef.current, {
  transform: 'translateY(100%)'
})
    }
  },[finshedRidePanel])
  return (
     <div>
      <div className='h-screen relative'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://www.bing.com/th/id/OIP.i46ZYQ96Cr4QQlisKZXN0gHaHa?w=205&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
          <Link to="/captain-home" className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
            <i className="ri-logout-box-line"></i>
        </Link>
        </div>
      <div className='h-4/5'>
        <img className='w-full h-full object-cover' src="https://media.gettyimages.com/id/2188263310/vector/car-navigation-direction-map-ride-share-carpooling-travel-driving-city-map.jpg?s=612x612&w=0&k=20&c=MNbWgtlPcrVlAfbrj-9GxHJRQvUhXvzbTsRaxl4HRKs=" />
      </div>
      <div className='h-1/5 p-6 bg-yellow-400 relative flex justify-between items-center'
      onClick={()=>{
        setFinishedRidePanel(true)
      }}
      >
        <h4 onClick={()=>{
      }}  className='w-[95%] text-center p-1 absolute top-0 font-semibold'><i className="ri-arrow-up-wide-line"></i></h4>
      <h4  className='text-xl font-semibold'>4 KM away</h4>
      <button className='  w-full bg-green-600 rounded-lg font-semibold text-white p-3 px-10'>Complete Ride</button>
      </div>
    </div>
 <div ref={finishedRidePanelRef} className='fixed z-10 bottom-0 w-full py-6 px-3 pt-12 translate-y-full bg-white'>
       < FinishRide setFinishedRidePanel={setFinishedRidePanel}  />
      </div> 
    </div>
  )
}

export default CaptainRiding
