import styled from "styled-components";

function Footer() {
  return <Container></Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
  height: 400px;
  width: 100%;
  background-color: ${(props) => props.theme.body};
`;
export default Footer;
