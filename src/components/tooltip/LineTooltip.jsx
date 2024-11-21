import React from "react";

const ChartTooltip = ({
  active,
  payload,
  labelKey = "month",
  colorKey = "color",
  valueFormatter = (name, value) => `${name}: ${value}`,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="dark:bg-gray-900 bg-white border-2 dark:border-gray-700 border-gray-200 dark:bg-opacity-50 p-3 rounded-md shadow-sm">
        {/* Display the label (e.g., month) */}
        <p className="font-semibold text-gray-500 dark:text-white">
          {payload[0]?.payload?.[labelKey]}
        </p>
        {/* Display each data entry */}
        {payload.map((item, index) => (
          <p key={index} style={{ color: item[colorKey] }}>
            {valueFormatter(item?.name, item?.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default ChartTooltip;
