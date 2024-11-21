import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "강의명",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center bg-gray border border-blue rounded-lg p-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="flex-1 border-none outline-none px-2 text-gray bg-transparent"
      />
      <button
        onClick={handleSearch}
        className="ml-20 bg-blue text-white px-4 py-1 rounded-lg hover:bg-blue transition-all"
      >
        찾기
      </button>
    </div>
  );
};

export default SearchBar;
