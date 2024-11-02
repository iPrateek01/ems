// @ts-nocheck
import { AuthContext } from '@/context/AuthProvider'
import { useContext } from 'react'

function AllTask() {

  const authData = useContext(AuthContext)

  

  return (
    <>
    <div className='pb-1'>
    <div className=' flex justify-center font-semibold text-3xl p-2 bg-stone-800 m-10 mb-0'>All Tasks</div>
    <div id='allTask' className='flex flex-col h-72 overflow-auto bg-stone-800 mx-10 mb-10 mt-0 p-2 gap-2'>
        {authData?.employees.map((index) => (
            <div key={index.id} className=''>
                <div className='flex flex-col sm:flex-row justify-between w-full h-72 sm:h-20 items-center p-5 bg-stone-900 rounded-lg gap-5 text-xl'>
                    <div className='flex sm:w-1/3'>
                        {index.firstname} {index.lastname}
                    </div>
                    <div className='flex flex-row justify-between w-full sm:flex-col sm:w-2/3 h-full overflow-auto p-2 sm:gap-5 gap-20'>
                        {index.tasks.map((tasks, idx) => (
                            <div key={idx} className='flex flex-col mt-6 sm:mt-0 lg:pl-48 sm:flex-row justify-between items-center text-nowrap p-4 sm:px-0 sm:py-0 '>
                                <p className=''>{tasks.task_title}</p>
                                <p>{tasks.active ? 'Active' : tasks.completed ? 'Completed' : tasks.failed ? 'Failed' : 'New'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default AllTask