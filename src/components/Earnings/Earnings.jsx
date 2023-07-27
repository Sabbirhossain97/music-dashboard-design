import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import DownArrow from "../svg/earnings/DownArrow";
import Gear from "../svg/earnings/Gear";
import Download from "../svg/earnings/Download";
import Person from "../svg/earnings/Person";
import Music from "../svg/earnings/Music";
import Mark from "../svg/earnings/Mark";
import Dollar from "../svg/earnings/Dollar";
import Sales from "./Sales";
export default function Earnings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[100px] w-full  ">
        <Header />
        <div className="bg-[#F8F8FB] pb-10">
          <div className="flex justify-between w-11/12 mx-auto py-10 ">
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
            <div className="flex items-center space-x-4">
              <button className="flex  px-3 py-3 border border-[#7D90B2] rounded-md">
                <Gear />
              </button>
              <button className="flex border border-[#7D90B2] rounded-md px-3 py-3">
                <span className="mt-0.5 text-[14px] font-medium leading-normal tracking-[0.14px] font-heebo text-[#7D90B2]">
                  Last 7 days
                </span>
                <DownArrow />
              </button>
              <button className="flex border px-3 py-3 border-[#7D90B2] rounded-md">
                <Download />
                <span className="ml-2 text-[14px] text-center font-bold leading-normal tracking-[0.14px] font-heebo text-[#7D90B2]">
                  Download as CSV
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-10 gap-y-10 w-11/12 mx-auto ">
            <div className="bg-white rounded-lg shadow-dashboard-items row-span-1">
              <div className="p-10 flex">
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
            <div className="bg-white rounded-lg shadow-dashboard-items row-span-1">
              <div className="p-10 flex">
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
            <div className="bg-white rounded-lg shadow-dashboard-items">
              <div className="p-10 flex">
                <div className=" p-6 rounded-full bg-[#FFF6F7]">
                  <Person />
                </div>
                <div className=" flex flex-col justify-center ml-8">
                  <p className="text-[28px] not-italic font-heebo text-[#2E3B52] font-bold leading-6 tracking-[0.28px]">
                    13
                  </p>
                  <p className="mt-3 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    New customers
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
                  <p className="mt-3 font-heebo text-[14px] text-[#A6ACBE] not-italic font-medium leading-normal tracking-[0.14px]">
                    New streams
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 row-span-2 col-span-4 gap-x-10">
              <div className="bg-white rounded-lg shadow-dashboard-items col-span-3 row-span-2">
                <Sales />
              </div>
              <div className="bg-white rounded-lg shadow-dashboard-items col-span-2 row-span-2 ">
                <div>
                  <div className=" py-10 w-10/12 mx-auto">
                    <p className="text-[#282D32] font-heebo text-[20px] not-italic font-bold leading-5">
                      Most value songs
                    </p>
                  </div>
                  <div className="w-10/12 mx-auto flex">
                    <div className="space-y-4 list-none font-heebo text-[14px] not-italic font-normal leading-normal">
                      <li>1. Always authentic</li>
                      <li>2. Not for me</li>
                      <li>3. See you tomorrow</li>
                      <li>4. Don’t worry</li>
                      <li>5. Go away</li>
                      <li>6. This is the end</li>
                      <li>7. Yestarday</li>
                      <li>8. Too late</li>
                    </div>
                    <div className="ml-24">
                      <img src="assets/earnings/chartImage.png" />
                    </div>
                  </div>
                  <div className=" w-10/12 mx-auto mt-6">
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
    </div>
  );
}
