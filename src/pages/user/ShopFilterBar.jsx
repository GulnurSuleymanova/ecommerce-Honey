import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { TfiLayoutGrid2Thumb } from "react-icons/tfi";

const ShopFilterBar = ({
  viewType,
  setViewType,
  sortBy,
  setSortBy,
  filteredCount,
  totalCount,
}) => {
  const sortOptions = [
    { label: "Default sorting", value: "default" },
    { label: "Name A → Z", value: "name-asc" },
    { label: "Name Z → A", value: "name-desc" },
    { label: "Price low → high", value: "price-asc" },
    { label: "Price high → low", value: "price-desc" },
  ];

  return (
    <div className="flex justify-end items-center mb-6 flex-wrap">
      <div>
        <select
          className="h-[46px] min-w-[165px] px-4  border-gray-300 cursor-pointer text-sm font-medium  border rounded-2xl"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShopFilterBar;
