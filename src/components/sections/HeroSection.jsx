import React from "react";
import styled from "styled-components";
import { HeroIllustration } from "../../assets";
import { toggleTheme } from "../../utils/utils";

function HeroSection({ darkTheme }) {
  return (
    <StyledHeroSection dark={darkTheme}>
      <div className="content-block">
        <span>
          Helping people make the world a better place through quality software.
        </span>
      </div>
      <HeroIllustration className="hero-illustration" />
    </StyledHeroSection>
  );
}

export default HeroSection;

const StyledHeroSection = styled.div`
  height: 40rem;
  width: 100%;
  display: flex;
  justify-content: center;
  .content-block {
    display: flex;
    align-items: center;
    span {
      width: 30rem;
      word-wrap: break-word;
      font-size: 44px;
      color: var(--text-primary-${(props) => toggleTheme(props)});
    }
  }
  .hero-illustration {
  }
  @media screen and (max-width: 1200px) {
    flex-flow: column;
  }
`;
