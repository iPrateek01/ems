// import React from "react";

function AcceptTask({ data }) {
  return (
    <>
      {data.tasks
        .filter((task) => task.active)
        .map((index) => (
          <div
            key={index.task_title}
            className="flex-shrink-0 flex flex-col justify-start items-center w-11/12 sm:w-9/12 md:w-4/12 h-80 p-5 rounded-md bg-lime-500 gap-7 text-center"
          >
            <div className="flex flex-row flex-1 w-full justify-between items-center">
              <h1 className="p-2 bg-indigo-800 rounded-sm">{index.category}</h1>
              <h1>{index.task_date}</h1>
            </div>
            <div className="flex flex-col flex-1">
              <h1 className="font-semibold text-3xl">{index.task_title}</h1>
              <p>{index.task_description}</p>
            </div>
            <div className="flex flex-row flex-1 w-full justify-evenly items-center gap-3 ">
              {/* <button className="bg-green-600 rounded-sm p-2 text-xl text-wrap">
                  Mark as Completed
              </button>
              <button className="bg-red-600 rounded-sm p-2 text-xl">
          Mark as Failed
              </button> */}
            </div>
          </div>
        ))}
    </>
  );
}

export default AcceptTask;
