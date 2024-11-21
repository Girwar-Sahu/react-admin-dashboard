import { Routes, Route } from "react-router-dom";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

import Sidebar from "./components/Sidebar";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text:gray-800 dark:text-gray-100 overflow-hidden transition-colors duration-200">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br dark:from-gray-900 from-gray-50 dark:via-gray-800 via-gray-100 dark:to-gray-900 to-gray-50 bg-opacity-80" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/users" element={<UsersPage />} />\
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
