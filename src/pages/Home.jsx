import React from "react";
import styled from "styled-components";
import { HeroSection, IntroSection, TimelineSection } from "../components";

function Home() {
  return (
    <StyledHome>
      <HeroSection />
      {/* <main>
        <IntroSection />
        <TimelineSection />
      </main> */}
    </StyledHome>
  );
}

const StyledHome = styled.div`
  main {
    margin: 10rem 0;
  }
`;

export default Home;
