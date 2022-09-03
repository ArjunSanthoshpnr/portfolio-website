import styled from "styled-components";
import react3d from "../../assets/images/react-3d-1.png";
function IntroductionSection() {
  return (
    <StyledIntro>
      <div className="img-wrapper">
        <img className="logo-img" src={react3d} alt="react3d icon"></img>
      </div>
      <div className="intro-text">
        <h1>
          Hi, I'm Arjun Santhosh. I help people make the world better through
          quality software.
        </h1>
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
        <div className="availability-group">
          <div className="status-indicator" />
          <span>I'm currently not available</span>
        </div>
      </div>
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
  color: ${(props) => props.theme.text};
  /* margin: 6rem 0; */
  .img-wrapper {
    width: 400px;
    height: 400px;
    position: relative;
  }
  .logo-img {
    position: absolute;

    width: 100%;
    margin: auto;
    /* -webkit-animation: spin 8s linear infinite;
    -moz-animation: spin 8s linear infinite;
    animation: spin 8s linear infinite;

    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    } */
  }

  .intro-text {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    h1,
    h3 {
      max-width: 800px;
      font-weight: 500;
    }
  }

  .availability-group {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      color: #ff8562;
      font-weight: 400;
      font-size: 1.2rem;
    }

    .status-indicator {
      width: 1rem;
      height: 1rem;
      border-radius: 4rem;
      background-color: #ff8562;
      background-image: linear-gradient(135deg, #ffb59f, #ff8562);
      will-change: opacity;
      animation: blinker 1.5s ease-in-out infinite;
      @keyframes blinker {
        50% {
          opacity: 0.3;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    iframe {
      width: 600px;
    }
    h1,
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
