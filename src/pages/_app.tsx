import type { AppProps } from "next/app";
import globalStyles from "@app/styles/globals";
import { Global, css } from "@emotion/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
