import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import LineTooltip from "../tooltip/LineTooltip";

const salesData = [
  { month: "Jul", sales: 4200 },
  { month: "Aug", sales: 3800 },
  { month: "Sep", sales: 5100 },
  { month: "Oct", sales: 4600 },
  { month: "Nov", sales: 5400 },
  { month: "Dec", sales: 7200 },
  { month: "Jan", sales: 6100 },
  { month: "Feb", sales: 5900 },
  { month: "Mar", sales: 6800 },
  { month: "Apr", sales: 6300 },
  { month: "May", sales: 7100 },
  { month: "Jun", sales: 7500 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md border p-6 dark:border-gray-700 border-gray-200 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 dark:text-gray-100 text-gray-900">
        Sales Overview
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"month"} stroke="#9CA3AF" />
            <YAxis dataKey={"sales"} stroke="#9CA3AF" />
            <Tooltip content={<LineTooltip />} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
