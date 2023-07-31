import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Users from "./Users";
import DropDown from "../svg/chat/DropDown";
import Add from "../svg/chat/Add";
import Link from "../svg/chat/Link";
import Emoji from "../svg/chat/Emoji";
import Audio from "../svg/chat/Audio";
import Phone from "../svg/chat/Phone";
import Video from "../svg/chat/Video";
import Options from "../svg/chat/Options";
export default function Chat() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" w-full ml-[100px] ">
        <Header />
        <div className="w-full mx-auto flex">
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
          <div className="w-1/2 ">
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
                    </svg>
                    &nbsp; Last seen 3 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6 mr-4">
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
              <div className="mt-4">
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
              <div className="flex space-x-6 absolute right-0 bottom-2 items-center">
                <div className="flex space-x-6 items-center absolute bottom-4 right-24">
                  <Link />
                  <Emoji />
                  <Audio />
                </div>
                <div className="border-black">
                  <img src="assets/chat/send.png" />
                </div>
              </div>
            </div>
          </div>
          {/* user details container */}
          <div className="bg-[#F8F8FB] w-1/4 ">
            <div className="flex justify-center items-center flex-col pt-20">
              <div>
                <img src="assets/chat/userBig.png" />
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
                <div className="flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="173"
                    height="42"
                    viewBox="0 0 173 42"
                    fill="none"
                    className="text-center mt-5"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M152.076 41.3722C163.381 41.3722 172.546 32.2079 172.546 20.9031C172.546 9.59839 163.381 0.434082 152.076 0.434082C140.772 0.434082 131.607 9.59839 131.607 20.9031C131.607 32.2079 140.772 41.3722 152.076 41.3722Z"
                      fill="url(#paint0_linear_636_211)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M156.379 10.2593H147.774C144.278 10.2593 141.433 13.1042 141.433 16.601V25.2053C141.433 28.7022 144.278 31.5471 147.774 31.5471H156.379C159.876 31.5471 162.72 28.7022 162.72 25.2053V16.601C162.72 13.1042 159.875 10.2593 156.379 10.2593ZM160.579 25.2052C160.579 27.5249 158.698 29.4054 156.379 29.4054H147.774C145.455 29.4054 143.574 27.5249 143.574 25.2052V16.6009C143.574 14.2812 145.455 12.4007 147.774 12.4007H156.379C158.698 12.4007 160.579 14.2812 160.579 16.6009V25.2052ZM146.57 20.903C146.57 17.8672 149.04 15.3973 152.076 15.3973C155.112 15.3973 157.582 17.8671 157.582 20.903C157.582 23.9389 155.112 26.4088 152.076 26.4088C149.04 26.4088 146.57 23.9389 146.57 20.903ZM152.077 24.2673C150.219 24.2673 148.712 22.7611 148.712 20.9031C148.712 19.045 150.219 17.5388 152.077 17.5388C153.935 17.5388 155.441 19.045 155.441 20.9031C155.441 22.7611 153.935 24.2673 152.077 24.2673ZM158.912 15.4386C158.912 16.1673 158.322 16.7579 157.593 16.7579C156.864 16.7579 156.274 16.1673 156.274 15.4386C156.274 14.71 156.864 14.1193 157.593 14.1193C158.322 14.1193 158.912 14.71 158.912 15.4386Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M86.5755 41.3722C97.8802 41.3722 107.045 32.2079 107.045 20.9031C107.045 9.59839 97.8802 0.434082 86.5755 0.434082C75.2708 0.434082 66.1064 9.59839 66.1064 20.9031C66.1064 32.2079 75.2708 41.3722 86.5755 41.3722Z"
                      fill="#2AA3EF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M95.5816 15.2787C94.9193 15.5746 94.2061 15.7746 93.459 15.8651C94.222 15.404 94.808 14.6755 95.0836 13.807C94.3693 14.2333 93.5788 14.5429 92.7363 14.7092C92.0623 13.9859 91.1023 13.5343 90.0394 13.5343C87.9984 13.5343 86.3432 15.1998 86.3432 17.2548C86.3432 17.5475 86.3771 17.8307 86.4396 18.1033C83.3686 17.9486 80.6462 16.4663 78.8235 14.2154C78.5046 14.765 78.3234 15.404 78.3234 16.0862C78.3234 17.3769 78.9761 18.516 79.9669 19.1824C79.3608 19.1635 78.7907 18.9961 78.2937 18.7171C78.2937 18.7329 78.2937 18.7487 78.2937 18.7645C78.2937 20.5668 79.5664 22.0702 81.2577 22.4123C80.9472 22.4976 80.6218 22.5428 80.2838 22.5428C80.0464 22.5428 79.8143 22.5197 79.5886 22.4755C80.0591 23.9536 81.424 25.0295 83.0411 25.06C81.7759 26.057 80.1821 26.6518 78.4505 26.6518C78.1527 26.6518 77.8581 26.635 77.5688 26.6002C79.204 27.6561 81.1464 28.272 83.234 28.272C90.0309 28.272 93.7483 22.6029 93.7483 17.6864C93.7483 17.5243 93.7441 17.3653 93.7377 17.2053C94.4594 16.681 95.0867 16.0252 95.5816 15.2798V15.2787Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.0745 41.3722C32.3793 41.3722 41.5436 32.2079 41.5436 20.9031C41.5436 9.59839 32.3793 0.434082 21.0745 0.434082C9.76977 0.434082 0.605469 9.59839 0.605469 20.9031C0.605469 32.2079 9.76977 41.3722 21.0745 41.3722Z"
                      fill="#3D5A96"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.1504 29.9095H18.1575V21.4037H16.1621V18.1259H18.1575V16.1596C18.1575 13.4876 19.2841 11.8967 22.485 11.8967H25.1495V15.1745H23.4847C22.2383 15.1745 22.1554 15.632 22.1554 16.487L22.1504 18.1259H25.1685L24.8149 21.4037H22.1504V29.9095Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_636_211"
                        x1="131.744"
                        y1="0.365695"
                        x2="131.607"
                        y2="41.3038"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#7024C4" />
                        <stop offset="0.415461" stop-color="#C21975" />
                        <stop offset="0.702206" stop-color="#C74C4D" />
                        <stop offset="1" stop-color="#E09B3D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <hr className="text-[#EFECE8]" />
                <div className="space-y-5 ">
                  <div className="text-[#181C2F] font-heebo text-[14px] not-italic font-bold leading-normal">
                    <span className="opacity-40">Phone:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#181C2F] font-heebo text-[14px] not-italic font-normal leading-normal">+(00) 21 23 55 89</span>
                  </div>
                  <div className="text-[#181C2F] font-heebo text-[14px] not-italic font-bold leading-normal ">
                    <span className="opacity-40">E-mail:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span  className="text-[#181C2F] font-heebo text-[14px] not-italic font-normal leading-normal">info@fredwilliams.com</span>
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
