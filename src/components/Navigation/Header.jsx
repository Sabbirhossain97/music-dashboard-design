import React, { useContext } from "react";
import { SalesDropDown, ListeningIcon, Notification, LogOut, MenuIcon } from "../SvgComponents/SVG";
import { SidebarContext } from "../../context/sidebarContext";

export default function Header() {

  const { sidebar } = useContext(SidebarContext);
  const [openSideBar, setOpenSideBar] = sidebar;

  return (
    <div>
      <div className="flex h-24 justify-around w-11/12 mx-auto">
        <div className="flex gap-4 w-1/2 items-center">
          <span onClick={() => setOpenSideBar(!openSideBar)} className="block sm:hidden cursor-pointer hover:bg-gray-100 rounded-md"><MenuIcon /></span>
          <div className="flex items-center">
            <ListeningIcon />
            <p className="ml-3 text-[14px] sm:text-[18px] leading-normal tracking-[0.18px] font-medium font-heebo text-[#373B53]">
              8 people listening you
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center space-x-4 ">
          <div className=" flex items-center space-x-3">
            <div className="flex flex-col items-end mt-2">
              <p className="text-right font-heebo text-[14px] sm:text-[16px] not-italic font-medium leading-normal tracking-[0.14px] text-[#2E3B52]">
                Carlos López
              </p>
              <p className="text-right font-heebo text-[12px] sm:text-[14px] not-italic font-medium leading-normal tracking-[0.14px] text-[#A6ACBE]">
                Artist
              </p>
            </div>
            <img
              src="/assets/header/avatar.png"
              className="rounded-full object-cover"
              alt="avatar"
            />
            <SalesDropDown />
          </div>
          <div className="w-[1px] bg-[#EFF4F6] h-3/4 hidden sm:block"></div>
          <div className="space-x-4 hidden sm:flex">
            <Notification />
            <LogOut />
          </div>
        </div>
      </div>
    </div>
  );
}
