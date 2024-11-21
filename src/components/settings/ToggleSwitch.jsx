import React, { useState } from "react";

function ToggleSwitch({ label, isOn, onToggle }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="dark:text-gray-300 text-gray-500">{label}</span>
      <button
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
          isOn ? "bg-indigo-600" : "dark:bg-gray-600 bg-gray-400"
        }`}
        onClick={onToggle}
      >
        <span
          className={`inline-block size-4 transform transition-transform bg-white rounded-full ${
            isOn ? "translate-x-6" : "tanslate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default ToggleSwitch;