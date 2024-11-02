// import React from 'react'
import NewTask from './NewTask';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

function TaskList({data}) {
  return (
    <>
      <div id='taskList' className='flex flex-col md:flex-row justify-start items-center overflow-y-scroll lg:overflow-x-scroll mx-10 py-5 gap-5 rounded-md'>
        {/* Individual Task Cards */}

        <NewTask data = {data}/>
        <AcceptTask data = {data}/>
        <CompleteTask data = {data}/>
        <FailedTask data = {data}/>
      </div>
    </>
  )
}

export default TaskList;
