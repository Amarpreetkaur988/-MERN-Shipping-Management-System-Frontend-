import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    month: "Jan",
    earning: 12,
    amt: 2400,
  },
  {
    month: "Feb",
    earning: 3,
    amt: 2400,
  },
  {
    month: "Mar",
    earning: 23,
    amt: 2400,
  },
  {
    month: "Apr",
    earning: 8,
    amt: 2400,
  },
  {
    month: "May",
    earning: 10,
    amt: 2400,
  },
  {
    month: "Jun",
    earning: 18,
    amt: 2400,
  },
  {
    month: "Jul",
    earning: 24,
    amt: 2400,
  },
  {
    month: "Aug",
    earning: 30,
    amt: 2400,
  },
  {
    month: "Sep",
    earning: 6,
    amt: 2400,
  },
  {
    month: "Oct",
    earning: 14,
    amt: 2400,
  },
  {
    month: "Nov",
    earning: 30,
    amt: 2400,
  },
  {
    month: "Dec",
    earning: 49,
    amt: 2400,
  },
];

function VienBarChart() {
  return (
    <React.Fragment>
      <div className="bar-chart">
        <BarChart width={1100} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="earning" fill="#0046d5" />
        </BarChart>
      </div>
    </React.Fragment>
  );
}

export default VienBarChart;
