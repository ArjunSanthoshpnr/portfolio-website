import styled from "styled-components";
import { HeroIllustration } from "../../assets";
import { Button } from "../../components";

function HeroSection() {
  return (
    <StyledHeroSection>
      <div className="content-block">
        <span className="user-select-none">
          Helping people make the world a better place through quality software.
        </span>
        <div className="btn-group">
          <Button variant="primary">Download Resume</Button>
          <Button variant="secondary">Contact Me</Button>
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
    /* min-width: 470px; */
    max-width: 600px;
    gap: 2rem;

    .btn-group {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      width: 100%;
    }

    span {
      word-wrap: break-word;
      font-size: 44px;
      color: ${(props) => props.theme.text};
    }
  }
  .hero-illustration {
    width: 100%;
    max-width: fit-content;
  }
  @media screen and (max-width: 1200px) {
    flex-flow: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    .content-block {
      width: 475px;
      .btn-group {
        justify-content: center;
      }
      span {
        font-size: 32px;
      }
    }
    .hero-illustration {
      height: 380px;
    }
  }
  @media screen and (max-width: 576px) {
    height: 30rem;
    justify-content: flex-start;
    .content-block {
      width: 90%;
      max-width: 400px;
      .btn-group {
        flex-flow: column;
      }
      span {
        font-size: 24px;
      }
    }
    .hero-illustration {
      height: 200px;
    }
  }
`;
