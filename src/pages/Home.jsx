import React from "react";
import styled from "styled-components";
import { HeroSection, IntroSection } from "../components";

function Home({ darkTheme }) {
  return (
    <StyledHome>
      <HeroSection darkTheme={darkTheme} />
      <main>
        <IntroSection darkTheme={darkTheme} />
      </main>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  main {
    margin: 10rem 0;
  }
`;

export default Home;
