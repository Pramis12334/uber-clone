import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] bg-cover bg-bottom h-screen pt-5  flex justify-between flex-col w-full bg-red-500'>
        <img className='w-30 ml-5' src="https://imgs.search.brave.com/ktp1hcKXCZ7tgiW2FCckgpuC0IlUa7P9Fnpj8ZiEfYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nby10/ZXh0LXBuZy0xLnBu/Zw" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4 text-bold text-xl'>Continue</Link>
        </div>
    </div>
  )
}

export default Home
