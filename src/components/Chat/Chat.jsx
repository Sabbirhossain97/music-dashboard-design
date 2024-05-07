import React from "react";
import Sidebar from "../Navigation/Sidebar";
import Header from "../Navigation/Header";
import Users from "./Users";
import { SalesDropDown, Add, Link, Emoji, Audio, Phone, Video, Options, Send, Dot, ChatPlayIcon, Facebook, Twitter, Instagram } from "../SvgComponents/SVG";


export default function Chat() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="w-full xl:w-11/12 mx-auto flex flex-col gap-10 xl:gap-0 xl:flex-row">
          <div className="w-full xl:w-1/4 bg-[#F8F8FB] pb-10 pt-2">
            <div className="mx-auto w-11/12 flex justify-center mt-8">
              <input
                placeholder="Search for user..."
                className=" py-3 w-full indent-5 rounded-[50px] bg-white shadow-lg placeholder:text-[16px] placeholder:text-[#C4C4C4] placeholder:font-heebo placeholder:not-italic placeholder:font-normal placeholder:leading-5 placeholder:tracking-[0.16px]"
              />
            </div>
            <div className="w-11/12 mx-auto mt-9 flex items-center justify-between">
              <p className="flex  text-[#181C2F] font-lato text-[14px] not-italic font-bold leading-4 ">
                <span className="opacity-50"> Sort By: &nbsp;&nbsp;&nbsp;</span>
                <span className="flex items-center gap-1 text-[#181C2F] text-[14px] font-heebo not-italic font-medium leading-4">
                  Latest First
                  <SalesDropDown />
                </span>
              </p>
              <p className="px-2 flex items-center text-[#181C2F] font-lato text-[14px] not-italic font-bold leading-4 opacity-50">
                Add New
                <span className="cursor-pointer bg-[#0094B6] hover:bg-[#4adeff] opacity-100 rounded-full p-2 ml-3">
                  <Add />
                </span>
              </p>
            </div>
            <Users />
          </div>
          {/* chat container */}
          <div className="w-11/12 mx-auto xl:w-1/2">
            <div className="flex flex-row justify-between px-2 border-b border-[#EFECE8] py-6">
              <div className="flex w-full sm:w-1/2">
                <img src="assets/chat/user3.png" alt="user" />
                <div className="ml-3 flex sm:flex-col justify-start items-center sm:items-start">
                  <p className="text-[#373B53] font-heebo text-[18px] not-italic font-bold leading-6">
                    Fred Williams
                  </p>
                  <p className="hidden sm:flex mt-1 whitespace-nowrap opacity-40 items-center text-[#181C2F] font-heebo text-[14px] not-italic font-medium leading-5">
                    Offline
                    <Dot />
                    &nbsp; Last seen 3 hours ago
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 flex items-center justify-end space-x-6">
                <Phone />
                <Video />
                <Options />
              </div>
            </div>
            <div className="mt-10 px-6">
              <div>
                <div className="inline-flex border border-[#292F4C] justify-start py-4 px-4 rounded-full">
                  <p className="text-[#373B53] font-heebo text-[16px] not-italic font-medium leading-5">
                    Hi Alex! What’s Up?
                  </p>
                </div>
                <div className="ml-6">
                  <p className="text-[#1A2028] font-heebo text-[12px] not-italic font-normal leading-3 mt-2 opacity-50">
                    Yesterday 14:26 PM
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end mt-4">
                <div>
                  <p className=" text-white font-heebo text-[16px] not-italic font-medium leading-[18px] py-4 px-6 rounded-full bg-[#0094B6]">
                    Oh, hello! All perfectly.
                    <br /> I work, study and know this wonderful world!
                  </p>
                </div>
                <div className="mr-5">
                  <p className="text-[#1A2028] font-heebo text-[12px] not-italic font-normal leading-3 mt-2 opacity-50">
                    Yesterday 14:38 PM
                  </p>
                </div>
              </div>
              <div className="mt-4 ">
                <div className="inline-flex py-4 px-6 space-x-3 rounded-full border-[#292F4C] items-center justify-start border">
                  <div className="w-1/6">
                    <ChatPlayIcon />
                  </div>
                  <div className="w-4/5">
                    <img src="assets/chat/Timeline.png" alt="timeline"/>
                  </div>
                  <div className="w-1/6">
                    <p className="font-heebo text-[#1A2028] text-[14px] not-italic font-normal leading-5">
                      01:24
                    </p>
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-[#1A2028] font-heebo text-[12px] not-italic font-normal leading-3 mt-2 opacity-50">
                    Yesterday 19:26 PM
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-end">
                  <p className="py-4 px-6 border text-white font-heebo text-[16px] not-italic font-medium leading-5 rounded-full bg-[#0094B6]">
                    I remember everything mate. See you later 🤘
                  </p>
                </div>
                <div className="flex justify-end mr-5">
                  <p className="text-[#1A2028] font-heebo text-[12px] not-italic font-normal leading-3 mt-2 opacity-50">
                    Today 06:18 AM
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-36 w-11/12 mx-auto relative">
              <textarea
                className="w-full resize-none py-6 px-6 rounded-2xl bg-[#DEE5EF] bg-opacity-40 placeholder:text-[#A6ACBE] placeholder:font-lato placeholder:text-[16px] placeholder:not-italic placeholder:font-normal placeholder:leading-5"
                placeholder="Type a message here…"
                rows="4"
              />
              <div className="border border-black flex gap-4 absolute right-0 bottom-2 items-center">
                <div className="flex space-x-6 items-center absolute bottom-4 right-4">
                  <Link />
                  <Emoji />
                  <Audio />
                  <Send />
                </div>
              </div>
            </div>
          </div>
          {/* user details container */}
          <div className="bg-[#F8F8FB] w-full xl:w-1/4 ">
            <div className="flex justify-center items-center flex-col pt-20">
              <div>
                <img src="assets/chat/userBig.png" alt="user" />
              </div>
              <div className=" space-y-6 py-10">
                <p className="text-[#373B53] text-center font-heebo text-[20px] not-italic font-bold leading-5">
                  Fred Williams
                </p>
                <p className="text-[#181C2F] opacity-50 text-center font-heebo text-[16px] not-italic font-normal leading-normal">
                  Leeds, England
                </p>
                <p className="text-[#373B53] text-center font-heebo text-[14px] not-italic font-normal leading-normal">
                  DJ, Producer.
                  <br /> I love play guitar as well on free time.
                </p>
                <div className="flex justify-center gap-6">
                  <Facebook />
                  <Twitter />
                  <Instagram />
                </div>
                <hr className="text-[#EFECE8]" />
                <div className="space-y-5 ">
                  <div className="text-[#181C2F] font-heebo text-[14px] not-italic font-bold leading-normal">
                    <span className="opacity-40">Phone:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#181C2F] font-heebo text-[14px] not-italic font-normal leading-normal">+(00) 21 23 55 89</span>
                  </div>
                  <div className="text-[#181C2F] font-heebo text-[14px] not-italic font-bold leading-normal ">
                    <span className="opacity-40">E-mail:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#181C2F] font-heebo text-[14px] not-italic font-normal leading-normal">info@fredwilliams.com</span>
                  </div>
                  <div className="text-[#181C2F] font-heebo text-[14px] not-italic font-bold leading-normal ">
                    <span className="opacity-40">DOB:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#181C2F] font-heebo text-[14px] not-italic font-normal leading-normal">12.01.1989</span>
                  </div>
                </div>
                <hr className="text-[#EFECE8]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
