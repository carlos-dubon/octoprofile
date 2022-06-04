import { useGetRepos } from "@app/hooks";
import { FC } from "react";
import { css } from "@emotion/react";
import { RepoCard } from "../molecules/RepoCard";

const Repos: FC = () => {
  const [repos, loading] = useGetRepos();

  const containerStyles = css`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const cardContainerStyles = css`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.75em;
  `;

  return (
    <div css={containerStyles}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container" css={cardContainerStyles}>
          {repos.map((repo, index) => {
            return <RepoCard key={index} {...repo} />;
          })}
        </div>
      )}
    </div>
  );
};

export { Repos };
