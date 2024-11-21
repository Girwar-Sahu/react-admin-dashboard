import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";
import BarTooltip from "../tooltip/BarTooltip";

const SALES_CHANNEL_DATA = [
  { name: "Mobile App", value: 38200, color: "#6366F1" },
  { name: "Website", value: 45600, color: "#8B5CF6" },
  { name: "Marketplace", value: 29800, color: "#EC4899" },
  { name: "Social Media", value: 18700, color: "#10B981" },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md border p-6 lg:col-span-2 dark:border-gray-700 border-gray-200 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 dark:text-gray-100 text-gray-900">
        Sales By Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={SALES_CHANNEL_DATA}>
            {/* <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" /> */}
            <XAxis dataKey={"name"} stroke="#9CA3AF" />
            <YAxis dataKey={"value"} stroke="#9CA3AF" />
            <Tooltip content={<BarTooltip />} />
            <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]}>
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
