import styled from "styled-components";
// import SpaceBg from "../../assets/images/space-bg.jpg";
import { toggleTheme } from "../../utils/utils";

function IntroductionSection({ darkTheme }) {
  return (
    <StyledIntro dark={darkTheme}>
      <div>
        <h2>
          Hi, I'm Arjun Santhosh. I help people make the world better through
          quality software.
        </h2>
        <h3>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or random words which don't look even slightly believable. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </h3>
      </div>
      {/* <div className="glass-bg" /> */}

      {/* <img className="bg-image" src={SpaceBg} alt="" /> */}
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: flex-start;
  color: var(--text-primary-${(props) => toggleTheme(props)});
  h2,
  h3 {
    width: 600px;
    font-weight: 500;
  }

  .glass-bg {
    width: 600px;
    height: inherit;
    max-height: 100%;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 16px;
    backdrop-filter: blur(5.6px);
    -webkit-backdrop-filter: blur(5.6px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .bg-image {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    display: block;
    object-fit: scale-down;
    border-radius: 16px;
  }
`;

export default IntroductionSection;
