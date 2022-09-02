import React from "react";
import styled from "styled-components";
import { HeroSection, IntroSection, TimelineSection } from "../components";

function Home() {
  return (
    <StyledHome>
      <HeroSection />
      <main>
        <IntroSection />
        <TimelineSection />
      </main>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  main {
    margin: 10rem 0;
  }
  @media screen and (max-width: 1200px) {
    main {
      margin: 5rem 0;
    }
  }
  @media screen and (max-width: 576px) {
    main {
      margin: 2rem 0;
    }
  }
`;

export default Home;
