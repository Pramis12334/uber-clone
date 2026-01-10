import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
       <h1 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h1>
        <h4 onClick={()=>{
          props.setVehiclePanelOpen(false)
        }} className='absolute right-6 bottom-[87%] font-semibold'><i className="ri-arrow-down-wide-fill"></i></h4>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }}
         className='flex border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5'>
          <img src="https://imgs.search.brave.com/gDyLccf_4d-ZeHG-6zHCd2LJECGUhUA-yidKTDo5waU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/MTI2LzQ0NS9zbWFs/bC9zZXJlbmUtdmlu/dGFnZS10b3ktY2Fy/LXJlZC1zcG9ydHMt/Y2FyLXN0eWxlLTRr/LXBuZy5wbmc" className='h-14 w-14 '/>
          <div className=' ml-4 w-1/2'>
            <h1 className='font-medium text-base'>Uber Go <span><i className="ri-user-fill"></i>4</span></h1>
            <h3 className='font-medium text-sm'>2 mins away</h3>
            <p className='font-medium text-xs text-gray-500'>Affordable, Comfort ride</p>

          </div>
          <h2 className='font-semibold text-xl'>Rs 129.20</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5'>
          <img src="https://imgs.search.brave.com/AvqrkxpNNd5xv016tySVcAr7JUqA0pH6296lxrb0O-Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzQv/NDY3Lzk4NC9zbWFs/bC90b3ktbW90b3Jj/eWNsZS1tb2RlbC1t/b3RvcmN5Y2xlLWRl/bW8tbW90b3JjeWNs/ZS1raWRzLW1vdG9y/Y3ljbGUtY29sb3Jm/dWwtdG95LW1vdG9y/YmlrZS1jb2xvdXJm/dWwtdG95LW1vdG9y/Y3ljbGUtdG95LW1v/dG9yY3ljbGUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1haS1n/ZW5lcmF0ZWQtcG5n/LnBuZw" className='h-14 w-14 '/>
          <div className=' ml-4 w-1/2'>
            <h1 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h1>
            <h3 className='font-medium text-sm'>2 mins away</h3>
            <p className='font-medium text-xs text-gray-500'>Affordable, Motorcycle ride</p>

          </div>
          <h2 className='font-semibold text-xl'>Rs 65</h2>
        </div>
         <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5'>
          <img src="https://w7.pngwing.com/pngs/185/46/png-transparent-bajaj-auto-auto-rickshaw-car-bajaj-qute-auto-rickshaw-mode-of-transport-motorcycle-vehicle-thumbnail.png" className='h-14 w-14 '/>
          <div className=' ml-4 w-1/2'>
            <h1 className='font-medium text-base'>Uber Go <span><i className="ri-user-fill"></i>3</span></h1>
            <h3 className='font-medium text-sm'>2 mins away</h3>
            <p className='font-medium text-xs text-gray-500'>Affordable, Auto ride</p>

          </div>
          <h2 className='font-semibold text-xl'>Rs 129.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
