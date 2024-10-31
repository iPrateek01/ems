import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CreateTask() {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [task, setTask] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setTask([{taskTitle,taskDescription,date,category,assignTo,active:false,new_task:true,failed:false,completed:false}])
    console.log(task)
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-stone-800 m-10 p-10">
          <h1 className="font-semibold text-3xl">Create a Task:</h1>
          <form action="" className="flex flex-col sm:flex-row w-full justify-around gap-5 lg:gap-0 flex-wrap">
            <div className="flex flex-col gap-5 sm:min-w-96 ">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="task
              Title">Task Title</Label>
              <Input type="text" id="taskTitle" placeholder="Make a UI design.." className="" value={taskTitle} onChange={(e) => (setTaskTitle(e.target.value))} required/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="assignto">Assign to</Label>
              <Input type="text" id="assignto" placeholder="Employee name" value={assignTo} onChange={(e) => setAssignTo(e.target.value)} required/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="category">Category</Label>
              <Input type="text" id="category" placeholder="design, dev, etc" value={category} onChange={(e) => setCategory(e.target.value)}  required/>
            </div>
            </div>
            <div className="flex flex-col sm:min-w-96 gap-10">   
            <div className="grid w-full h-full max-w-sm items-center gap-1.5">
              <Label htmlFor="taskDescription" className="w-full h-full" >Description
              <textarea name="taskDescription" id="taskDescription" className=" bg-stone-800 my-2 w-full h-full rounded-md border border-white p-3" value={taskDescription} onChange={(e) => (setTaskDescription(e.target.value))} required></textarea>
              </Label>
            </div>
            <button onClick={handleSubmit} className="w-full bg-green-600 rounded-md h-12"> Create Task </button>
            </div>
          </form>
        </div>
  )
}

export default CreateTask