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
import { motion } from "framer-motion";
import LineTooltip from "../tooltip/LineTooltip";

const userRetentionData = [
  { month: "Week 1", retention: 100 },
  { month: "Week 2", retention: 75 },
  { month: "Week 3", retention: 60 },
  { month: "Week 4", retention: 50 },
  { month: "Week 5", retention: 45 },
  { month: "Week 6", retention: 40 },
  { month: "Week 7", retention: 38 },
  { month: "Week 8", retention: 35 },
];

const UserRetention = () => {
  return (
    <motion.div
      className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border dark:border-gray-700 border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-xl font-semibold dark:text-gray-100 text-gray-900 mb-4">
        User Retention
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={userRetentionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip content={<LineTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="retention"
              stroke="#8B5CF6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default UserRetention;
