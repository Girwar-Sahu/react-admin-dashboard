import React from "react";

const BarTooltip = ({
  active,
  payload,
  labelKey = "name",
  colorKey = "fill", // Default color key for stacked bar
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="dark:bg-gray-900 bg-white border-2 dark:border-gray-700 border-gray-200 dark:bg-opacity-50 p-3 rounded-md shadow-sm">
        {/* Display the label (e.g., the name of the data item) */}
        <p className="font-semibold text-gray-500 dark:text-white">
          {payload[0]?.payload?.[labelKey]}
        </p>
        {/* Loop through each stack and display its data */}
        {payload.map((item, index) => (
          <p key={index} style={{ color: item[colorKey] }}>
            {`${item?.name}: ${item?.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default BarTooltip;
