import React from 'react'

function TaskList() {
  return (
    <>
      <div id='taskList' className='flex flex-col sm:flex-row justify-start items-center overflow-y-scroll sm:overflow-x-scroll mx-10 py-5 gap-5'>
        {/* Individual Task Cards */}
        {[...Array(9)].map((_, index) => (
          <div key={index} className='flex-shrink-0 flex flex-col justify-start items-center w-11/12 sm:w-4/12 h-auto p-5 rounded-md bg-gray-800 gap-3 text-center'>
            <div className='flex flex-row w-full justify-between items-center'>
              <h1 className='p-2 bg-red-600 rounded-sm'>High</h1>
              <h1>28 oct 2024</h1>
            </div>
            <h1 className='font-semibold text-3xl'>Make a YouTube video</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, illo consequatur nihil modi laboriosam, incidunt commodi sapiente quas praesentium ipsam odit dolorum reprehenderit vero. Asperiores aut vero blanditiis mollitia ut itaque sit? Odit, placeat aliquid quia cupiditate laudantium tempore explicabo soluta dolor aut qui obcaecati sapiente ipsum. Laboriosam, itaque repellat.</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TaskList;
