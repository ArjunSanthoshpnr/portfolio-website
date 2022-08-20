import React from "react";
import styled from "styled-components";
import { Moon } from "../assets";

function Header() {
  return (
    <StyledHeader>
      <h1>Arjun Santhosh</h1>
      <div className="links-group">
        <span>Blog</span>
        <span>About</span>
        <span>Workspace</span>
        <span>Blog</span>
        <span>About</span>
        <span>Workspace</span>
      </div>
      <div className="icon-group">
        <Moon color="#fff" height="44px" width="44px" />
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  background-color: #555;
  h1 {
    color: #fff;
    margin-bottom: 0;
    font-weight: 500;
  }
  .links-group {
    display: flex;
    gap: 4rem;
    align-items: center;
    span {
      font-size: 18px;
      color: #fff;
    }
  }
  .icon-group {
    margin-left: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
