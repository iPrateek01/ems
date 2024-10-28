import React from 'react'

function Header() {
  return (
    <>
    <div className='flex flex-row items-end justify-between px-10 py-10'>
        <h1 className='text-xl'>Hello, <br /> <span className='font-semibold text-3xl'>Prateek</span> 👋</h1>
        <button className='bg-red-600 rounded-md p-2'>
            Sign Out
        </button>
    </div>
    </>
  )
}

export default Header