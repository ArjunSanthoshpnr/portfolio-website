import styled from "styled-components";
import {
  AdobeIllustratorLogo,
  AdobePhotoshopLogo,
  AdobeXDLogo,
  FigmaLogo,
  HtmlLogo,
  Css3Logo,
  JavascriptLogo,
  ReactLogo,
  ReduxLogo,
  StyledComponentLogo,
  AntDesignLogo,
  GitLogo,
  NodeJSLogo,
  MysqlLogo,
  ExpressJSLogo,
  MongoDBLogo,
  PythonLogo,
  VsCodeLogo,
} from "../../assets/";

function SkillsOrbit() {
  return (
    <StyledSkillsOrbit>
      <span className="title">Skills Orbit</span>
      <div className="styled-orbit">
        <ul className="orbit-wrap">
          <li className="orbit-center">
            <i className="orbit-center__icon fa fa-code"></i>
          </li>
          <li>
            <ul className="ring-0">
              <li>
                <i className="orbit-icon">
                  <NodeJSLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <ExpressJSLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <MysqlLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <MongoDBLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <PythonLogo className="icon" />
                </i>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-1">
              <li>
                <i className="orbit-icon">
                  <FigmaLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <AdobeXDLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <AdobeIllustratorLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <AdobePhotoshopLogo className="icon" />
                </i>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-2">
              <li>
                <i className="orbit-icon">
                  <ReactLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <AntDesignLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <StyledComponentLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <ReduxLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <GitLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <VsCodeLogo className="icon" />
                </i>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-3">
              <li>
                <i className="orbit-icon">
                  <HtmlLogo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <Css3Logo className="icon" />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <JavascriptLogo className="icon" />
                </i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </StyledSkillsOrbit>
  );
}

