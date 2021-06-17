import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    month: "Jan",
    users: 12,
    amt: 2400,
  },
  {
    month: "Feb",
    users: 3,
    amt: 2400,
  },
  {
    month: "Mar",
    users: 23,
    amt: 2400,
  },
  {
    month: "Apr",
    users: 8,
    amt: 2400,
  },
  {
    month: "May",
    users: 10,
    amt: 2400,
  },
  {
    month: "Jun",
    users: 18,
    amt: 2400,
  },
  {
    month: "Jul",
    users: 24,
    amt: 2400,
  },
  {
    month: "Aug",
    users: 30,
    amt: 2400,
  },
  {
    month: "Sep",
    users: 6,
    amt: 2400,
  },
  {
    month: "Oct",
    users: 14,
    amt: 2400,
  },
  {
    month: "Nov",
    users: 30,
    amt: 2400,
  },
  {
    month: "Dec",
    users: 49,
    amt: 2400,
  },
];

function VienBarChart() {
  return (
    <React.Fragment>
      <div className="bar-chart">
        <h6>Monthly Users</h6>

        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="subscriptions" fill="#8884d8" />
        </BarChart>
      </div>
    </React.Fragment>
  );
}

export default VienBarChart;
