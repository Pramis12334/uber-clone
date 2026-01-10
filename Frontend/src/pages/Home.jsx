import React, { useRef, useState } from 'react'
import { useActionState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import WaitForDriver from '../components/WaitForDriver'
import LookingForDriver from '../components/LookingForDriver'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const[destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const VehiclePanelRef = useRef(null)
  const VehiclePanelCloseRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const WaitingForDriverRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

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
  useGSAP(function(){
    if(vehiclePanelOpen){
gsap.to(VehiclePanelRef.current, {
  transform: 'translateY(0%)'
})
    } else {
      gsap.to(VehiclePanelRef.current, {
  transform: 'translateY(100%)'
})

    }

  },[vehiclePanelOpen])
  useGSAP(function(){
    if(confirmRidePanel){
gsap.to(confirmRidePanelRef.current, {
  transform: 'translateY(0%)'
})
    } else {
      gsap.to(confirmRidePanelRef.current, {
  transform: 'translateY(100%)'
})
    }
  },[confirmRidePanel])
   useGSAP(function(){
    if(vehicleFound){
gsap.to(vehicleFoundRef.current, {
  transform: 'translateY(0%)'
})
gsap.to(confirmRidePanelRef.current, {
  transform:'translateY(100%)'
})
    } else {
      gsap.to(vehicleFoundRef.current, {
  transform: 'translateY(100%)'
})
    }
  },[vehicleFound])
  useGSAP(function(){
    if(waitingForDriver){
gsap.to(WaitingForDriverRef.current, {
  transform: 'translateY(0%)'
})
gsap.to(vehicleFoundRef.current, {
  transform:'translateY(100%)'
})
    } else {
      gsap.to(WaitingForDriverRef.current, {
  transform: 'translateY(100%)'
})
    }
  },[waitingForDriver])
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
          <LocationSearchPanel setVehiclePanelOpen={setVehiclePanelOpen} setPanelOpen={setPanelOpen} ref={VehiclePanelRef} />

        </div>
      </div>
      <div  ref={VehiclePanelRef} className='fixed z-10 bottom-0 w-full py-6 px-3 pt-12 translate-y-full bg-white'>
       < VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div  ref={confirmRidePanelRef} className='fixed z-10 bottom-0 w-full py-6 px-3 translate-y-full bg-white'>
       < ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 w-full py-6 px-3 translate-y-full bg-white'>
      < LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={WaitingForDriverRef} className='fixed z-10 bottom-0 w-full py-6 px-3 translate-y-0 bg-white'>
      < WaitForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  )
}

export default Home
