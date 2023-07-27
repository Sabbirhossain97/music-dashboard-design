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
      women: 0,
      men: 0,
    },
    {
      name: "Feb",
      women: 16000,
      men: 7000,
    },
    {
      name: "Mar",
      women: 8000,
      men: 6000,
    },
    {
      name: "Apr",
      women: 7000,
      men: 6500,
    },
    {
      name: "May",
      women: 11000,
      men: 13500,
    },
    {
      name: "Jun",
      women: 10000,
      men: 7000,
    },
    {
      name: "Jul",
      women: 7000,
      men: 24345,
    },
    {
      name: "Aug",
      women: 13000,
      men: 9000,
    },
    {
      name: "Sep",
      women: 5000,
      men: 17000,
    },
    {
      name: "Oct",
      women: 9000,
      men: 8000,
    },
    {
      name: "Nov",
      women: 21500,
      men: 15000,
    },
    {
      name: "Dec",
      women: 0,
      men: 0,
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-dashboard-items col-span-2 row-span-2">
      <div className=" flex justify-between py-10 w-11/12 mx-auto">
        <p className="font-heebo text-[#282D32] text-[20px] not-italic font-bold leading-5 tracking-[0.14px]">
          Sales
        </p>
        <div className="flex ">
          <p className="text-right flex items-center font-heebo not-italic text-[12px] font-medium leading-3 text-[#AAACAE]">
            Last Month{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="ml-2"
              >
                <path
                  d="M11.8285 3.39804L6.93501 8.50914L2.04149 3.39804C1.65562 2.9536 1.26975 2.94434 0.883885 3.37026C0.498015 3.79619 0.498015 4.21285 0.883885 4.62026L6.35621 10.398C6.49653 10.5832 6.68946 10.6758 6.93501 10.6758C7.18057 10.6758 7.3735 10.5832 7.51382 10.398L12.9861 4.62026C13.372 4.21285 13.372 3.79619 12.9861 3.37026C12.6003 2.94434 12.2144 2.9536 11.8285 3.39804Z"
                  fill="#2B3034"
                  fill-opacity="0.4"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <div className="p-9 flex">
        <ResponsiveContainer width={"100%"} height={300}>
          <AreaChart
            width={890}
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
                <stop offset="0%" stopColor="#F3E6FA" stopOpacity={1} />
                <stop offset="100%" stopColor="#C887EB" stopOpacity={1} />
              </linearGradient>

              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#BBC6FF" stopOpacity={0.8} />{" "}
                <stop offset="100%" stopColor="#5E77FF" stopOpacity={1} />
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
              ticks={[5000, 10000, 15000, 20000, 25000]}
              domain={[5000, 25000]}
              type="number"
              tickLine={false}
              dx={-25}
              tickFormatter={(value) =>
                new Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(value)
              }
            />
            <CartesianGrid strokeDasharray="8 8" vertical={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="women"
              stroke="#F3E6FA"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="men"
              stroke="#BBC6FF"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
