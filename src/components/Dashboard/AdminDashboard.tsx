// import React from "react";
import Header from "../Other/Header";

import AllTask from "../Other/AllTask";
import CreateTask from "../Other/CreateTask";

function AdminDashboard({data, handleLogOut}) {
  return (
    <>
      <div className="w-full h-screen">
        <Header data = {data} handleLogOut={handleLogOut} />
        <CreateTask />
        <AllTask />
      </div>
    </>
  );
}

export default AdminDashboard;
