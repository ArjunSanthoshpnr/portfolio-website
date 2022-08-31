import { useContext } from "react";
import styled from "styled-components";
import { HeroIllustration } from "../../assets";
import { Button } from "../../components";
import { ThemeContext } from "../../contexts/ThemeContext";

function HeroSection() {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledHeroSection theme={theme}>
      <div className="content-block">
        <span className="user-select-none">
          Helping people make the world a better place through quality software.
        </span>
        <div className="btn-group">
          <Button primary theme={theme}>
            Download Resume
          </Button>
          <Button secondary theme={theme}>
            Contact Me
          </Button>
        </div>
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
  max-width: 2000px;

  .content-block {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    gap: 2rem;

    .btn-group {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      width: 100%;
      @media screen and (max-width: 480px) {
        flex-flow: column;
        justify-content: center;
      }
    }

    span {
      word-wrap: break-word;
      font-size: 44px;
      color: var(
        --text-primary-${(props) => (props.theme === "light" ? "light" : "dark")}
      );
    }
  }
  .hero-illustration {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 1200px) {
    flex-flow: column;
    text-align: center;
    align-items: center;
    gap: 4rem;
    .content-block {
      /* width: 100%; */
      max-width: 30rem;
    }
  }
  @media screen and (max-width: 992px) {
    .content-block span {
      font-size: 30px;
    }
  }
`;
