import React from "react";
import styled from "styled-components";
import {
  HeroSection,
  IntroSection,
  SkillsOrbit,
  TimelineSection,
} from "../components";

function Home() {
  return (
    <StyledHome>
      <HeroSection />
      <main>
        <IntroSection />
        <div className="container">
          <TimelineSection />
          <SkillsOrbit />
        </div>
      </main>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  .container {
    display: flex;
    flex-flow: row;
    /* flex-wrap: wrap; */
    gap: 4rem;
  }
  main {
    display: flex;
    flex-flow: column;
    gap: 10rem;
    margin: 10rem 0;
    .container {
      display: flex;
      @media screen and (max-width: 1200px) {
        flex-flow: column;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    main {
      margin: 5rem 0;
    }
  }
  @media screen and (max-width: 576px) {
    main {
      margin: 0;
    }
  }
`;

export default Home;
