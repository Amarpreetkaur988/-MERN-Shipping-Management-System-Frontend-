import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    month: "Jan",
    bookings: 12,
    amt: 2400,
  },
  {
    month: "Feb",
    bookings: 3,
    amt: 2400,
  },
  {
    month: "Mar",
    bookings: 23,
    amt: 2400,
  },
  {
    month: "Apr",
    bookings: 8,
    amt: 2400,
  },
  {
    month: "May",
    bookings: 10,
    amt: 2400,
  },
  {
    month: "Jun",
    bookings: 18,
    amt: 2400,
  },
  {
    month: "Jul",
    bookings: 24,
    amt: 2400,
  },
  {
    month: "Aug",
    bookings: 30,
    amt: 2400,
  },
  {
    month: "Sep",
    bookings: 6,
    amt: 2400,
  },
  {
    month: "Oct",
    bookings: 14,
    amt: 2400,
  },
  {
    month: "Nov",
    bookings: 30,
    amt: 2400,
  },
  {
    month: "Dec",
    bookings: 49,
    amt: 2400,
  },
];

function VienLineChart() {
  return (
    <React.Fragment>
      <div className="line-chart">
        <h6>Monthly Bookings</h6>

        <LineChart width={550} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="appointments"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </React.Fragment>
  );
}

export default VienLineChart;
