// import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data, handleLogOut}) => {

  // console.log(data)

  return (
    <>
    <div className='flex flex-col w-full h-screen'>
    <Header data={data} handleLogOut={handleLogOut}/>
    <TaskListNumbers data={data}/>
    <TaskList data={data}/>
    </div>
    </>
  )
}

export default EmployeeDashboard