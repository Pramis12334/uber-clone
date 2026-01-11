import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const  ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
 const  confirmridePopUpRef = useRef(null)
  useGSAP(function(){
    if(ridePopUpPanel){
gsap.to(ridePopUpPanelRef.current, {
  transform: 'translateY(0%)'
})
    } else {
      gsap.to(ridePopUpPanelRef.current, {
  transform: 'translateY(100%)'
})
    }
  },[ridePopUpPanel])
   useGSAP(function(){
    if(confirmRidePopUp){
gsap.to(confirmridePopUpRef.current, {
  transform: 'translateY(0%)'
})
    } else {
      gsap.to(confirmridePopUpRef.current, {
  transform: 'translateY(100%)'
})
    }
  },[confirmRidePopUp])
  return (
    <div>
      <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://www.bing.com/th/id/OIP.i46ZYQ96Cr4QQlisKZXN0gHaHa?w=205&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
          <Link to="/home" className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
            <i className="ri-logout-box-line"></i>
        </Link>
        </div>
      <div className='h-3/5'>
        <img className='w-full h-full object-cover' src="https://media.gettyimages.com/id/2188263310/vector/car-navigation-direction-map-ride-share-carpooling-travel-driving-city-map.jpg?s=612x612&w=0&k=20&c=MNbWgtlPcrVlAfbrj-9GxHJRQvUhXvzbTsRaxl4HRKs=" />
      </div>
      <div className='h-2/5 p-6'>
      <CaptainDetails />
      </div>
       <div ref={ridePopUpPanelRef} className='fixed z-10 bottom-0 w-full py-6 px-3 pt-12 translate-y-full bg-white'>
       < RidePopup setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUp={setConfirmRidePopUp} />
      </div> 
      <div ref={confirmridePopUpRef}  className='fixed h-screen z-10 bottom-0 w-full py-6 px-3 pt-12 translate-y-full bg-white'>
       < ConfirmRidePopUp setConfirmRidePopUp={setConfirmRidePopUp} setRidePopUpPanel={setRidePopUpPanel} />
      </div> 
    </div>
    </div>
  )
}

export default CaptainHome
