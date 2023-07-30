import React from "react";

export default function Users() {
  return (
    <div className="space-y-4 mt-4">
      <div className=" w-11/12 mx-auto px-6 py-4 bg-white rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className=" relative">
              <img src="assets/chat/user1.png" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="absolute top-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                  fill="#34D859"
                />
              </svg>
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
      <div className=" w-11/12 mx-auto px-6 py-4 bg-white rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className="relative">
              <img src="assets/chat/user2.png" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="absolute top-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                  fill="white"
                />
                <path
                  opacity="0.2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                  fill="#181C2F"
                />
              </svg>
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
              <img src="assets/chat/user3.png" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="absolute top-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                  fill="#292F4C"
                />
                <path
                  opacity="0.4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                  fill="white"
                />
              </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
            >
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8304 4.65218C13.9435 4.76296 14 4.89408 14 5.04575C14 5.19739 13.9435 5.32842 13.8304 5.4392L10.2856 8.91076V9.52286C10.2856 9.76782 10.4018 9.93962 10.634 10.0388C10.7113 10.0679 10.7857 10.0825 10.8571 10.0825C11.0179 10.0825 11.1519 10.0271 11.259 9.91634L15.8304 5.43923C15.9434 5.32842 16 5.19733 16 5.04575C16 4.89417 15.9434 4.76305 15.8304 4.65218L11.259 0.17504C11.0864 -0.00569609 10.8781 -0.0463701 10.6341 0.0525584C10.4019 0.151732 10.2858 0.323677 10.2858 0.568518V1.17192L13.8304 4.65218ZM6.85739 2.85955C4.41093 3.0228 2.62819 3.66688 1.5092 4.792C0.503139 5.80061 0.000156403 7.28414 0 9.24292C0 9.58096 0.0506296 9.97003 0.151765 10.4103C0.252993 10.8505 0.367513 11.2527 0.49551 11.617C0.623507 11.9814 0.766578 12.3456 0.924222 12.7101C1.08196 13.0745 1.20248 13.3383 1.28573 13.5016L1.46426 13.8514C1.51198 13.9504 1.59523 14 1.71425 14C1.74997 14 1.77674 13.9972 1.79459 13.9913C1.94345 13.9447 2.01171 13.8456 1.99996 13.694C1.74399 11.3619 2.0595 9.7152 2.94644 8.75333C3.32743 8.33939 3.8348 8.01734 4.46869 7.78705C5.10286 7.55679 5.89889 7.40377 6.85714 7.32797V9.52286C6.85714 9.76782 6.97335 9.93962 7.20548 10.0388C7.28288 10.0679 7.35725 10.0825 7.42864 10.0825C7.58938 10.0825 7.72316 10.0271 7.83049 9.91634L12.4018 5.43923C12.5149 5.32842 12.5714 5.19733 12.5714 5.04575C12.5714 4.8942 12.515 4.76308 12.4018 4.65218L7.83061 0.17504C7.65802 -0.00569609 7.44965 -0.0463701 7.20564 0.0525584C6.9735 0.151732 6.85739 0.323677 6.85739 0.568518V2.85955Z"
                fill="white"
              />
            </svg>
            <span className="ml-2">
              I remember everything mate. See you later 🤘
            </span>
          </p>
        </div>
      </div>
      <div className=" w-11/12 mx-auto px-6 py-4 bg-white rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className="relative">
              <img src="assets/chat/user4.png" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="absolute top-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                  fill="#34D859"
                />
              </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="#292F4C"
              className="text-[#292F4C] "
            >
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8304 4.65218C13.9435 4.76296 14 4.89408 14 5.04575C14 5.19739 13.9435 5.32842 13.8304 5.4392L10.2856 8.91076V9.52286C10.2856 9.76782 10.4018 9.93962 10.634 10.0388C10.7113 10.0679 10.7857 10.0825 10.8571 10.0825C11.0179 10.0825 11.1519 10.0271 11.259 9.91634L15.8304 5.43923C15.9434 5.32842 16 5.19733 16 5.04575C16 4.89417 15.9434 4.76305 15.8304 4.65218L11.259 0.17504C11.0864 -0.00569609 10.8781 -0.0463701 10.6341 0.0525584C10.4019 0.151732 10.2858 0.323677 10.2858 0.568518V1.17192L13.8304 4.65218ZM6.85739 2.85955C4.41093 3.0228 2.62819 3.66688 1.5092 4.792C0.503139 5.80061 0.000156403 7.28414 0 9.24292C0 9.58096 0.0506296 9.97003 0.151765 10.4103C0.252993 10.8505 0.367513 11.2527 0.49551 11.617C0.623507 11.9814 0.766578 12.3456 0.924222 12.7101C1.08196 13.0745 1.20248 13.3383 1.28573 13.5016L1.46426 13.8514C1.51198 13.9504 1.59523 14 1.71425 14C1.74997 14 1.77674 13.9972 1.79459 13.9913C1.94345 13.9447 2.01171 13.8456 1.99996 13.694C1.74399 11.3619 2.0595 9.7152 2.94644 8.75333C3.32743 8.33939 3.8348 8.01734 4.46869 7.78705C5.10286 7.55679 5.89889 7.40377 6.85714 7.32797V9.52286C6.85714 9.76782 6.97335 9.93962 7.20548 10.0388C7.28288 10.0679 7.35725 10.0825 7.42864 10.0825C7.58938 10.0825 7.72316 10.0271 7.83049 9.91634L12.4018 5.43923C12.5149 5.32842 12.5714 5.19733 12.5714 5.04575C12.5714 4.8942 12.515 4.76308 12.4018 4.65218L7.83061 0.17504C7.65802 -0.00569609 7.44965 -0.0463701 7.20564 0.0525584C6.9735 0.151732 6.85739 0.323677 6.85739 0.568518V2.85955Z"
                fill="#292F4C"
              />
            </svg>
            <span className="ml-2">I will miss you, too, my dear!</span>
          </p>
        </div>
      </div>
      <div className=" w-11/12 mx-auto px-6 py-4 bg-white rounded-md shadow-users">
        <div className="flex justify-between">
          <div className="flex">
            <div className="relative">
              <img src="assets/chat/user5.png" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="absolute top-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                  fill="#34D859"
                />
              </svg>
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
