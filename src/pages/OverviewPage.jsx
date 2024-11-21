import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StatsCard from "../components/StatsCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import { Zap, Users, ShoppingBag, BarChart2 } from "lucide-react";

function OverviewPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard
            name="Total Sales"
            icon={Zap}
            value="$2,500"
            color="#6366F1"
          />
          <StatsCard
            name="New Users"
            icon={Users}
            value="1,200"
            color="#8B5CF6"
          />
          <StatsCard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <StatsCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default OverviewPage;
