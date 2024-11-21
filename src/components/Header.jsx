import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import ThemeContext from "../utils/ThemeContext";

function Header({ title }) {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header className="dark:bg-gray-800 bg-white bg-opacity-50 backdrop-blur-md shadow-lg border-b dark:border-gray-700 border-gray-200">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        <button
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
