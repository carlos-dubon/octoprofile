import type { NextPage } from "next";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import { UserHero } from "@lib/templates";
import { useAppSelector, useGetUser } from "@app/hooks";
import { User } from "src/state/slices/userSlice";

const Profile: NextPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const loadingUser: boolean = useAppSelector(
    (state) => state.loaders.loadingUser
  );
  const user: User = useAppSelector((state) => state.user);

  useGetUser(id);

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
      <div>{!loadingUser && JSON.stringify(user)}</div>
    </div>
  );
};

export default Profile;
