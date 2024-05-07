import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
export default function StreamByCountries() {
  const data01 = [
    { name: "Spain", value: 20, fill: "#96A6FF" },
    { name: "Italy", value: 7, fill: "#ACFFE3" },
    { name: "EEUU", value: 15, fill: "#FF8795" },
    { name: "United Kingdom", value: 20, fill: "#E8B56B" },
  ];
  return (
    <div className="bg-white rounded-lg shadow-dashboard-items row-span-2 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-1 xl:row-span-4 ">
      <div>
        <div className="w-10/12 mx-auto py-8">
          <p className="text-[#2E3B52] font-heebo text-[14px] not-italic font-bold leading-6 tracking-[0.14px]">
            Streams by countries
          </p>
        </div>
        <hr className="border-[#EEF0F6]" />
        <div className="relative flex justify-center items-center">
          <PieChart
            width={350}
            height={300}
            style={{
              marginTop: "5px",
              margin: "auto",
            }}
          >
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
            />
            <Tooltip />
          </PieChart>
          <div className="absolute">
            <img
              src="assets/dashboard/circle.png"
              className="shadow-xl rounded-full p-4"
              alt="piechart"
            />
          </div>
        </div>
        <div className="space-y-6">
          {[
            { name: "Spain", fill: "#96A6FF", value: 20, change: "( ↑ 32% )" },
            {
              name: "United Kingdom",
              fill: "#E8B56B",
              value: 20,
              change: "( ↓ 32% )",
            },
            { name: "EEUU", fill: "#FF8795", value: 15, change: "( ↑ 24% )" },
            { name: "Italy", fill: "#ACFFE3", value: 7, change: "( ↑ 12% )" },
          ].map((item, key) => (
            <div key={key} className="flex justify-between w-10/12 mx-auto">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill={item.fill} />
                </svg>
                <p className="text-[#A6ACBE] ml-3 font-heebo text-[14px] font-medium not-italic leading-normal tracking-[0.14px]">
                  {item.name}
                </p>
              </div>
              <div>
                <p className=" font-heebo  not-italic leading-4 tracking-[0.12px]">
                  <span className="font-bold text-black text-[14px]">
                    {item.value}
                  </span>
                  <span className="ml-1 text-[#A6ACBE] font-medium text-[12px]">
                    {item.change}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 pb-5">
          <p className="text-[#A6ACBE] text-[11px] text-center font-heebo not-italic font-normal leading-normal tracking-[0.11px]">
            Show more
          </p>
        </div>
      </div>
    </div>
  );
}
