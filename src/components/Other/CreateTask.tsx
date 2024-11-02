import { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



function CreateTask() {

  const [task_title, setTask_title] = useState('')
  const [task_description, setTask_description] = useState('')
  const [task_date, setTask_date] = useState('')
  const [category, setCategory] = useState('')
  const [assignTo, setAssignTo] = useState('')
  // const [newTask, setNewTask] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { active: false, category, completed: false, failed: false, new_task: true, task_date, task_description, task_title };
    console.log(newTask);
    const data = JSON.parse(localStorage.getItem('employees'));
    console.log(data);
    const updatedData = data?.map((employee) => {
      if (assignTo === employee.firstname) {
        employee.tasks.push(newTask);
        employee.taskSummary.new_task += 1;
      }
      return employee;
    });
    console.log(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));

    // console.log(localStorage.employees)

    setTask_date('');
    setTask_description('');
    setTask_title('');
    setAssignTo('');
    setCategory('');
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-stone-800 m-10 p-10">
          <h1 className="font-semibold text-3xl">Create a Task:</h1>
          <form action="" className="flex flex-col sm:flex-row w-full justify-around gap-5 lg:gap-0 flex-wrap">
            <div className="flex flex-col gap-5 sm:min-w-96 ">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="task
              Title">Task Title</Label>
              <Input type="text" id="taskTitle" placeholder="Make a UI design.." className="" value={task_title} onChange={(e) => (setTask_title(e.target.value))} required/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" value={task_date} onChange={(e) => setTask_date(e.target.value)} required className=''/>
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
              <textarea name="taskDescription" id="taskDescription" className=" bg-stone-800 my-2 w-full h-full rounded-md border border-white p-3" value={task_description} onChange={(e) => (setTask_description(e.target.value))} required></textarea>
              </Label>
            </div>
            <button onClick={handleSubmit} className="w-full bg-green-600 rounded-md h-12"> Create Task </button>
            </div>
          </form>
        </div>
  )
}

export default CreateTask