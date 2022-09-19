import { css, SerializedStyles } from "@emotion/react";
import Screens from "@app/styles/breakpoints";

const globalStyles: SerializedStyles = css`
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
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI,
      sans-serif;
    overflow-x: hidden;
    position: relative;
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

  #__next {
    width: 100%;
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

  .hide-desktop {
    display: inherit;
    @media (min-width: ${Screens.sm}px) {
      display: none;
    }
  }

  .hide-mobile {
    display: none;
    @media (min-width: ${Screens.sm}px) {
      display: inherit;
    }
  }

  @keyframes babyFadeInRight {
    from {
      opacity: 0;
      transform: translate3d(3em, 0px, 0px);
    }
    to {
      transform: none;
    }
  }
`;

export default globalStyles;
