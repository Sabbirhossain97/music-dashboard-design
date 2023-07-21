import React from 'react'
import Sidebar from './Sidebar';
export default function Earnings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="border w-full bg-red-500 flex justify-center items-center">
        This is Earnings page!
      </div>
    </div>
  );
}
