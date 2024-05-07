import Sidebar from "../Navigation/Sidebar";
import Header from "../Navigation/Header";
import { Search, Like, Save, Share, Group, Recorder, Play, CircleBlue, CircleWhite } from "../SvgComponents/SVG";

export default function Home() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <Header />
        <div className="bg-[#F8F8FB] pb-16">
          <div className="flex justify-center w-full  ">
            <div className="relative w-11/12 lg:w-1/2">
              <input
                className="indent-16 w-full rounded-[50px] bg-white py-5 mt-11 shadow-xl placeholder:text-[#C4C4C4] placeholder:font-heebo placeholder:text-[16px] placeholder:not-italic placeholder:font-normal placeholder:leading-5 placeholder:tracking-[0.16px]"
                placeholder="Search for new music, news, artists..."
              />
              <Search />
            </div>
          </div>
          <div className="w-11/12 mx-auto grid grid-cols-1 2xl:grid-cols-2 mt-8 gap-9">
            {/* first section */}
            <div className="relative ">
              <p className=" font-heebo text-[24px] text-[#3F4B5E] not-italic font-bold leading-normal tracking-[0.24px]">
                Trendings
              </p>
              <img src="/assets/home/concert.png" alt="concert" className="w-full rounded-lg mt-2 h-[442px] object-cover" />
              <div className="absolute flex flex-col items-center sm:items-start top-1/2 left-1/2 sm:left-1/3 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-xl text-center sm:text-3xl text-white sm:text-left font-bold">
                  <span className="text-sm font-normal">{`// TRENDING`}</span> <br /> Red Snapper: <br />Performance Review <br />
                  <span className="text-lg font-semibold">- Kamelia</span></h1>
                <div className="w-full sm:w-1/2 flex gap-2">
                  <button className="border mt-4 w-4/6 px-2 py-1 bg-white hover:bg-gray-200 text-[#0094B6] rounded-md flex items-center justify-center">PLAY<Play /></button>
                  <button className="border mt-4 w-1/3 px-2 py-1 bg-white hover:bg-gray-200 rounded-md flex items-center justify-center"><Share /></button>
                </div>
              </div>
              <div className="flex justify-center w-full absolute bottom-8 gap-[5px] ">
                <CircleWhite/>
                <CircleBlue />
                <CircleWhite />
                <CircleWhite />
                <CircleWhite />
              </div>
            </div>
            {/* second section */}
            <div className="">
              <p className="font-heebo text-[24px] text-[#3F4B5E] not-italic font-bold leading-normal tracking-[0.24px]">
                Artist of the week
              </p>
              <div className="w-full flex gap-8 flex-col md:flex-row">
                <img src="assets/home/Artist.png" className="hidden md:block pt-2 h-[450px]" alt="artist" />
                <div className="py-0 md:py-6 w-full ">
                  <p className="font-heebo text-[10px] text-[#2E3B52] not-italic font-semibold leading-4 ">
                    {`// Album`}
                  </p>
                  <p className=" mt-[17px] text-[#2E3B52] font-sans text-[36px] md:text-[50px] not-italic font-bold leading-5">
                    Always Authentic
                  </p>
                  <div className="flex items-center gap-2 mt-5 md:mt-0">
                    <img src="assets/home/Artist.png" className="md:hidden h-10 w-10 rounded-full" alt="artist" />
                    <p className="mt-0 md:mt-6 text-[#A6ACBE] font-sans-pro text-[18px] not-italic font-normal leading-5">
                      Monica Lee
                    </p>
                  </div>
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
                          borderRadius: "3px",
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
                          borderRadius: "3px",
                        },
                        {
                          id: 4,
                          text1: "Always authentic",
                          count: "35,820",
                          time: "3:30",
                          borderRadius: "3px",
                        },
                        {
                          id: 5,
                          text1: "No more show",
                          count: "51,432",
                          time: "4:01",
                          borderRadius: "3px",
                        },
                      ].map((item, key) => (
                        <div
                          key={key}
                          className={`cursor-pointer transition duration-300 hover:shadow-home-artist justify-start grid grid-cols-11 py-2 gap-y-2 ${item.shadow} ${item.background} ${item.borderRadius} hover:bg-white`}
                        >
                          <div className=" flex justify-center col-span-1">
                            <p className="opacity-50 font-heebo text-[12px] not-italic font-semibold leading-4 text-[#0F1E36]">
                              {item.id}
                            </p>
                          </div>
                          <div className=" col-span-4 flex ">
                            <Like />
                            <p className="ml-4 truncate ... w-[40px] sm:min-w-[150px] opacity-50 text-[#0F1E36] font-heebo text-[12px] not-italic font-semibold">
                              {item.text1}
                            </p>
                          </div>
                          <div className=" col-span-1 flex justify-end px-2 items-center">
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
            {/* third section  */}
            <div className="">
              <p className="font-heebo text-[24px] not-italic font-bold leading-6 text-[#3F4B5E]">
                More news
              </p>
              <div className="flex flex-wrap">
                <div className="flex w-full flex-wrap mt-3">
                  <div className="w-1/3 p-1 md:p-2 relative order-1 cursor-pointer hover:opacity-75 transition duration-300">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="assets/home/frame1.png"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[#FFF] font-heebo text-[10px] sm:text-[14px] not-italic font-bold leading-normal">
                        Thomas Bank
                      </p>
                      <p className="text-[#FFF] text-[10px] sm:text-[14px] font-normal not-italic leading-normal">
                        Working in his new album in 2021
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 p-1 md:p-2 relative order-2 cursor-pointer hover:opacity-75 transition duration-300">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="assets/home/frame2.png"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[#FFF] font-heebo text-[10px] sm:text-[14px] not-italic font-bold leading-normal">
                        Art
                      </p>
                      <p className="text-[#FFF] text-[10px] sm:text-[14px] font-normal not-italic leading-normal">
                        Music and museums
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 p-1 md:p-2 relative order-3 cursor-pointer hover:opacity-75 transition duration-300">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="assets/home/frame3.png"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[#FFF] font-heebo text-[10px] sm:text-[14px] not-italic font-bold leading-normal">
                        News
                      </p>
                      <p className="text-[#FFF] text-[10px] sm:text-[14px] font-normal not-italic leading-normal">
                        Chill out for our mind
                      </p>
                    </div>
                  </div>
                  <div className="w-2/3 p-1 md:p-2 relative order-3 cursor-pointer hover:opacity-75 transition duration-300">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="assets/home/frame4.png"
                    />
                  </div>
                  <div className="w-1/3 p-1 md:p-2 relative order-3 cursor-pointer hover:opacity-75 transition duration-300">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="assets/home/frame5.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* fourth section */}
            <div className="">
              <p className="font-heebo text-[24px] not-italic font-bold leading-6 text-[#3F4B5E]">
                Popular genres
              </p>
              <div className="pt-4">
                <div className="flex flex-wrap justify-start gap-2">
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Blues
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className=" text-[11px] font-heebo text-center leading-3 font-normal">
                      Classical
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Country
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Dance
                    </button>
                  </li>
                  <li className="bg-[#0094B6] cursor-pointer px-4 flex justify-center py-3 rounded-md  ">
                    <button className="text-[#FFF] text-[11px] font-heebo text-center leading-3 font-normal">
                      Electronic
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Hip-Hop
                    </button>
                  </li>
                  <li className="transition duration-300  cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Jazz
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Latin
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Metal
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Party
                    </button>
                  </li>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <li className="transition duration-300  cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="whitespace-nowrap text-[11px] font-heebo text-center leading-3 font-normal">
                      R&B / Soul
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-3 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Reggae / Dancehall
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-2 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      Soundtracks
                    </button>
                  </li>
                  <li className="transition duration-300 cursor-pointer hover:bg-[#0094B6] text-[#373B53] hover:text-white px-4 flex justify-center py-2 rounded-md border border-[#373B53]">
                    <button className="text-[11px] font-heebo text-center leading-3 font-normal">
                      World
                    </button>
                  </li>
                </div>
              </div>
              {/* circles */}
              <div className="flex flex-wrap gap-4 pt-8 ">
                <div className="cursor-pointer hover:opacity-75 transition duration-300">
                  <img src="assets/home/circle1.png" className="rounded-full" alt="circle" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Will Moon
                  </p>
                </div>
                <div className="cursor-pointer hover:opacity-75 transition duration-300">
                  <img src="assets/home/circle2.png" className="rounded-full" alt="circle" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Maesse
                  </p>
                </div>
                <div className="cursor-pointer hover:opacity-75 transition duration-300">
                  <img src="assets/home/circle3.png" className="rounded-full" alt="circle" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Ioas
                  </p>
                </div>
                <div className="cursor-pointer hover:opacity-75 transition duration-300">
                  <img src="assets/home/circle4.png" className="rounded-full" alt="circle" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Waslae
                  </p>
                </div>
                <div className="cursor-pointer hover:opacity-75 transition duration-300">
                  <img src="assets/home/circle5.png" className="rounded-full" alt="circle" />
                  <p className="mt-2 text-[#0F1E36] font-heebo text-center text-[12px] not-italic font-semibold leading-4">
                    Sasew
                  </p>
                </div>
                <div className="cursor-pointer hover:opacity-75 transition duration-300">
                  <img src="assets/home/circle6.png" className="rounded-full" alt="circle" />
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
