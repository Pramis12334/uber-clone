import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to="/home" className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '>
            <i className="text-lg font-medium ri-home-4-fill"></i>
        </Link>
      <div className='h-1/2'>
        <img className='w-full h-full object-cover' src="https://media.gettyimages.com/id/2188263310/vector/car-navigation-direction-map-ride-share-carpooling-travel-driving-city-map.jpg?s=612x612&w=0&k=20&c=MNbWgtlPcrVlAfbrj-9GxHJRQvUhXvzbTsRaxl4HRKs=" />
      </div>
      <div className='h-1/2 p-4'>
      <div className='flex items-center justify-between'>
        <img className='h-12' src="https://imgs.search.brave.com/gDyLccf_4d-ZeHG-6zHCd2LJECGUhUA-yidKTDo5waU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/MTI2LzQ0NS9zbWFs/bC9zZXJlbmUtdmlu/dGFnZS10b3ktY2Fy/LXJlZC1zcG9ydHMt/Y2FyLXN0eWxlLTRr/LXBuZy5wbmc" />
      <div className='text-right'>
        <h2 className='text-lg font-medium'>Pramis</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>BG 08 95W</h4>
        <p className='text-sm font-bold text-gray-600'>Honda,alto</p>
      </div>
      </div>
        <div className='flex flex-col border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5 gap-2'>

          
          <div className='w-full mt-5'>
            
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
        </div>
      <button className=' mt-5 w-full bg-green-600 rounded-lg font-semibold text-white p-2'>Make a payment</button>

      </div>
    </div>
  )
}

export default Riding
