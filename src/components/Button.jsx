import styled from "styled-components";
import { toggleTheme } from "../utils/utils";
const Button = styled.button`
  color: var(
    --btn-text-${(props) => (props.primary ? "primary" : "secondary")}-${(
        props
      ) => toggleTheme(props)}
  );
  background-color: var(
    --btn-bg-${(props) => (props.primary ? "primary" : "secondary")}-${(
        props
      ) => toggleTheme(props)}
  );
  border: ${(props) => (props.primary ? "0" : "0.15rem")} solid #112132;
  border-radius: 4rem;
  padding: 1rem 2rem;
  font-size: 16px;
  font-weight: 600;
`;

export default Button;
