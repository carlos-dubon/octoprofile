import { FC } from "react";
import { Stat } from "@lib/molecules";
import { css } from "@emotion/react";
import { useGetUser } from "@app/hooks";
import Screens from "@app/styles/breakpoints";

const Stats: FC = () => {
  const containerStyles = css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.35em;
    padding-left: 1em;
    padding-right: 1em;
    transform: translateY(-50%);
    @media (min-width: ${Screens.sm}px) {
      gap: 2em;
    }
  `;

  const [user, loading] = useGetUser();

  return (
    <div css={containerStyles}>
      <Stat value={user.amountOfRepos} label="Repositories" loading={loading} />
      <Stat value={user.followers} label="Followers" loading={loading} />
      <Stat value={user.following} label="Following" loading={loading} />
    </div>
  );
};

export { Stats };
