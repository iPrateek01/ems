import React from 'react'

function TaskListNumbers({data}) {
  return (
    <>
    <div className='flex flex-row flex-wrap md:flex-nowrap justify-center items-center sm:mx-10 my-10 gap-5'>
        <div className='h-40 w-5/12 sm:w-3/12 bg-red-600 rounded-md flex flex-col gap-5 items-start p-5 justify-center'>
            <h2 className='flex flex-1 text-3xl font-semibold'>{data.taskSummary.new_task}</h2>
            <h3 className='flex flex-1 text-3xl'>New Task</h3>
        </div>
        <div className='h-40 w-5/12 sm:w-3/12 bg-blue-600 rounded-md flex flex-col gap-5 items-start p-5 justify-center '>
            <h2 className='flex flex-1 text-3xl font-semibold'>{data.taskSummary.completed}</h2>
            <h3 className='flex flex-1 text-3xl relative right-2 sm:right-0 sm:text-2xl md:text-3xl'>Completed Task</h3>
        </div>
        <div className='h-40 w-5/12 sm:w-3/12 bg-lime-500 rounded-md flex flex-col gap-5 items-start p-5 justify-center'>
            <h2 className='flex flex-1 text-3xl font-semibold'>{data.taskSummary.active}</h2>
            <h3 className='flex flex-1 text-3xl '>Active Task</h3>
        </div>
        <div className='h-40 w-5/12 sm:w-3/12 bg-orange-600 rounded-md flex flex-col gap-5 items-start p-5 justify-center'>
            <h2 className='flex flex-1 text-3xl font-semibold'>{data.taskSummary.failed}</h2>
            <h3 className='flex flex-1 text-3xl '>Failed Task</h3>
        </div>
       
       
        
    </div>
    </>
  )
}

export default TaskListNumbers