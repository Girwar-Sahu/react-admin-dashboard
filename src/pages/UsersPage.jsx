import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StatsCard from "../components/StatsCard";
import { Users as UsersIcon, UserPlus, UserCheck, UserX } from "lucide-react";
import UsersTable from "../components/user/UsersTable";
import UserGrowthChart from "../components/user/UserGrowthChart";
import UserActivityHeatmap from "../components/user/UserActivityHeatmap";
import UserDemographicsChart from "../components/user/UserDemographicChart";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

function UsersPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatsCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatsCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatsCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UsersTable />
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
}

export default UsersPage;
