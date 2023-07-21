import React from 'react'
import Sidebar from './Sidebar'
export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" w-full  flex justify-center items-center">
        This is Dashboard page!
      </div>
    </div>
  );
}
