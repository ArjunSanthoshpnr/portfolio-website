import styled from "styled-components";
import react3d from "../../assets/images/react-3d-1.png";
function IntroductionSection() {
  return (
    <StyledIntro>
      <img className="logo-img" src={react3d} alt="react3d icon"></img>
      <div className="intro-text">
        <h2>
          Hi, I'm Arjun Santhosh. I help people make the world better through
          quality software.
        </h2>
        <h3>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or random words which don't look even slightly believable. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. have
          suffered alteration in some form, by injected humour, or random words
          which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum.
        </h3>
      </div>
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
  color: ${(props) => props.theme.text};
  margin: 6rem 0;
  .logo-img {
    width: 400px;
  }

  .intro-text {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
  }
  h2,
  h3 {
    max-width: 800px;
    font-weight: 500;
  }
  @media screen and (max-width: 1200px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    iframe {
      width: 600px;
    }
    h2,
    h3 {
      width: 90%;
      text-align: center;
      margin: 2rem;
    }
  }
  @media screen and (max-width: 992px) {
    iframe {
      width: 400px;
    }
  }
`;

export default IntroductionSection;
