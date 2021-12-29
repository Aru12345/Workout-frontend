import React from "react";
import styled from "styled-components";
import { NavLink} from "react-router-dom"



const linkStyles = {
  display: "inline-block",
  width: "170px",
  padding: "15px",
  margin: "0px 22px 0px 2px",
  background:"#996DEC",
  textDecoration: "none",
  color: "white",
  fontSize:"20px",
  fontFamily:"serif",
  
  
  
  
}

function Header(props) {
  return (
    <HeaderContainer>
    <h1>Welcome to My Fitness</h1>
    <NavLink
        to="/"
        exact
        
        style={linkStyles}
        activeStyle={{
          background: "#4E0099",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/exercises"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#4E0099",
        }}
      >Search Exercises
      </NavLink>
      <NavLink
        to="/plans/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#4E0099",
        }}
      >
        Build Your Workout
      </NavLink>
      <NavLink
        to="/utilities/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#4E0099",
        }}
      >
         Use Utilities
      </NavLink>

      </HeaderContainer>
  );
}


export default Header;

const HeaderContainer = styled.div`
padding-bottom:1%;
background:#6E2FD1;
text-align:center;
& h1{
  width:100%;
  text-align:center;
  margin-top: 0px;
  text-transform:uppercase;
  font-family:monospace;
  font-style: italic;
  color:white;
  font-size:370%;
  padding-top:1%;
  padding-bottm:2%

}
`
