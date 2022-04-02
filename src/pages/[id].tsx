import type { NextPage } from "next";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import { UserHero, Stats } from "@lib/templates";
import { useGetUser } from "@app/hooks";

const Profile: NextPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const [user, loading] = useGetUser(id?.toString());

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
      <div>{id}</div>
      <div>{!loading && JSON.stringify(user)}</div>
    </div>
  );
};

export default Profile;
