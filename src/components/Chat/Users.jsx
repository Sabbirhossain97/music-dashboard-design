import React from "react";
import { Offline, Online, ForwardIcon } from "../SvgComponents/SVG";

export default function Users() {
  return (
    <div className="space-y-4 mt-4">
      <div className=" w-11/12 mx-auto px-6 py-4 bg-white transition duration-300 hover:opacity-75 cursor-pointer rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className=" relative">
              <img src="assets/chat/user1.png" alt="user" />
              <Online />
            </div>
            <div className="ml-4">
              <p className="font-heebo text-[#373B53] text-[18px] font-bold leading-6">
                Peter Johnson
              </p>
              <p className="text-[#181C2F] font-heebo text-[14px] not-italic font-medium leading-6 opacity-40">
                Online
              </p>
            </div>
          </div>
          <p className="text-[16px] font-lato not-italic font-normal leading-5 text-[#181C2F] opacity-50">
            3h ago
          </p>
        </div>
        <div className=" mt-4">
          <p className="font-heebo text-[#181C2F] text-[14px] font-normal leading-5">
            Analysis of foreign experience, as it is commo…
          </p>
        </div>
      </div>
      <div className=" w-11/12 mx-auto px-6 py-4 bg-white transition duration-300 hover:opacity-75 cursor-pointer rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className="relative">
              <img src="assets/chat/user2.png" alt="user" />
              <Offline />
            </div>
            <div className="ml-4">
              <p className="font-heebo text-[#373B53] text-[18px] font-bold leading-6">
                Tina Dormun
              </p>
              <p className="text-[#181C2F] font-heebo text-[14px] not-italic font-medium leading-6 opacity-40">
                Offline
              </p>
            </div>
          </div>
          <p className="text-[16px] font-lato not-italic font-normal leading-5 text-[#181C2F] opacity-50">
            14.45 pm
          </p>
        </div>
        <div className=" mt-4">
          <p className="font-heebo text-[#181C2F] text-[14px] font-normal leading-5">
            It seems logical that the strategy of providing!
          </p>
        </div>
      </div>
      <div className=" w-11/12 mx-auto px-6 py-4 bg-[#373B53] border-l-4 border-[#0094B6] rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className="relative">
              <img src="assets/chat/user3.png" alt="user" />
              <Offline />
            </div>
            <div className="ml-4">
              <p className="font-heebo text-[#FFF] text-[18px] font-bold leading-6">
                Fred Williams
              </p>
              <p className="text-[#FFF] font-heebo text-[14px] not-italic font-medium leading-6 opacity-40">
                Offline
              </p>
            </div>
          </div>
          <p className="text-[16px] font-lato not-italic font-normal leading-5 text-[#FFF] opacity-50">
            06:18 am
          </p>
        </div>
        <div className=" mt-4">
          <p className="font-heebo text-[#FFF] text-[14px] font-normal leading-5 flex items-center">
            <ForwardIcon/>
            <span className="ml-2">
              I remember everything mate. See you later 🤘
            </span>
          </p>
        </div>
      </div>
      <div className=" w-11/12 mx-auto px-6 py-4 bg-white transition duration-300 hover:opacity-75 cursor-pointer rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className="relative">
              <img src="assets/chat/user4.png" alt="user" />
              <Online />
            </div>
            <div className="ml-4">
              <p className="font-heebo text-[#373B53] text-[18px] font-bold leading-6">
                Savana Watkins
              </p>
              <p className="text-[#181C2F] font-heebo text-[14px] not-italic font-medium leading-6 opacity-40">
                Online
              </p>
            </div>
          </div>
          <p className="text-[16px] font-lato not-italic font-normal leading-5 text-[#181C2F] opacity-50">
            15 Sep 2018
          </p>
        </div>
        <div className=" mt-4">
          <p className="font-heebo text-[#181C2F] flex items-center text-[14px] font-normal leading-5">
            <ForwardIcon/>
            <span className="ml-2">I will miss you, too, my dear!</span>
          </p>
        </div>
      </div>
      <div className=" w-11/12 mx-auto px-6 py-4 bg-white transition duration-300 hover:opacity-75 cursor-pointer rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className="relative">
              <img src="assets/chat/user5.png" alt="user" />
              <Online />
            </div>
            <div className="ml-4">
              <p className="font-heebo text-[#373B53] text-[18px] font-bold leading-6">
                John Norton
              </p>
              <p className="text-[#181C2F] font-heebo text-[14px] not-italic font-medium leading-6 opacity-40">
                Online
              </p>
            </div>
          </div>
          <p className="text-[16px] font-lato not-italic font-normal leading-5 text-[#181C2F] opacity-50">
            15 Sep 2018
          </p>
        </div>
        <div className=" mt-4">
          <p className="font-heebo text-[#181C2F] text-[14px] font-normal leading-5">
            Welcome to the community mate! 👍
          </p>
        </div>
      </div>
    </div>
  );
}
