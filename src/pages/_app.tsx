import type { AppProps } from "next/app";
import globalStyles from "@app/styles/globals";
import { Global, css } from "@emotion/react";

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
