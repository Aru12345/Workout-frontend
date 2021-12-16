import React from "react";
import styled from "styled-components";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <>
        
      <button onClick={onDarkModeClick} >
      {isDarkMode ? "Dark" : "Light"} Mode
      </button>
      </>
  );
}

export default Header;
