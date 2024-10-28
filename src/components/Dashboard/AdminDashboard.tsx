import React from "react";
import Header from "../Other/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AdminDashboard() {
  return (
    <>
      <div className="w-full h-screen">
        <Header />
        <div className="flex flex-col gap-5 justify-center items-center bg-stone-800 m-10 p-10">
          <h1 className="font-semibold text-3xl">Create a Task:</h1>
          <form action="" className="flex flex-col gap-5 flex-wrap">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="assignto">Assign to</Label>
              <Input type="text" id="assignto" placeholder="Employee name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="category">Category</Label>
              <Input type="text" id="category" placeholder="design, dev, etc" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Input type="text" id="description" placeholder="design, dev, etc" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
