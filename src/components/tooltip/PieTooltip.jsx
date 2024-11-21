import React from "react";

function PieTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="dark:bg-gray-900 bg-white border-2 dark:border-gray-700 border-gray-200 dark:bg-opacity-50 p-3 rounded-md shadow-sm">
        <p style={{ color: `${payload[0]?.payload.fill}` }}>
          {payload[0].payload.name}: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
}

export default PieTooltip;
