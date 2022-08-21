import React from "react";
import styled from "styled-components";
import { HeroSection } from "../components";

function Home({ darkTheme }) {
  return (
    <StyledHome>
      <HeroSection darkTheme={darkTheme} />
    </StyledHome>
  );
}

const StyledHome = styled.div``;

export default Home;
