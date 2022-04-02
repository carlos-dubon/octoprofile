import { FC } from "react";
import { Stat } from "@lib/molecules";
import { css } from "@emotion/react";
import { useGetUser } from "@app/hooks";

const Stats: FC = () => {
  const [user, loading] = useGetUser();

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
      <Stat value={user.amountOfRepos} label="Repositories" loading={loading} />
      <Stat value={user.followers} label="Followers" loading={loading} />
      <Stat value={user.following} label="Following" loading={loading} />
    </div>
  );
};

export { Stats };
