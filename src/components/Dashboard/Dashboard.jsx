import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Gear from "../svg/dashboard/Gear";
import DownArrow from "../svg/dashboard/DownArrow";
import Download from "../svg/dashboard/Download";
import Add from "../svg/dashboard/Add";
import Person from "../svg/dashboard/Person";
import UnderPerform from "../svg/dashboard/UnderPerform";
import Mark from "../svg/dashboard/Mark";
import Clock from "../svg/dashboard/Clock";
import Love from "../svg/dashboard/Love";
import Music from "../svg/dashboard/Music";
import Chart from "./Chart";
import Fans from "./Fans";
import PieChart from "./PieChart";
export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[100px] w-full  ">
        <Header />
        <div className="bg-[#F8F8FB] ">
          <div className="flex justify-between w-11/12 mx-auto py-10 ">
            <div className="">
              <p className="text-[30px] font-heebo text-[#373B53] not-italic font-semibold leading-normal tracking-[0.3px]">
                Dashboard
              </p>
              <p className="flex items-center text-[14px] font-medium leading-normal tracking-[0.14px] font-heebo text-[#A6ACBE]">
                My new amazing album
                <span>
                  <DownArrow />
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex  px-2 py-2 border border-[#7D90B2] rounded-md">
                <Gear />
              </button>
              <button className="flex border border-[#7D90B2] rounded-md px-3 py-2">
                <span className="mt-0.5 text-[14px] font-medium leading-normal tracking-[0.14px] font-heebo text-[#7D90B2]">
                  last 7 days
                </span>
                <DownArrow />
              </button>
              <button className="flex border px-3 py-2 border-[#7D90B2] rounded-md">
                <Download />
                <span className="ml-2 text-[14px] text-center font-bold leading-normal tracking-[0.14px] font-heebo text-[#7D90B2]">
                  Download as CSV
                </span>
              </button>
              <button className="flex px-3 py-2 rounded-md bg-[#0094B6]">
                <Add />
                <span className="ml-8 text-[14px] text-center font-bold leading-normal tracking-[0.5px] font-heebo text-[#FFF]">
                  New Dashboard
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-5 gap-x-10 gap-y-10 w-11/12 mx-auto ">
            <div className="bg-white rounded-lg shadow-dashboard-items">
              <div className="p-10 flex">
                <div className="p-6 rounded-full bg-[#F8F5FD]">
                  <Person />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    62
                  </p>
                  <p className="mt-2 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    Listeners
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items">
              <div className="p-10 flex">
                <div className="p-6 rounded-full bg-[#F1FCF8]">
                  <Mark />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    23
                  </p>
                  <p className="mt-2 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    New Followers
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items">
              <div className="p-10 flex">
                <div className=" p-6 rounded-full bg-[#FFF6F7]">
                  <UnderPerform />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    3
                  </p>
                  <p className="mt-2 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    Unfollows
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items">
              <div className="p-10 flex">
                <div className=" p-6 rounded-full bg-[#F2FAFF]">
                  <Music />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    83%
                  </p>
                  <p className="mt-2 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    New streams
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items">
              <div className="p-10 flex">
                <div className=" p-6 rounded-full bg-[#FFFAED]">
                  <Love />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    25
                  </p>
                  <p className="mt-2 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    Saved as playlist
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items">
              <div className="p-10 flex">
                <div className=" p-6 rounded-full bg-[#F2FAFF]">
                  <Clock />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    1396
                  </p>
                  <p className="mt-2 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    Streams total hours
                  </p>
                </div>
              </div>
            </div>
            <Fans />
            <PieChart/>
            {/* areachart */}
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}
