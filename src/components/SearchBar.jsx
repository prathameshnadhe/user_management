import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleSearch = (event) => {
    const query = event.target.value;

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      onSearch(query);
    }, 300);

    setDebounceTimeout(timeout);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name or email..."
        className="w-full p-2 border border-gray-300 rounded"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
