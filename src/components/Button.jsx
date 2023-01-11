import styled from "styled-components";
import PropTypes from "prop-types";
export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem 2rem;
  color: ${(props) =>
    props.variant === "primary" ? props.theme.btnText : props.theme.text};
  background-color: ${(props) =>
    props.variant === "primary" ? props.theme.btnBg : props.theme.body};
  border: 0.2rem solid ${(props) => props.theme.btnBorderColor};
  border-radius: 8rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:disabled {
    opacity: 0.9;
    filter: saturate(90%);
  }
`;

Button.propTypes = {
  variant: PropTypes.oneOf(["secondary", "primary"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: "secondary",
};

export default Button;
