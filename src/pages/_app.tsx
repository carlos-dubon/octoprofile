import type { AppProps } from "next/app";
import globalStyles from "@app/styles/globals";
import "baby-i-am-faded/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Global, css } from "@emotion/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import { Toaster } from "react-hot-toast";
import { store } from "@app/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <Global
          styles={css`
            ${globalStyles}
          `}
        />

        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </Provider>
    </>
  );
};

export default MyApp;
