import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Search from "./svg/home/Search";
import Like from "./svg/home/Like";
import Save from "./svg/home/Save";
import Share from "./svg/home/Share";
import Group from "./svg/home/Group";
import Recorder from "./svg/home/Recorder";
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="bg-[#F8F8FB] ">
          <div className=" flex justify-center w-full  ">
            <div className="relative  w-1/2">
              <input
                className="indent-16 w-full rounded-[50px] bg-white py-5 mt-11 shadow-xl placeholder:text-[#C4C4C4] placeholder:font-heebo placeholder:text-[16px] placeholder:not-italic placeholder:font-normal placeholder:leading-5 placeholder:tracking-[0.16px]"
                placeholder="Search for new music, news, artists..."
              />
              <Search />
            </div>
          </div>
          <div className=" w-11/12 mx-auto flex mt-8">
            <div>
              <p className="font-heebo text-[24px] text-[#3F4B5E] not-italic font-bold leading-normal tracking-[0.24px]">
                Trendings
              </p>
              <img src="assets/home/concert.png" className="mt-2" />
            </div>
            <div className="flex ml-10">
              <div>
                <p className="font-heebo text-[24px] text-[#3F4B5E] not-italic font-bold leading-normal tracking-[0.24px]">
                  Artist of the week
                </p>
                <img src="assets/home/Artist.png" className="mt-2" />
              </div>
              <div className="mt-16 ml-5">
                <p className="font-heebo text-[10px] text-[#2E3B52] not-italic font-semibold leading-4 ">
                  // Album
                </p>
                <p className="mt-[17px] text-[#2E3B52] font-sans text-[50px] not-italic font-bold leading-5">
                  Always Authentic
                </p>
                <p className="mt-6 text-[#A6ACBE] font-sans-pro text-[18px] not-italic font-normal leading-5">
                  Monica Lee
                </p>
                <p className="mt-4 text-[#A6ACBE] font-sans text-[12px] not-italic font-normal leading-4">
                  The artists we represent are one of the most successful in
                  Virginia and also were a <br /> huge breakthrough in the
                  international market, topping radio and sales around the
                  <br />
                  world.
                </p>
                <div className="mt-10">
                  <div className=" ">
                    {[
                      {
                        id: 1,
                        text1: "No more time",
                        count: "42,822",
                        time: "3:21",
                      },
                      {
                        id: <Recorder />,
                        text1: "Go away",
                        count: "67,420",
                        time: "3:30",
                        shadow: "shadow-home-artist",
                        borderRadius: "3px",
                        background: "bg-white"
                      },
                      {
                        id: 3,
                        text1: "With you",
                        count: "38,556",
                        time: "3:56",
                      },
                      {
                        id: 4,
                        text1: "Always authentic",
                        count: "35,820",
                        time: "3:30",
                      },
                      {
                        id: 5,
                        text1: "No more show",
                        count: "51,432",
                        time: "4:01",
                      },
                    ].map((item, key) => (
                      <div
                        key={key}
                        className={`justify-start grid grid-cols-11 py-2 ${item.shadow} ${item.background} ${item.borderRadius}`}
                      >
                        <div className=" flex justify-center col-span-1">
                          <p className="opacity-50 font-heebo text-[12px] not-italic font-semibold leading-4 text-[#0F1E36]">
                            {item.id}
                          </p>
                        </div>
                        <div className=" col-span-4 flex ">
                          <Like />
                          <p className="ml-4 opacity-50 text-[#0F1E36] font-heebo text-[12px] not-italic font-semibold">
                            {item.text1}
                          </p>
                        </div>
                        <div className=" col-span-1 flex justify-end px-2 items-center">
                          {" "}
                          <p className="opacity-50 text-[#0F1E36] font-heebo text-[12px] not-italic font-semibold leading-4">
                            {item.count}
                          </p>
                        </div>
                        <div className=" col-span-1 flex justify-end items-center">
                          <p className=" opacity-50 text-[#0F1E36] font-heebo text-[12px] not-italic font-semibold leading-4">
                            {item.time}
                          </p>
                        </div>
                        <div className=" col-span-1 flex justify-end items-center">
                          <Save />
                        </div>
                        <div className=" col-span-1 flex justify-end items-center">
                          <Share />
                        </div>
                        <div className=" col-span-1 flex justify-end items-center">
                          <Group />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" text-center mt-6">
                    <p className="font-heebo text-[12px] not-italic font-semibold leading-4 text-[#5D6C76]">
                      Listen to full album
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
