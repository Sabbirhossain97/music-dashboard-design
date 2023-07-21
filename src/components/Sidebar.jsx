import React from "react";
import { Link } from "react-router-dom";
import Home from "./svg/navbar/Home";
import Chart from "./svg/navbar/Chart";
import Files from "./svg/navbar/Files";
import Chat from "./svg/navbar/Chat";
export default function Sidebar({children}) {
  return (
    <div className="">
      <div className="h-screen bg-[#373B53] w-[100px]">
        <div className="h-1/2 flex flex-col items-center space-y-20">
          <div className="mt-6">
            <img src="assets/navbar/Logo.png" />
          </div>
          <div className="w-full flex flex-col space-y-4 justify-end items-end">
            <Link
              to="/"
              className="cursor-pointer hover:bg-white rounded-l-lg w-5/6 py-4 flex justify-center "
            >
              <div>
                <Home />
              </div>
            </Link>
            <Link
              to="/Dashboard"
              className="cursor-pointer hover:bg-white rounded-l-lg w-5/6 py-4 flex justify-center "
            >
              <div>
                <Chart />
              </div>
            </Link>
            <Link
              to="/Earnings"
              className="cursor-pointer hover:bg-white rounded-l-lg w-5/6 py-4 flex justify-center "
            >
              <div>
                <Files />
              </div>
            </Link>
            <Link
              to="/Chat"
              className="cursor-pointer hover:bg-white rounded-l-lg w-5/6 py-4 flex justify-center "
            >
              <div>
                <Chat />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-1/2 flex flex-col justify-end items-center ">
          <p className="mb-[10px] font-heebo text-[18px] text-[#6F809E] not-italic font-normal leading-3 tracking-[0.18px]">
            Help
          </p>
          <div className="flex mb-[25px] ml-1">
            <p className="mt-[10px] font-heebo text-[18px] text-[#6F809E] not-italic font-normal leading-3 tracking-[0.18px]">
              EN
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 21 24"
              fill="none"
              className="mt-1"
            >
              <path
                d="M5.13037 9L10.2608 15L15.3912 9"
                stroke="#6F809E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
