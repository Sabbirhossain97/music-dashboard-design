import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Users from "./Users";
import DropDown from "../svg/chat/DropDown";
import Add from "../svg/chat/Add";
export default function Chat() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" w-full ml-[100px] ">
        <Header />
        <div className="w-full border mx-auto flex">
          <div className=" w-1/4 bg-[#F8F8FB] pb-10 pt-2">
            <div className="mx-auto w-11/12 flex justify-center mt-8">
              <input
                placeholder="Search for user..."
                className=" py-3 w-full indent-5 rounded-[50px] bg-white shadow-lg placeholder:text-[16px] placeholder:text-[#C4C4C4] placeholder:font-heebo placeholder:not-italic placeholder:font-normal placeholder:leading-5 placeholder:tracking-[0.16px]"
              />
            </div>
            <div className="w-11/12 mx-auto mt-9 flex items-center justify-between">
              <p className="flex text-[#181C2F] font-lato text-[14px] not-italic font-bold leading-4 ">
                <span className="opacity-50"> Sort By: &nbsp;&nbsp;&nbsp;</span>
                <span className="flex items-center text-[#181C2F] text-[14px] font-heebo not-italic font-medium leading-4">
                  Latest First
                  <DropDown />
                </span>
              </p>
              <p className="px-2 flex items-center text-[#181C2F] font-lato text-[14px] not-italic font-bold leading-4 opacity-50">
                Add New
                <span className="bg-[#0094B6] opacity-100 rounded-full p-2 ml-3">
                  <Add />
                </span>
              </p>
            </div>
            <Users />
          </div>
          {/* chat container */}
          <div className="w-1/2">
            <div className="flex justify-between px-2 border-b border-[#EFECE8] py-6">
              <div className="flex ml-8">
                <img src="assets/chat/user3.png" />
                <div className="ml-3">
                  <p className="text-[#373B53] font-heebo text-[18px] not-italic font-bold leading-6">
                    Fred Williams
                  </p>
                  <p className="mt-1 flex opacity-40 items-center text-[#181C2F] font-heebo text-[14px] not-italic font-medium leading-5">
                    Offline{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5"
                      height="5"
                      viewBox="0 0 5 5"
                      fill="none"
                      className="ml-2"
                    >
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.30106 4.26314C3.46377 4.26314 4.40633 3.32058 4.40633 2.15788C4.40633 0.99517 3.46377 0.0526123 2.30106 0.0526123C1.13836 0.0526123 0.195801 0.99517 0.195801 2.15788C0.195801 3.32058 1.13836 4.26314 2.30106 4.26314Z"
                        fill="#181C2F"
                      />
                    </svg>{" "}
                    &nbsp; Last seen 3 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g opacity="0.3">
                    <path
                      d="M17.4518 13.7934L17.3661 13.5408C17.163 12.9506 16.4973 12.335 15.8857 12.1728L13.6223 11.5682C13.0085 11.405 12.133 11.6245 11.6839 12.0636L10.8647 12.8645C7.8877 12.078 5.55325 9.79533 4.7499 6.88503L5.5691 6.08404C6.01818 5.64493 6.24269 4.78996 6.0757 4.1898L5.45851 1.97561C5.29152 1.37655 4.66079 0.725662 4.0583 0.529269L3.79992 0.444329C3.19627 0.247937 2.33537 0.446554 1.88632 0.885621L0.660967 2.08484C0.442058 2.29775 0.302149 2.90674 0.302149 2.90896C0.259291 6.7129 1.78476 10.3778 4.53666 13.0686C7.28181 15.7527 11.016 17.2421 14.8951 17.2101C14.9153 17.2101 15.5562 17.0755 15.7751 16.8626L17.0005 15.6644C17.4495 15.2254 17.6526 14.3837 17.4518 13.7934Z"
                      fill="#292F4C"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                >
                  <g opacity="0.3">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.11754 0.421021H14.6435C16.1637 0.421021 17.4075 1.62851 17.4075 3.16531V12.4136C17.4075 13.9229 16.1637 15.1579 14.6435 15.1579H3.11754C1.59733 15.1579 0.353516 13.9229 0.353516 12.4136V3.16531C0.353516 1.65595 1.59733 0.421021 3.11754 0.421021ZM23.102 2.12247C23.2402 2.04014 23.406 1.95781 23.5719 1.93037C24.6498 1.68338 25.6172 2.50667 25.6172 3.52205V12.0019C25.6172 12.3038 25.5343 12.5782 25.3961 12.8252C24.9262 13.621 23.9312 13.8955 23.1296 13.4289L18.7901 10.9591V4.59233L23.102 2.12247Z"
                      fill="#292F4C"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="7"
                  viewBox="0 0 29 7"
                  fill="none"
                >
                  <g opacity="0.3">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.985 6.94738C26.7291 6.94738 28.1429 5.53354 28.1429 3.78949C28.1429 2.04543 26.7291 0.631592 24.985 0.631592C23.241 0.631592 21.8271 2.04543 21.8271 3.78949C21.8271 5.53354 23.241 6.94738 24.985 6.94738Z"
                      fill="#292F4C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.4587 6.94738C16.2027 6.94738 17.6166 5.53354 17.6166 3.78949C17.6166 2.04543 16.2027 0.631592 14.4587 0.631592C12.7146 0.631592 11.3008 2.04543 11.3008 3.78949C11.3008 5.53354 12.7146 6.94738 14.4587 6.94738Z"
                      fill="#292F4C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.9328 6.94738C5.67685 6.94738 7.09069 5.53354 7.09069 3.78949C7.09069 2.04543 5.67685 0.631592 3.9328 0.631592C2.18874 0.631592 0.774902 2.04543 0.774902 3.78949C0.774902 5.53354 2.18874 6.94738 3.9328 6.94738Z"
                      fill="#292F4C"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="space-y-12 mt-8 px-6">
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
              <div className="flex flex-col justify-center items-end">
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
              <div>
                <div className="inline-flex py-4 px-6 space-x-3 rounded-full border-[#292F4C] items-center justify-start border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.933 42.3683C33.5601 42.3683 42.9856 32.9427 42.9856 21.3157C42.9856 9.68865 33.5601 0.263062 21.933 0.263062C10.306 0.263062 0.880371 9.68865 0.880371 21.3157C0.880371 32.9427 10.306 42.3683 21.933 42.3683Z"
                      fill="#0094B6"
                    />
                    <path
                      d="M28.9707 20.2167L18.5277 13.7129C18.2189 13.5312 17.8356 13.5615 17.546 13.5615C16.3879 13.5615 16.3931 14.4453 16.3931 14.6692V27.9624C16.3931 28.1517 16.388 29.0702 17.546 29.0702C17.8356 29.0702 18.219 29.1003 18.5277 28.9187L28.9706 22.4149C29.8278 21.9107 29.6797 21.3158 29.6797 21.3158C29.6797 21.3158 29.8279 20.7208 28.9707 20.2167Z"
                      fill="white"
                    />
                  </svg>
                  <img src="assets/chat/Timeline.png" />
                  <p className="font-heebo text-[#1A2028] text-[14px] not-italic font-normal leading-5">
                    01:24
                  </p>
                </div>
                <div className="ml-6">
                  <p className="text-[#1A2028] font-heebo text-[12px] not-italic font-normal leading-3 mt-2 opacity-50">
                    Yesterday 19:26 PM
                  </p>
                </div>
              </div>
              <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
