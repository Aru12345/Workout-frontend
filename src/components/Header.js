import React from "react";
import styled from "styled-components";
//import styled from "styled-components";

function Header(props) {
  return (
    <HeaderContainer>
      
      <h1>Welcome to My Fitness</h1>
      
    </HeaderContainer>
  );
}


export default Header;

const HeaderContainer=styled.div`
background-image: linear-gradient(to right, purple, blue);
  min-height: 14vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
  font-family: monospace;
 font-style: italic;
 
 width:100%
 
 top:0px;
 right:0px;

 left:0px;
 
 
 
`