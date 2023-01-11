import { NavLink } from "react-router-dom";
import styled from "styled-components";
const StyledTab = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.grayShade200};
  cursor: pointer;
`;
export const Tab = ({ label, title = "Title", onClick, ...props }) => {
  return (
    <StyledTab active={props.active} onClick={onClick}>
      {title}
    </StyledTab>
  );
};

export const Tabs = (props) => {
  return (
    <Container>
      {props.children.map((tab) => {
        return (
          <NavLink
            key={tab.props.label}
            to={tab.props.path}
            className={({ isActive }) => (isActive ? "active-tab" : undefined)}
          >
            <Tab {...tab.props} />
          </NavLink>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  a {
    display: inline-block;
    position: relative;
    line-height: 2.5rem;
    text-decoration: none;

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
    }
    :hover:after {
      transform: scaleX(1);
    }
  }
  .active-tab {
    span {
      color: ${(props) => props.theme.text};
    }
    :link {
      color: ${(props) => props.theme.text};
    }
    :after {
      transform: scaleX(1);
    }
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export default Tabs;
