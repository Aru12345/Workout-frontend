import React from "react";
function Search({searchTerm,onSearchChange}) {
    return (
      <div className="searchbar">
        <label htmlFor="search"><h4>Search Exercise:</h4></label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
export default Search;