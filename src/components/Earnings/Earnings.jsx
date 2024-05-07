import React from "react";
import Sidebar from "../Navigation/Sidebar";
import Header from "../Navigation/Header";
import { DownArrow, Gear, Download, Person, Music, Mark, Dollar } from "../SvgComponents/SVG";
import Sales from "./Sales";

export default function Earnings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full min-h-screen">
        <Header />
        <div className="bg-[#F8F8FB] flex flex-col w-full">
          <div className="flex flex-col gap-4 md:gap-0 md:flex md:flex-row md:justify-between w-11/12 mx-auto py-10 ">
            <div className="">
              <p className="text-[30px] font-heebo text-[#373B53] not-italic font-semibold leading-normal tracking-[0.3px]">
                Earnings
              </p>
              <p className="flex items-center text-[14px] font-medium leading-normal tracking-[0.14px] font-heebo text-[#A6ACBE]">
                My new amazing album
                <span>
                  <DownArrow />
                </span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="flex px-3 py-3 border border-[#7D90B2] hover:border-[#0094B6] transition duration-300 rounded-md">
                <Gear />
              </button>
              <button className="flex border border-[#7D90B2] hover:border-[#0094B6] transition duration-300 rounded-md px-3 py-3">
                <span className="mt-0.5 text-[14px] whitespace-nowrap font-medium leading-normal tracking-[0.14px] font-heebo text-[#7D90B2]">
                  Last 7 days
                </span>
                <DownArrow />
              </button>
              <button className="flex border px-3 py-3 border-[#7D90B2] hover:border-[#0094B6] transition duration-300 rounded-md">
                <Download />
                <span className="ml-2 text-[14px] whitespace-nowrap text-center font-bold leading-normal tracking-[0.14px] font-heebo text-[#7D90B2]">
                  Download as CSV
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-1 gap-10 w-11/12 mx-auto ">
            <div className="bg-white rounded-lg shadow-dashboard-items col-span-full row-span-1 sm:col-span-2 md:col-span-2 xl:col-span-1">
              <div className="p-10 h-full flex items-center justify-center md:justify-start ">
                <div className="p-6 rounded-full bg-[#F0FDF0]">
                  <Dollar />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    $620
                  </p>
                  <p className="mt-3 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    Your balance
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items col-span-full sm:col-span-2 md:col-span-2 xl:col-span-1">
              <div className="p-10 h-full flex items-center justify-center md:justify-start ">
                <div className="p-6 rounded-full bg-[#FCF1F6]">
                  <Mark />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    23
                  </p>
                  <p className="mt-3 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    Purchases
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items col-span-full sm:col-span-2 md:col-span-2 xl:col-span-1">
              <div className="p-10 h-full flex items-center justify-center md:justify-start ">
                <div className=" p-6 rounded-full bg-[#FFF6F7]">
                  <Person />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    13
                  </p>
                  <p className="mt-3 whitespace-nowrap font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    New customers
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items col-span-full sm:col-span-2 md:col-span-2 xl:col-span-1">
              <div className="p-10 h-full flex items-center justify-center md:justify-start ">
                <div className=" p-6 rounded-full bg-[#F2FAFF]">
                  <Music />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    83%
                  </p>
                  <p className="mt-3 whitespace-nowrap font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    New streams
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg col-span-full xl:col-span-2 row-span-2">
              <Sales />
            </div>
            <div className="bg-white rounded-lg shadow-dashboard-items col-span-full xl:col-span-2 row-span-2 ">
              <div >
                <div className="py-10 w-10/12 mx-auto">
                  <p className="text-[#282D32] font-heebo text-[20px] not-italic font-bold leading-5">
                    Most valued songs
                  </p>
                </div>
                <div className="w-10/12 mx-auto flex gap-4">
                  <div className="whitespace-nowrap space-y-4 list-none font-heebo text-[14px] not-italic font-normal leading-normal">
                    <li>1. Always authentic</li>
                    <li>2. Not for me</li>
                    <li>3. See you tomorrow</li>
                    <li>4. Don’t worry</li>
                    <li>5. Go away</li>
                    <li>6. This is the end</li>
                    <li>7. Yestarday</li>
                    <li>8. Too late</li>
                  </div>
                  <div className="ml-0 sm:ml-24 flex items-center">
                    <img src="assets/earnings/chartImage.png" className="w-full h-auto" alt="chart" />
                  </div>
                </div>
                <div className=" w-10/12 mx-auto mt-6 pb-6">
                  <p className="text-[#A6ACBE] cursor-pointer hover:text-blue-500 font-heebo text-[11px] not-italic font-normal leading-normal tracking-[0.11px]">
                    Show more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
