import React from "react";

const Sorting = () => {
  return (
    <div class="flex items-stretch space-x-3">
      <select
        class="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
};

export default Sorting;