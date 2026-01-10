import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-5' >Looking For nearby Driver</h3>
      <h4 onClick={()=>{
        props.setVehicleFound(false)
      }}  className='absolute right-6 bottom-[87%] font-semibold'><i className="ri-arrow-down-wide-fill"></i></h4>
        <div className='flex flex-col border-2 active:border-black border-white rounded-xl w-full p-3 items-center justify-between mt-5 gap-2'>

          <img className='h-20' src="https://imgs.search.brave.com/gDyLccf_4d-ZeHG-6zHCd2LJECGUhUA-yidKTDo5waU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/MTI2LzQ0NS9zbWFs/bC9zZXJlbmUtdmlu/dGFnZS10b3ktY2Fy/LXJlZC1zcG9ydHMt/Y2FyLXN0eWxlLTRr/LXBuZy5wbmc" />
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
        </div>

    </div>
  )
}

export default LookingForDriver
