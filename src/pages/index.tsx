import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";
import { Header, Footer } from "@lib/organisms";
import { Hero, RecentlySearched } from "@lib/templates";
import { useAppDispatch } from "@app/hooks";
import { useEffect } from "react";
import { clearUser } from "src/state/slices/userSlice";
import { setLoadingUser, setLoadingRepos } from "src/state/slices/loadersSlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearUser());
    dispatch(setLoadingUser(true));
    dispatch(setLoadingRepos(true));
  }, [dispatch]);

  const pageStyles = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const containerStyles = css`
    display: flex;
    flex-direction: column;
  `;

  return (
    <div css={pageStyles}>
      <Head>
        <title>OctoProfile</title>
        <meta
          name="description"
          content="A nicer look at your GitHub profile and repositories. With data visualizations of your languages and stars."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className="container" css={containerStyles}>
        <Header />
        <Hero />
        <RecentlySearched />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
