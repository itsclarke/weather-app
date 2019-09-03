import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: lightblue;
  padding: 15px;
`;

const NavBar = () => {
  return (
    <Nav>
      <h1>WeatherTime</h1>
    </Nav>
  );
};

export default NavBar;
