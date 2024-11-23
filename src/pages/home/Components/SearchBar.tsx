import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "강의명을 입력해 주세요.",
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
    <div className="flex items-center bg-transparent border border-red rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-red">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="flex-1 border-none outline-none px-2 py-3 text-gray bg-transparent"
      />
      <button
        onClick={handleSearch}
        className="ml-20 bg-red text-white mx-1 px-4 py-2 rounded-lg hover:bg-blue transition-all"
      >
        찾기
      </button>
    </div>
  );
};

export default SearchBar;
