import type { AppProps } from "next/app";
import globalStyles from "@app/styles/globals";
import "react-loading-skeleton/dist/skeleton.css";
import { Global, css } from "@emotion/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import { Toaster } from "react-hot-toast";
import { store } from "@app/store";
import { Provider } from "react-redux";
import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Colors from "@app/styles/colors";
import Image from "next/image";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { scrollY } = useScroll();

  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest > 500) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    });
  }, [scrollY]);

  const goToTopStyles = css`
    background-color: ${Colors.gray900};
    right: 2.3rem;
    bottom: 2.3rem;
    cursor: pointer;
    position: fixed;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    &:hover {
      opacity: 0.95;
    }
  `;

  const goToTopArrowStyles = css`
    transform: rotate(-90deg);
  `;

  return (
    <>
      <Provider store={store}>
        <Global
          styles={css`
            ${globalStyles}
          `}
        />

        <Component {...pageProps} />

        <motion.div
          css={goToTopStyles}
          initial={{ y: 200 }}
          animate={{ y: showGoToTop ? 0 : 200 }}
          whileHover={{ y: -5 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div css={goToTopArrowStyles}>
            <Image
              src="/goToTopArrow.svg"
              alt="arrow"
              width={18.33}
              height={11.67}
              priority
              layout="fixed"
            />
          </div>
        </motion.div>

        <Toaster position="bottom-center" />
      </Provider>
    </>
  );
};

export default MyApp;
