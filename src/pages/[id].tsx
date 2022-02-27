import type { NextPage } from "next";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
const Profile: NextPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

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
      <div>{id}</div>
    </div>
  );
};

export default Profile;
