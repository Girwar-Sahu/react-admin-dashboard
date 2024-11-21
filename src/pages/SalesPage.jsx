import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StatsCard from "../components/StatsCard";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";
import { DollarSign, ShoppingCart, TrendingUp, CreditCard } from "lucide-react";

const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

function SalesPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Sales" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />
          <StatsCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />
          <StatsCard
            name="Conversion Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />
          <StatsCard
            name="Sales Growth"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
}

export default SalesPage;