const StyledSkillsOrbit = styled.div`
  position: relative;
  margin: 0 0.4rem;
  width: 50%;
  height: fit-content;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  .styled-orbit {
    font-size: 16px;
    @media screen and (max-width: 998px) {
      font-size: 14px;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
    @media screen and (max-width: 576px) {
      font-size: 8px;
    }
  }
  /* background-color: rgba(9, 12, 41, 0.6); */
  /* border: 1px solid #eee;
  border-radius: 2rem; */

  .title {
    max-width: 800px;
    font-weight: 400;
    margin-bottom: 4rem;
    color: ${(props) => props.theme.text};
    font-size: 2rem;
  }
  .orbit {
    background: #090c29;
    float: left;
    width: 100%;
    /* min-width: 100vw;
    min-height: 100vh; */
  }

  .orbit-icon {
    width: 1.6em;
    height: 1.6em;
    line-height: 1.6em;
    font-size: 1.2em;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    display: block;
    margin: auto;
    overflow: hidden;
    .icon {
      width: 1.6em;
    }
  }

  .orbit-wrap {
    height: 40em;
    list-style: none;
    font-size: 1.3em;
  }

  .orbit-wrap > li {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .orbit-wrap > li:hover ul {
    border-width: 2px;
    border-color: ${(props) => props.theme.grayShade200};
  }

  .orbit-wrap > li:hover ~ li ul {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .orbit-wrap > li:hover ~ li ul li {
    opacity: 0.4;
  }

  ul[class^="ring"] {
    transition: all 300ms ease-in-out;
  }

  ul[class^="ring"] li {
    transition: all 300ms ease-in-out;
  }

  .ring-0 {
    width: 25em;
    height: 25em;
    animation: clockwiseRotate 35s linear infinite;
  }

  .ring-0 i {
    animation: counterClockwiseRotate 35s linear infinite;
  }

  .ring-0 > *:nth-of-type(1) {
    transform: rotate(72deg) translate(12.5em) rotate(-72deg);
  }

  .ring-0 > *:nth-of-type(2) {
    transform: rotate(144deg) translate(12.5em) rotate(-150deg);
  }

  .ring-0 > *:nth-of-type(3) {
    transform: rotate(216deg) translate(12.5em) rotate(-216deg);
  }

  .ring-0 > *:nth-of-type(4) {
    transform: rotate(288deg) translate(12.5em) rotate(-288deg);
  }
  .ring-0 > *:nth-of-type(5) {
    transform: rotate(360deg) translate(12.5em) rotate(-360deg);
  }

  .ring-1 {
    width: 20em;
    height: 20em;
    animation: clockwiseRotate 30s linear infinite;
  }

  .ring-1 i {
    animation: counterClockwiseRotate 30s linear infinite;
  }

  .ring-1 > *:nth-of-type(1) {
    transform: rotate(90deg) translate(10em) rotate(-90deg);
  }

  .ring-1 > *:nth-of-type(2) {
    transform: rotate(180deg) translate(10em) rotate(-180deg);
  }

  .ring-1 > *:nth-of-type(3) {
    transform: rotate(270deg) translate(10em) rotate(-270deg);
  }

  .ring-1 > *:nth-of-type(4) {
    transform: rotate(360deg) translate(10em) rotate(-360deg);
  }

  .ring-2 {
    width: 15em;
    height: 15em;
    animation: clockwiseRotate 25s linear infinite;
  }

  .ring-2 i {
    animation: counterClockwiseRotate 25s linear infinite;
  }

  .ring-2 > *:nth-of-type(1) {
    transform: rotate(47.5deg) translate(7.5em) rotate(-47.5deg);
  }

  .ring-2 > *:nth-of-type(2) {
    transform: rotate(95deg) translate(7.5em) rotate(-95deg);
  }

  .ring-2 > *:nth-of-type(3) {
    transform: rotate(142.5deg) translate(7.5em) rotate(-142.5deg);
  }

  .ring-2 > *:nth-of-type(4) {
    transform: rotate(190deg) translate(7.5em) rotate(-190deg);
  }

  .ring-2 > *:nth-of-type(5) {
    transform: rotate(237.5deg) translate(7.5em) rotate(-237.5deg);
  }

  .ring-2 > *:nth-of-type(6) {
    transform: rotate(285deg) translate(7.5em) rotate(-285deg);
  }

  .ring-2 > *:nth-of-type(7) {
    transform: rotate(332.5deg) translate(7.5em) rotate(-332.5deg);
  }

  .ring-2 > *:nth-of-type(8) {
    transform: rotate(380deg) translate(7.5em) rotate(-380deg);
  }

  .ring-3 {
    width: 10em;
    height: 10em;
    animation: clockwiseRotate 20s linear infinite;
  }

  .ring-3 i {
    animation: counterClockwiseRotate 20s linear infinite;
  }

  .ring-3 > *:nth-of-type(1) {
    transform: rotate(126.66667deg) translate(5em) rotate(-126.66667deg);
  }

  .ring-3 > *:nth-of-type(2) {
    transform: rotate(253.33333deg) translate(5em) rotate(-253.33333deg);
  }

  .ring-3 > *:nth-of-type(3) {
    transform: rotate(380deg) translate(5em) rotate(-380deg);
  }

  ul[class^="ring"] {
    border: solid 1px ${(props) => props.theme.grayShade100};
    position: relative;
    padding: 0;
    border-radius: 50%;
    list-style: none;
    box-sizing: content-box;
  }

  ul[class^="ring"] li {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.6em;
    height: 1.6em;
    margin: -0.8em;
  }

  /*
  center;
*/
  .orbit-center {
    z-index: 5;
    font-size: 2em;
    width: 1.8em;
    height: 1.8em;
    line-height: 1.8em;
    text-align: center;
    background: ${(props) => props.theme.text};
    border-radius: 50%;
  }

  .orbit-center:hover .orbit-center__icon {
    transform: rotateZ(0deg);
  }

  .orbit-center__icon {
    transform: rotateZ(-360deg);
    transition: all 300ms ease-in-out;
  }

  .orbit-wrap > li.orbit-center:hover ~ li > ul {
    width: 0;
    height: 0;
  }

  .orbit-wrap > li.orbit-center:hover ~ li > ul * {
    transform: translate(0, 0);
  }

  /* 
animations 
*/
  @keyframes clockwiseRotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes counterClockwiseRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;

export default SkillsOrbit;
