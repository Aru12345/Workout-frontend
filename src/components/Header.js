import React from "react";
import styled from "styled-components";
import { NavLink} from "react-router-dom"
//import styled from "styled-components";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Header(props) {
  return (
    <>
    <h1>Welcome to My Fitness</h1>
    <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/exercises"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/plans/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Plans
      </NavLink>
      <NavLink
        to="/utilities/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Utilities
      </NavLink>

      </>
  );
}


export default Header;


