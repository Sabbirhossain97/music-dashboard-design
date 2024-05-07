import React from 'react'

export default function Fans() {
  return (
    <div className="bg-white rounded-lg shadow-dashboard-items row-span-4 sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-1">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between py-8">
          <p className="text-[#2E3B52] font-heebo text-[14px] not-italic font-bold leading-6 tracking-[0.14px]">
            Fans/Hours listening to you
          </p>
          <p className="flex items-center ">
            <span className="cursor-pointer  text-[#A6ACBE] font-heebo text-[14px] not-italic font-medium leading-6 tracking-[0.14px]">
              Descending
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="ml-1"
            >
              <path
                d="M6 8L10 12L14 8"
                stroke="#B0B9C7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
      <hr className="border-[#EEF0F6]" />
      <div className="flex flex-col space-y-6 mt-8">
        {[
          { icon: "avatar1", name: "Annette Watson", rating: "9.3" },
          { icon: "avatar2", name: "Calvin Steward", rating: "8.9" },
          { icon: "avatar3", name: "Ralph Richards", rating: "8.7" },
          { icon: "avatar4", name: "Bernard Murphy", rating: "8.2" },
          { icon: "avatar5", name: "Arlene Robertson", rating: "8.2" },
          { icon: "avatar6", name: "Jane Lane", rating: "8.1" },
          { icon: "avatar7", name: "Pat Mckinney", rating: "7.9" },
        ].map((item, key) => (
          <div
            key={key}
            className="flex items-center justify-between w-10/12 mx-auto"
          >
            <div className="flex items-center">
              <img src={`assets/dashboard/${item.icon}.png`} alt="avatar" />
              <p className="text-[#A6ACBE] ml-4 font-heebo text-[14px] not-italic font-medium leading-normal tracking-[0.14px]">
                {item.name}
              </p>
            </div>
            <div>
              <p className="text-[#2E3B52] mtext-right font-heebo text-[14px] not-italic font-bold leading-4 tracking-[0.14px]">
                {item.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 pb-5">
        <p className="cursor-pointer hover:text-blue-500 text-[#A6ACBE] text-center font-heebo text-[11px] not-italic font-normal leading-normal tracking-[0.11px]">
          Show More
        </p>
      </div>
    </div>
  );
}
