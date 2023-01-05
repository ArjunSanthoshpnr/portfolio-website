import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    overflow-y: overlay;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
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
