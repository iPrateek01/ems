import React from 'react'

function TaskListNumbers() {
  return (
    <>
    <div className='flex flex-row flex-wrap md:flex-nowrap justify-center items-center sm:mx-10 my-10 gap-5'>
        <div className='h-40 w-5/12 sm:w-3/12 bg-red-400 rounded-md flex flex-col gap-5 items-start p-5 justify-center'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-3xl font-'>New Task</h3>
        </div>
        <div className='h-40 w-5/12 sm:w-3/12 bg-blue-400 rounded-md flex flex-col gap-5 items-start p-5 justify-center'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-3xl font-'>New Task</h3>
        </div>
        <div className='h-40 w-5/12 sm:w-3/12 bg-green-400 rounded-md flex flex-col gap-5 items-start p-5 justify-center'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-3xl font-'>New Task</h3>
        </div>
        <div className='h-40 w-5/12 sm:w-3/12 bg-red-400 rounded-md flex flex-col gap-5 items-start p-5 justify-center'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-3xl font-'>New Task</h3>
        </div>
       
       
        
    </div>
    </>
  )
}

export default TaskListNumbers