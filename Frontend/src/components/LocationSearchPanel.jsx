import React from 'react'

import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {
    
    const location = [
        "30X,Location of the rider click it if you want to book it.",
        "20B,Location of the rider click it if you want to book it.",
        "12C,Location of the rider click it if you want to book it.",
        "35G,Location of the rider click it if you want to book it.",
    ]
  return (
   
    <div className=''>
         {
        location.map(function(elem,idx){
            return (
                <div key={idx} onClick={()=>{
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4 my-2 p-3 items-center justify-start border-2 active:border-black border-gray-300 rounded-lg '>
        <h2 className='bg-[#eeeeee] h-10 w-18 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h2 className='text-base font-semibold'>{elem}</h2>
    </div>

            )
        })
    }
    
    </div>
  )
}

export default LocationSearchPanel
