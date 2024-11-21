import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StatsCard from "../components/StatsCard";
import { DollarSign, Package, TrendingUp, AlertTriangle } from "lucide-react";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/product/SalesTrendChart";
import ProductTable from "../components/product/ProductTable";

function ProductsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Product" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard
            name="Total Products"
            icon={Package}
            value="1234"
            color="#6366F1"
          />
          <StatsCard
            name="Top Selling"
            icon={TrendingUp}
            value="89"
            color="#10B981"
          />
          <StatsCard
            name="Low Stock"
            icon={AlertTriangle}
            value="29"
            color="#F59E0B"
          />
          <StatsCard
            name="Total Revenue"
            icon={DollarSign}
            value="$543.23"
            color="#EF4444"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductTable />
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
