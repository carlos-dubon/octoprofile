import { FC } from "react";
import { Stat } from "@lib/molecules";
import { css } from "@emotion/react";
import { useAppSelector } from "@app/hooks";

const Stats: FC = () => {
  const loading = useAppSelector((state) => state.loaders.loadingUser);
  const followers = useAppSelector((state) => state.user.followers);
  const following = useAppSelector((state) => state.user.following);
  const repositories = useAppSelector((state) => state.user.amountOfRepos);

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 2em;
        transform: translateY(-50%);
      `}
    >
      <Stat value={repositories} label="Repositories" loading={loading} />
      <Stat value={followers} label="Followers" loading={loading} />
      <Stat value={following} label="Following" loading={loading} />
    </div>
  );
};

export { Stats };
