import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LineTooltip from "../tooltip/LineTooltip";
const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

function SalesOverviewChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month ");
  return (
    <motion.div
      className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border dark:border-gray-700 border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium mb-4 dark:text-gray-100 text-gray-900">
          Sales Overview
        </h2>
        <select
          className="dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-500 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart
            data={monthlySalesData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            {/* <CartesianGrid strokeDasharray={"3 3"} stroke="#374151" /> */}
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip content={<LineTooltip />} />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewChart;
