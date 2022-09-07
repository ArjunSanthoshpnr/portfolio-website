import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { More } from "../assets";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "./Tabs";

function Header({ theme, toggleTheme }) {
  const setTabActive = (tabId) => {
    setActiveTab(tabId);
  };

  const handleClick = (props) => {
    console.log(props.target.id);
    setActiveTab(props.target.id);
  };
  const [activeTab, setActiveTab] = useState("home");
  const currentTheme = useTheme();
  return (
    <StyledHeader>
      <h1>Arjun Santhosh</h1>
      <Tabs>
        <Tab label="home" title="Home" />
        <Tab label="about" title="About" />
      </Tabs>
      <div className="links-group">
        <Link to="/">
          <span id="home" onClick={handleClick}>
            Home
          </span>
        </Link>
        <Link to="/about">
          <span className="active" onClick={handleClick}>
            About
          </span>
        </Link>
        <Link to="/skills">
          <span onClick={() => setTabActive("skills")}>Skills</span>
        </Link>
        <Link to="/work-space">
          <span onClick={() => setTabActive("workspace")}>Workspace</span>
        </Link>
        <a
          href="https://github.com/arjunsanthoshpnr"
          target="_blank"
          rel="noreferrer"
        >
          <span>Github</span>
        </a>
        <span onClick={() => setTabActive("contact")}>Contact</span>
      </div>
      <div className="icon-group">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          <input
            className={`toggle ${theme === "light" && "toggle-light"}`}
            type="checkbox"
          />
        </button>

        <More
          className="more-icon"
          color={currentTheme.text}
          height="44px"
          width="44px"
        />
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  max-width: 2000px;
  transition: color 500ms;

  @media screen and (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 576px) {
    width: calc(100% - 4rem);
    margin-right: auto;
    padding: 1rem 2rem;
    /* margin: 0 4rem; */
    .more-icon {
      height: 24px;
      width: 24px;
    }
  }

  h1 {
    color: ${(props) => props.theme.text};
    margin-bottom: 0;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 576px) {
      font-size: 22px;
      margin-top: 1.5rem;
    }
  }
  .links-group {
    display: flex;
    gap: 4rem;
    align-items: center;
    span {
      font-size: 18px;
      color: ${(props) => props.theme.text};
      cursor: pointer;
      display: inline-block;
      position: relative;
      line-height: 2.5rem;
      :after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${(props) => props.theme.text};
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;
        transform: ${(props) => props.active && "scaleX(1)"};
      }
      :hover:after {
        transform: scaleX(1);
      }
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  .icon-group {
    display: flex;
    align-items: center;
    .theme-toggle-btn {
      cursor: pointer;
      background: none;
      height: 60px;
      width: 60px;
      border-radius: 8rem;
      border: 0.1rem solid #aaa;
      display: flex;
      align-items: center;
      justify-content: center;
      .toggle {
        --size: 2rem;
        appearance: none;
        outline: none;
        cursor: pointer;
        width: var(--size);
        height: var(--size);

        border-radius: 999px;
        box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
        color: hsl(240, 100%, 95%);
        transition: all 500ms;
      }
      .toggle-light {
        --ray-size: calc(var(--size) * -0.45);
        --offset-orthogonal: calc(var(--size) * 0.65);
        --offset-diagonal: calc(var(--size) * 0.45);

        transform: scale(0.75);
        color: hsl(40, 100%, 50%);
        box-shadow: inset 0 0 0 var(--size),
          calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
          var(--offset-orthogonal) 0 0 var(--ray-size),
          0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
          0 var(--offset-orthogonal) 0 var(--ray-size),
          calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
            var(--ray-size),
          var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
          calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0
            var(--ray-size),
          var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0
            var(--ray-size);
      }
    }
    .more-icon {
      display: none;
    }
    @media screen and (max-width: 1200px) {
      .theme-toggle-btn {
        display: none;
      }
      .more-icon {
        display: flex;
      }
    }
  }
`;
