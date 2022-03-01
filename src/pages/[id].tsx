import type { NextPage } from "next";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import { UserHero } from "@lib/templates";
import { useAppSelector } from "@app/hooks";
import { User } from "src/state/slices/userSlice";
import { useEffect } from "react";

const Profile: NextPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const user: User | null = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log({ user });
  }, [user]);

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
      <div>{id}</div>
    </div>
  );
};

export default Profile;
