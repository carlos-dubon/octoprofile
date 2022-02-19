import { css, SerializedStyles } from "@emotion/react";
import Screens from "@app/styles/breakpoints";

const globalStyles: SerializedStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  /* Text Selection Color */
  ::selection {
    background: rgba(198, 152, 250, 0.4);
  }

  input {
    ::selection {
      background: rgba(255, 194, 120, 0.4);
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    width: 1150px;
    max-width: 100vw;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    @media (min-width: ${Screens.sm}px) {
      max-width: ${Screens.sm}px;
    }
    @media (min-width: ${Screens.md}px) {
      max-width: ${Screens.md}px;
    }
    @media (min-width: ${Screens.lg}px) {
      max-width: ${Screens.lg}px;
    }
    @media (min-width: ${Screens.xl}px) {
      max-width: ${Screens.xl}px;
    }
    @media (min-width: ${Screens["2xl"]}px) {
      max-width: ${Screens["2xl"]}px;
    }
  }
`;

export default globalStyles;
