import React from "react";
import Sidebar from "./Sidebar";
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="border w-full bg-red-500 flex justify-center items-center">This is Home page!</div>
    </div>
  );
}