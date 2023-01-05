import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageNotFound() {
  return (
    <Container>
      <div className="text-group">
        <div>404 Page Not Found!!</div>
        <div className="flicker" />
      </div>
      <Link to="/">
        <button className="home-btn">Back to Home</button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  font-size: 18px;
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  .home-btn {
    background-color: transparent;
    color: ${(props) => props.theme.text};
    padding: 1rem;
    font-size: 1rem;
    font-family: inherit;
    border: none;
    cursor: pointer;
  }
  .text-group {
    display: flex;
    padding: 2rem 4rem;
    color: ${(props) => props.theme.text};
    .flicker {
      height: 1.5rem;
      width: 0.8rem;
      margin-left: 1rem;
      background-color: ${(props) => props.theme.text};
      animation: flick 0.6s linear infinite alternate;
      @keyframes flick {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0;
        }
      }
    }
  }
`;

export default PageNotFound;
