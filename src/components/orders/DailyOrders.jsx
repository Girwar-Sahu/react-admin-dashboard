import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LineTooltip from "../tooltip/LineTooltip";

const dailyOrdersData = [
  { month: "07/01", orders: 45 },
  { month: "07/02", orders: 52 },
  { month: "07/03", orders: 49 },
  { month: "07/04", orders: 60 },
  { month: "07/05", orders: 55 },
  { month: "07/06", orders: 58 },
  { month: "07/07", orders: 62 },
];

const DailyOrders = () => {
  return (
    <motion.div
      className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border dark:border-gray-700 border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold dark:text-gray-100 text-gray-900 mb-4">Daily Orders</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={dailyOrdersData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              content={<LineTooltip />}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#8B5CF6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default DailyOrders;
