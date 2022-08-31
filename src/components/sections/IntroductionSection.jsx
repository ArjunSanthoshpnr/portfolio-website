import styled from "styled-components";
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

      {/* <img className="bg-image" src={SpaceBg} alt="" /> */}
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
  /* width: 100%; */
  height: 20rem;
  display: flex;
  justify-content: flex-start;
  color: var(--text-primary-${(props) => toggleTheme(props)});
  h2,
  h3 {
    width: 600px;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    h2,
    h3 {
      width: 300px;
    }
  }
`;

export default IntroductionSection;
