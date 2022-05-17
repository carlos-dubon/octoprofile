import type { NextPage } from "next";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import { UserHero, Stats, UsefulCharts, BrowseTheRepos } from "@lib/templates";
import { useGetRepos, useGetUser } from "@app/hooks";
const Profile: NextPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const [user] = useGetUser(id?.toString());
  const [] = useGetRepos(user.username);

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
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Profile;
