// import React from 'react'
// import { handler } from 'tailwindcss-animate'

function Header({data, handleLogOut}) {

  // console.log(data)
  return (
    <>
    <div className='flex flex-row items-end justify-between px-10 py-10'>
        <h1 className='text-xl'>Hello, <br /> <span className='font-semibold text-3xl'>{data.firstname}</span> <span className='text-3xl'>👋</span></h1>
        <button onClick={handleLogOut} className='bg-red-600 rounded-md p-2'>
            Sign Out
        </button>
    </div>
    </>
  )
}

export default Header