import type { NextPage } from "next";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import {
  UserHero,
  Stats,
  UsefulCharts,
  BrowseTheRepos,
  Repos,
} from "@lib/templates";
import { useGetRepos, useGetUser, useSetRecentlySearched } from "@app/hooks";
import { Footer } from "@lib/organisms";

const Profile: NextPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const [user] = useGetUser(id?.toString());
  const [] = useGetRepos(user.username);

  useSetRecentlySearched(user);

  return (
    <div>
      <Head>
        <title>OctoProfile | {id}</title>
        <meta
          name="description"
          content={`Discover ${id}'s GitHub profile and repositories at OctoProfile.`}
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <UserHero />
      <Stats />
      <UsefulCharts />
      <BrowseTheRepos />
      <Repos />
      <Footer />
    </div>
  );
};

export default Profile;
