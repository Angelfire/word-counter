import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import "./DataVisualization.css";

const DataVisualization = ({ data }) => {
  return (
    <div className="DataVisualization">
      {data.length > 0 ? (
        <BarChart width={570} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="word" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#3273dc" />
        </BarChart>
      ) : (
        <p className="DataVisualization-nocontent">
          No data Available, please write a text...
        </p>
      )}
    </div>
  );
};

export default DataVisualization;
