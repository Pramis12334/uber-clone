import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
        <h4 onClick={()=>{
        props.setFinishedRidePanel(false)
      }}  className='absolute right-6 bottom-[87%] font-semibold'><i className="ri-arrow-down-wide-fill"></i></h4>
      <h3 className='text-2xl font-semibold mb-5' >Finish this Ride</h3>
     
        <div className='flex items-center justify-between p-3 mt-4 border-4 border-yellow-400 rounded-lg'>
            <div className='flex items-center gap-3 '>
                <img className='h-12 w-12 rounded-full object-cover' src="https://imgs.search.brave.com/vBe12HjlJ6SsGQkp7ClirpszsxNRE817utZQeDFzue8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Mi1yYW5kb20tcGVv/cGxlLWF0LW15LWRv/b3ItdG9kYXktdjAt/Z2FhenZ1aWR0M2dm/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9ZGE5ZTk2YmEz/MWU1NTBmZmNlNWNj/MjZmYTBiNGIwMTZl/ZDg5NjMwNw" alt="" />
            <h2 className='text-xl font-medium'>Pramis Raya</h2>
            </div>
            <h5 className='font-medium'>2.3 KM</h5>
        </div>
        <div 
         className='flex flex-col border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5 gap-2'>

          <div className='w-full mt-5'>
            <div className='flex items-center gap-5 border-b-2 border-gray-200 mb-4'>
              <i className=" text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>62/11-A</h3>
                    <p className='text-sm -mt-1 font-medium text-gray-600'>Koteshowr-32,Ktm</p>
                </div>
            </div>
            <div className='flex items-center gap-4 border-b-2 border-gray-200 mb-4'>
                  <i className="text-lg ri-map-pin-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>59/11-A</h3>
                    <p className='text-sm -mt-1 font-medium text-gray-600'>Baneshwor,Ktm</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                  <i className= "text-lg ri-cash-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>Rs 120</h3>
                    <p className='text-sm -mt-1 font-medium text-gray-600'>Cash </p>
                </div>
            </div>

          </div>
        
          <div className='mt-6 w-full'>
             <Link  to='/captain-home'
            className=' leading-tighter mt-3 font-mono w-full flex justify-center bg-green-600 rounded-lg text-white p-2'
           >Finish Ride</Link>
          </div>
        </div>

    </div>
  )
}

export default FinishRide
