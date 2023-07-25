import React, { useState } from "react";

import { Link } from "react-router-dom";
import Home from "./svg/navbar/Home";
import Chart from "./svg/navbar/Chart";
import Files from "./svg/navbar/Files";
import Chat from "./svg/navbar/Chat";
import DropDown from "./svg/navbar/DropDown";
export default function Sidebar() {
  const [activeNav, setActiveNav] = useState([]);
  const navigationLinks = [
    { id: 0, path: "/", icon: <Home /> },
    { id: 1, path: "/dashboard", icon: <Chart /> },
    { id: 2, path: "/earnings", icon: <Files /> },
    { id: 3, path: "/chat", icon: <Chat /> },
  ];

  const handleNavigation = (key) => {
    console.log(key)
    const getActiveLink = navigationLinks.filter((item, index) => {
      if (item.id === key) {
        return item;
      }
    });
    const [getId] = getActiveLink
    setActiveNav(getId);
  };
  return (
    <div>
      <div className="h-screen bg-[#373B53] w-[100px] fixed left-0">
        <div className="h-1/2  flex flex-col items-center space-y-20">
          <div className="mt-6">
            <img src="assets/navbar/Logo.png" />
          </div>
          <div className="w-full flex flex-col space-y-4 justify-end items-end">
            {navigationLinks.map((item, key) => (
              <div
                onClick={() => handleNavigation(key)}
                key={key}
                className={`cursor-pointer ${
                  key === activeNav?.id ? "bg-white" : ""
                } hover:bg-white rounded-l-lg w-5/6 py-4 flex justify-center`}
              >
                <Link to={item.path}>
                  <div>{item.icon}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="h-2/5 border-[#494E67] border-b w-full"></div>
        <div className="h-[100px]  flex flex-col justify-end items-center ">
          <p className="mb-[10px] font-heebo text-[18px] text-[#6F809E] not-italic font-normal leading-3 tracking-[0.18px]">
            Help
          </p>
          <div className="flex mb-[25px] ml-1">
            <p className="mt-[10px] font-heebo text-[18px] text-[#6F809E] not-italic font-normal leading-3 tracking-[0.18px]">
              EN
            </p>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
