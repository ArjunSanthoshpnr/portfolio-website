import styled from "styled-components";
import { Signature } from "../assets";
function Footer() {
  return (
    <Container>
      <div className="personal-info item1">
        <span className="title">Arjun Santhosh</span>
        <span>Software Engineer making our world better</span>
      </div>

      <div className="sign item5">
        <Signature className="sign" />
      </div>

      <div className="copyrights item6">
        All rights reserved © Arjun Santhosh 2022
      </div>

      <div className="links-group item2">
        <span className="title">Explore</span>
        <span>Home</span>
        <span>About</span>
        <span>Skills</span>
        <span>Github</span>
        <span>Contact</span>
      </div>

      <div className="links-group item3">
        <span className="title">Follow</span>
        <span>Twitter</span>
        <span>LinkedIn</span>
        <span>Instagram</span>
        <span>Github</span>
      </div>
      <div className="links-group item4">
        <span className="title">Links</span>
        <span>Privacy</span>
        <span>Legal</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
  height: 300px;
  width: 100%;
  max-width: 1560px;
  color: ${(props) => props.theme.text};
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 1rem;

  .personal-info {
    .title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    display: flex;
    flex-flow: column;
  }

  .sign {
    margin-top: 2rem;
    path {
      fill: ${(props) => props.theme.text};
    }
  }

  .copyrights {
    display: flex;
    align-items: flex-end;
  }
  .links-group {
    .title {
      font-size: 16px;
      font-weight: 500;
    }
    display: flex;
    gap: 1rem;
    flex-flow: column;
  }

  .item1 {
    grid-column: 1/4;
    grid-row: row1-start/row1-end;
  }
  .item2 {
    grid-column: 4/5;
  }
  .item3 {
    grid-column: 5/6;
  }
  .item4 {
    grid-column: 6/7;
  }
  .item5 {
    grid-column: 1/4;
    grid-row: row1-end/third-line;
  }
  .item6 {
    grid-column: 1/4;
    grid-row: third-line/last-line;
  }
`;
export default Footer;
