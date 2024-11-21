import {
  ShoppingBag,
  BarChart2,
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Settings,
  Menu,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366F1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8B5CF6",
    path: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#EC4899",
    path: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10B981",
    path: "/sales",
  },
  {
    name: "orders",
    icon: ShoppingCart,
    color: "#F59E0B",
    path: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3B82F6",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6EE7B7",
    path: "/settings",
  },
];
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  return (
    <motion.div
      className={`relative z-10 transition-all duration-200 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-white dark:bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r dark:border-gray-700 border-gray-200">
        <motion.button
          whileHover={{ scacle: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-75 max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link to={item.path} key={item.path}>
              <motion.div
                className={`flex items-center p-4 text-sm font-medium rounded-full transition-colors mb-2 ${
                  location.pathname === item.path
                    ? "dark:bg-gray-700 bg-indigo-600 text-white"
                    : "text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400"
                }`}
              >
                <item.icon
                  size={15}
                  style={
                    location.pathname === item.path
                      ? { color: "white" }
                      : {
                          color: item.color,
                          minWidth: "20px",
                          minHeight: "20px",
                        }
                  }
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

export default Sidebar;
