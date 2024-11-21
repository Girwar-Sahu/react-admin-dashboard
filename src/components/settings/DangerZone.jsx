import React from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

function DangerZone() {
  return (
    <motion.div className="dark:bg-red-900 bg-red-200 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border dark:border-red-700 border-red-400 mb-8">
      <div className="flex items-center mb-4">
        <Trash2 size={24} className="text-red-400 mr-3" />
        <h2 className="text-xl font-semibold dark:text-gray-100 text-gray-900">Danger Zone</h2>
      </div>
      <p className="dark:text-gray-300 text-gray-500 mb-4">
        Permanently delete your account and all of your data
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Delete Account
      </button>
    </motion.div>
  );
}

export default DangerZone;
