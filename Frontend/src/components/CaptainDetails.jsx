import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/vBe12HjlJ6SsGQkp7ClirpszsxNRE817utZQeDFzue8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Mi1yYW5kb20tcGVv/cGxlLWF0LW15LWRv/b3ItdG9kYXktdjAt/Z2FhenZ1aWR0M2dm/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9ZGE5ZTk2YmEz/MWU1NTBmZmNlNWNj/MjZmYTBiNGIwMTZl/ZDg5NjMwNw" alt="" />
          <h4 className='text-lg font-medium'> Pramis Raya</h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>
            Rs280.60
          </h4>
          <p className='text-sm font-medium text-gray-600'>Earned</p>
        </div>
      </div>
      <div className='flex p-3 mt-6 bg-gray-100 rounded-full justify-center gap-5 items-start'>
        <div className='text-center'>
           <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
          <i className="text-3xl mb-2 font-thin ri-dashboard-2-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
          <i className="text-3xl mb-2 font-thin ri-dashboard-2-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainDetails
