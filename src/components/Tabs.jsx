import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTab = styled.span`
  font-size: 18px;
  color: ${(props) =>
    props.active ? props.theme.text : props.theme.btnBgFade};
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
`;

export const Tab = ({ label, title = "Title", ...props }) => {
  return (
    <StyledTab active={props.active} onClick={() => props.onClick(label)}>
      {title}
    </StyledTab>
  );
};

export const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("home");

  const switchTabs = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      {props.children.map((tab) => {
        return (
          <Link key={tab.props.label} to={tab.props.path}>
            <Tab
              onClick={switchTabs}
              active={activeTab === tab.props.label}
              {...tab.props}
            />
          </Link>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export default Tabs;
