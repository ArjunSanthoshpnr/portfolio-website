import styled from "styled-components";

function Timeline({ children }) {
  return (
    <Container>
      <ul className="timeline">{children}</ul>
    </Container>
  );
}

const Container = styled.div`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05em;
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  width: 800px;

  .timeline {
    position: relative;
    max-width: 95%;
    list-style: none;
    &:before {
      background-color: black;
      content: "";
      margin-left: -1px;
      position: absolute;
      top: 0;
      left: 2em;
      width: 2px;
      height: 100%;
    }
  }
`;

export default Timeline;
