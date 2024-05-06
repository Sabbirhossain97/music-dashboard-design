import React, { useContext, useEffect, useState } from "react";
import { Home, Chart, File, Chat } from "../SvgComponents/SVG";
import { SalesDropDown } from "../SvgComponents/SVG";
import { SidebarContext } from "../../context/sidebarContext";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { sidebar } = useContext(SidebarContext);
  const [openSideBar] = sidebar;
  const [activeNavId, setActiveNavId] = useState(null)

  // const navigationLinks = [
  //   { id: 0, path: "/", icon: <Home /> },
  //   { id: 1, path: "/dashboard", icon: <Chart /> },
  //   { id: 2, path: "/earnings", icon: <File /> },
  //   { id: 3, path: "/chat", icon: <Chat /> },
  // ];

  const navigation = [
    {
      Name: "Home",
      Link: "/",
      property: "end",
      icon: <Home />,
      navLinkStyles: ({ isActive }) => {
        return {
          backgroundColor: isActive ? "#fff" : ""
        };
      },
    },
    {
      Name: "Dashboard",
      Link: "/dashboard",
      property: "end",
      icon: <Chart />,
      navLinkStyles: ({ isActive }) => {
        return {
          backgroundColor: isActive ? "#fff" : ""
        };
      },
    },
    {
      Name: "Earnings",
      Link: "/earnings",
      property: "end",
      icon: <File />,
      navLinkStyles: ({ isActive }) => {
        return {
          backgroundColor: isActive ? "#fff" : ""
        };
      },
    },
    {
      Name: "Chat",
      Link: "/chat",
      property: "end",
      icon: <Chat />,
      navLinkStyles: ({ isActive }) => {
        return {
          backgroundColor: isActive ? "#fff" : ""
        };
      },
    },
  ];


  return (
    <div>
      <div className={`sm:w-[70px] sm:flex flex-col transition-all duration-300 ease-in-out h-full bg-[#373B53] ${openSideBar ? "w-[70px]" : 'w-0'}`}>
        <div className="h-[92%] flex flex-col items-center space-y-20">
          <div className="mt-6 p-2">
            <img src="assets/navbar/Logo.png" />
          </div>
          <div className="w-full flex flex-col gap-4 justify-end items-end">
            {navigation.map((item, key) => (
              <NavLink
                key={key}
                to={item.Link}
                className={`cursor-pointer hover:bg-white px-2 rounded-l-lg w-5/6 py-4 flex justify-center`}
                style={item.navLinkStyles}
                end
              >
                <button>
                  <div >{item.icon}</div>
                </button>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="h-[120px] border border-t border-[#494E67] flex flex-col justify-end items-center ">
          <p className=" mb-[10px] font-heebo text-[18px] text-[#6F809E] not-italic font-normal leading-3 tracking-[0.18px]">
            Help
          </p>
          <div className="flex mb-10 ml-1 items-center gap-1">
            <p className="mt-[10px] font-heebo text-[18px] text-[#6F809E] not-italic font-normal leading-3 tracking-[0.18px]">
              EN
            </p>
            <SalesDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
