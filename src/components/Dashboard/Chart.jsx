import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Jan",
      men: 11,
      women: 16,
    },
    {
      name: "Feb",
      men: 15,
      women: 7,
    },
    {
      name: "Mar",
      men: 23,
      women: 15,
    },
    {
      name: "Apr",
      men: 8,
      women: 10,
    },
    {
      name: "May",
      men: 11,
      women: 12,
    },
    {
      name: "Jun",
      men: 10,
      women: 5,
    },
    {
      name: "Jul",
      men: 17,
      women: 14,
    },
    {
      name: "Sep",
      men: 12,
      women: 22,
    },
    {
      name: "Oct",
      men: 10,
      women: 15,
    },
    {
      name: "Nov",
      men: 17,
      women: 7,
    },
    {
      name: "Dec",
      men: 22,
      women: 12,
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-dashboard-items row-span-2 sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 ">
      <div className=" flex justify-between py-8 w-11/12 mx-auto">
        <p className="font-heebo text-[#2E3B52] text-[14px] not-italic font-bold leading-6 tracking-[0.14px]">
          New listeners by month
        </p>
        <div className="flex ">
          <div className="flex items-center px-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#96A6FF" />
            </svg>
            <span className="ml-2 text-[#A6ACBE] font-heebo text-[14px] not-italic font-medium leading-normal tracking-[0.14px]">
              Men
            </span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#E8B56B" />
            </svg>
            <span className="ml-2 text-[#A6ACBE] font-heebo text-[14px] not-italic font-medium leading-normal tracking-[0.14px]">
              Women
            </span>
          </div>
        </div>
      </div>
      <hr className="border-[#EEF0F6]" />
      <div className="p-9 flex">
        <ResponsiveContainer width={"100%"} height={300}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#96A6FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E8B56B" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#E8B56B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              style={{
                fontFamily: "Heebo",
                color: "#A6ACBE",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "0.14px",
                opacity: 0.6,
              }}
              axisLine={false}
              tickLine={false}
              dy={10}
              dx={0}
            />
            <YAxis
              style={{
                fontFamily: "Heebo",
                color: "#A6ACBE",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "0.14px",
                opacity: 0.6,
              }}
              axisLine={false}
              ticks={[5, 10, 15, 20, 25]}
              domain={[0, 25]}
              type="number"
              tickCount={6}
              tickLine={false}
              dx={-25}
            />
            <CartesianGrid
              strokeDasharray="8 8"
              vertical={false}
              horizontal={false}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="men"
              stroke="#C5CDF7"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="women"
              stroke="#F1D2A4"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
