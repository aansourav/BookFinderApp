import React, { useEffect, useState } from "react";

const Sorting = ({ handleSort }) => {
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    handleSort(sortBy);
  }, [sortBy]);

  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
        value={sortBy}
        onChange={(e) => handleSortChange(e)}
      >
        <option defaultValue disabled value="">
          Sort
        </option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
};

export default Sorting;
