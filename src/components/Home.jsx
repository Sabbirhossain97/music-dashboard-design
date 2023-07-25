import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Search from "./svg/home/Search";
import Like from "./svg/home/Like";
import Save from "./svg/home/Save";
import Share from "./svg/home/Share";
import Group from "./svg/home/Group";
import Recorder from "./svg/home/Recorder";
import Play from "./svg/home/Play";
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ml-[100px]">
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
          <div className=" w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2  mt-8 gap-x-8 gap-y-8">
            {/* first section */}
            <div>
              <p className="font-heebo text-[24px] text-[#3F4B5E] not-italic font-bold leading-normal tracking-[0.24px]">
                Trendings
              </p>
              <div className="relative">
                <div>
                  <img src="assets/home/concert.png" className="mt-2 " />
                </div>
                <div className="absolute top-1/4 left-[53px]">
                  <p className="text-white font-sans text-[10px] not-italic font-semibold leading-4">
                    // TRENDING
                  </p>
                  <p className="mt-2 text-white font-sans text-[28px] not-italic font-bold leading-7 capitalize">
                    Red Snapper:
                    <br /> Performance Review
                  </p>
                  <p className="mt-2 text-white font-sans text-[16px] not-italic font-semibold leading-4">
                    - Kamelia
                  </p>
                  <div className="flex  mt-11">
                    <button className="rounded-[3px] flex  items-center shadow-play  text-[#0094B6] px-6 py-2 bg-white font-sans text-[10px] not-italic font-semibold leading-3">
                      <span className="mt-0.5">PLAY</span>
                      <Play />
                    </button>
                    <button className="px-2 bg-white rounded-[3px] shadow-play ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2471 12C11.4664 11.9991 10.7803 11.4096 10.5644 10.5541L4.06702 8.46197C3.34821 9.36392 2.18445 9.59494 1.24065 9.02302C0.296857 8.4511 -0.186485 7.22197 0.0667887 6.03791C0.320062 4.85385 1.24541 4.01657 2.31414 4.00444C2.91427 4.00359 3.49169 4.26602 3.92679 4.73737L7.89414 1.62576C8.05141 0.681892 8.77529 -0.000873401 9.6178 8.38595e-07C10.5859 8.38595e-07 11.3707 0.894934 11.3707 1.99889C11.3707 3.10285 10.5859 3.99778 9.6178 3.99778C9.29511 3.99778 9.03351 3.69947 9.03351 3.33148C9.03351 2.9635 9.29511 2.66519 9.6178 2.66519C9.92734 2.66063 10.18 2.38157 10.194 2.02891C10.2079 1.67626 9.9782 1.37243 9.67027 1.33617C9.36235 1.29992 9.08307 1.54382 9.03351 1.89228C8.97956 2.23432 8.80405 2.53573 8.54855 2.72515L4.13129 6.18323C3.99178 6.29207 3.81778 6.32668 3.6542 6.27813C3.49062 6.22957 3.3535 6.10262 3.27822 5.93004C2.99715 5.43371 2.46304 5.20769 1.96608 5.37477C1.46911 5.54186 1.12796 6.06214 1.12796 6.65297C1.12796 7.2438 1.46911 7.76409 1.96608 7.93117C2.46304 8.09825 2.99715 7.87223 3.27822 7.3759C3.40761 7.10118 3.68678 6.96553 3.95016 7.04942L10.8507 9.24153C11.2479 9.36919 11.5566 9.72629 11.6628 10.181C11.7466 10.5074 12.0325 10.7095 12.3261 10.6499C12.6197 10.5902 12.8268 10.2879 12.8066 9.9486C12.7863 9.60928 12.5451 9.34184 12.2471 9.32815C11.9244 9.32815 11.6628 9.02984 11.6628 8.66185C11.6628 8.29387 11.9244 7.99556 12.2471 7.99556C13.2152 7.99556 14 8.89049 14 9.99445C14 11.0984 13.2152 11.9933 12.2471 11.9933V12Z"
                          fill="#0094B6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="78"
                  height="11"
                  viewBox="0 0 78 11"
                  fill="none"
                  className="absolute bottom-4 left-[45%]"
                >
                  <circle cx="6" cy="5.5" r="5.5" fill="#F8F8FB" />
                  <circle cx="22.5" cy="5.5" r="5.5" fill="#0094B6" />
                  <circle cx="39" cy="5.5" r="5.5" fill="#F8F8FB" />
                  <circle cx="55.5" cy="5.5" r="5.5" fill="#F8F8FB" />
                  <circle cx="72" cy="5.5" r="5.5" fill="#F8F8FB" />
                </svg>
              </div>
            </div>
            {/* second section */}
            <div className="flex">
              <div>
                <p className="font-heebo text-[24px] text-[#3F4B5E] not-italic font-bold leading-normal tracking-[0.24px]">
                  Artist of the week
                </p>
                <img src="assets/home/Artist.png" className="mt-2" />
              </div>
              <div className="mt-16 ml-8 ">
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
                        background: "bg-white",
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
            {/* third section  */}
            <div className=" container mx-auto ">
              <p className="font-heebo text-[24px] not-italic font-bold leading-6 text-[#3F4B5E]">
                More news
              </p>
              <div className="-m-1  flex flex-wrap md:-m-2">
                <div className="flex w-full flex-wrap mt-3">
                  <div className="w-1/3 p-1 md:p-2 relative">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="assets/home/frame1.png"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[#FFF] font-heebo text-[14px] not-italic font-bold leading-normal">
                        Thomas Bank
                      </p>
                      <p className="text-[#FFF] text-[14px] font-normal not-italic leading-normal">
                        Working in his new album in 2021
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 p-1 md:p-2 relative">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="assets/home/frame2.png"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[#FFF] font-heebo text-[14px] not-italic font-bold leading-normal">
                        Art
                      </p>
                      <p className="text-[#FFF] text-[14px] font-normal not-italic leading-normal">
                        Music and museums
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 p-1 md:p-2 relative">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="assets/home/frame3.png"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[#FFF] font-heebo text-[14px] not-italic font-bold leading-normal">
                        News
                      </p>
                      <p className="text-[#FFF] text-[14px] font-normal not-italic leading-normal">
                        Chill out for our mind
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap ">
                    <div className="w-2/3  p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="assets/home/frame4.png"
                      />
                    </div>
                    <div className="w-1/3 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover"
                        src="assets/home/frame5.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth section */}
            <div>
              <p className="font-heebo text-[24px] not-italic font-bold leading-6 text-[#3F4B5E]">
                Popular genres
              </p>
              <div className="pt-4">
                <div className="flex flex-wrap space-x-2">
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Blues
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Classical
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Country
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Dance
                    </button>
                  </li>
                  <li className="bg-[#0094B6] px-4 flex justify-center py-3 rounded-md  ">
                    <button className="text-[#FFF] text-[11px] font-heebo text-center leading-3 font-normal">
                      Electronic
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Hip-Hop
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Jazz
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Latin
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Metal
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Party
                    </button>
                  </li>
                </div>
                <div className="flex space-x-2 mt-4">
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      R&B / Soul
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Reggae / Dancehall
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-2 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      Soundtracks
                    </button>
                  </li>
                  <li className="px-4 flex justify-center py-2 rounded-md border border-[#373B53]">
                    <button className="text-[#373B53] text-[11px] font-heebo text-center leading-3 font-normal">
                      World
                    </button>
                  </li>
                </div>
              </div>
              {/* cicles */}
              <div className="flex flex-wrap space-x-7 pt-8">
                <div>
                  <img src="assets/home/circle1.png" className="rounded-full" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Will Moon
                  </p>
                </div>
                <div>
                  <img src="assets/home/circle2.png" className="rounded-full" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Maesse
                  </p>
                </div>
                <div>
                  <img src="assets/home/circle3.png" className="rounded-full" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Ioas
                  </p>
                </div>
                <div>
                  <img src="assets/home/circle4.png" className="rounded-full" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Waslae
                  </p>
                </div>
                <div>
                  <img src="assets/home/circle5.png" className="rounded-full" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Sasew
                  </p>
                </div>
                <div>
                  <img src="assets/home/circle6.png" className="rounded-full" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Tom Krugg
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
