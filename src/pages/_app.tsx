import "../styles/globals.scss";
import type { AppProps } from "next/app";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Inter", sans-serif;
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
            @media (min-width: 640px) {
              max-width: 640px;
            }
            @media (min-width: 768px) {
              max-width: 768px;
            }
            @media (min-width: 1024px) {
              max-width: 1024px;
            }
            @media (min-width: 1280px) {
              max-width: 1280px;
            }
            @media (min-width: 1536px) {
              max-width: 1536px;
            }
          }
        `}
      />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
