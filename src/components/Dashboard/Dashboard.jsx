import React from "react";
import Sidebar from "../Navigation/Sidebar";
import Header from "../Navigation/Header";
import { Gear,DownArrow, Download, Add, Person, UnderPerform, Mark, Clock, Love, Music } from "../SvgComponents/SVG";
import Chart from "./Chart";
import Fans from "./Fans";
import PieChart from "./PieChart";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="bg-[#F8F8FB] w-full pb-16">
          <div className="flex flex-col md:flex-row justify-between w-11/12 gap-8 mx-auto py-10 ">
            <div className=" w-full md:w-1/5 whitespace-nowrap">
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
            <div className=" flex items-center justify-start md:justify-end flex-wrap gap-4 w-full md:w-4/5">
              <button className="flex px-3 py-3 border border-[#7D90B2] rounded-md">
                <Gear />
              </button>
              <button className="flex border border-[#7D90B2] rounded-md px-3 py-3">
                <span className="mt-0.5 text-[14px] whitespace-nowrap font-medium leading-normal tracking-[0.14px] font-heebo text-[#7D90B2]">
                  Last 7 days
                </span>
                <DownArrow />
              </button>
              <button className="flex gap-2 border px-3 py-3 border-[#7D90B2] rounded-md">
                <Download />
                <span className="text-[14px] whitespace-nowrap text-center font-bold leading-normal tracking-[0.14px] font-heebo text-[#7D90B2]">
                  Download as CSV
                </span>
              </button>
              <button className="flex gap-2 px-3 py-3 rounded-md bg-[#0094B6]">
                <Add />
                <span className="text-[14px] whitespace-nowrap text-center font-bold leading-normal tracking-[0.5px] font-heebo text-[#FFF]">
                  New Dashboard
                </span>
              </button>
            </div>
          </div>
          <div className="w-11/12 mx-auto grid gap-10 grid-rows-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div className="bg-white rounded-lg shadow-dashboard-items row-span-1 col-span-1 md:row-span-2 md:col-span-1">
              <div className="p-10 flex ">
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
            <div className="bg-white rounded-lg shadow-dashboard-items row-span-1 col-span-1 md:row-span-2 md:col-span-1">
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
            <div className="bg-white rounded-lg shadow-dashboard-items row-span-1 col-span-1 md:row-span-2 md:col-span-1">
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
            <div className="bg-white rounded-lg shadow-dashboard-items row-span-1 col-span-1 md:row-span-2 md:col-span-1">
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
            <div className="bg-white rounded-lg shadow-dashboard-items row-span-1 col-span-1 md:row-span-2 md:col-span-1">
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
            <div className="bg-white rounded-lg shadow-dashboard-items row-span-1 col-span-1 md:row-span-2 md:col-span-1">
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
            <PieChart />
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}
