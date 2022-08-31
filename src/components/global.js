import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    /* color: ${({ theme }) => theme.text}; */
    transition: all 0.25s linear;
  }
  div#root {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
    }

    @media screen and (max-width: 480px) {
    margin: 0 2rem;
    }
  `;
