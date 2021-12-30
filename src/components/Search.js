import React from "react";
import styled from "styled-components";
function Search({searchTerm,onSearchChange}) {
    return (
      <SearchBar>
        <label htmlFor="search"><h2>Search Exercise:</h2></label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </SearchBar>
    );
  }
export default Search;

const SearchBar=styled.div`
& h2{
  
  display: flex;
  padding: 0 0 0 1%;
}
& input{
  padding: 0.25rem;
  border: none;
  font-family: inherit;
  font-size: 1.2em;
  transition: all 0.2s;
  width: 90%;
  margin:0 0 0 1%
}

`