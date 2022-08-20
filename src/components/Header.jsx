import styled from "styled-components";
import { Moon, More } from "../assets";
import { toggleTheme } from "../utils/utils";
function Header({ darkTheme, setDarkTheme }) {
  return (
    <StyledHeader dark={darkTheme}>
      <h1>Arjun Santhosh</h1>
      <div className="links-group">
        <span>Blog</span>
        <span>About</span>
        <span>Skills</span>
        <span>Workspace</span>
        <span>Github</span>
        <span>Contact</span>
      </div>
      <div className="icon-group">
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          <input
            className={`toggle ${!darkTheme && "toggle-light"}`}
            type="checkbox"
          />
        </button>

        <More className="more-icon" color="#fff" height="44px" width="44px" />
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

  h1 {
    color: var(--text-primary-${(props) => toggleTheme(props)});
    margin-bottom: 0;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 480px) {
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
      color: var(--text-primary-${(props) => toggleTheme(props)});
      cursor: pointer;
      display: inline-block;
      position: relative;
      line-height: 2rem;
      :after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--text-primary-${(props) => toggleTheme(props)});
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;
      }
      :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
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
    @media screen and (max-width: 480px) {
      .more-icon {
        height: 24px;
        width: 24px;
      }
    }
  }
`;
