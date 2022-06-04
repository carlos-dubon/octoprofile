import { useGetRepos } from "@app/hooks";
import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { RepoCard } from "../molecules/RepoCard";
import { chunks } from "@lib/helpers";
import { Repo } from "src/state/slices/reposSlice";
import { Pagination } from "@lib/molecules";

const Repos: FC = () => {
  const [repos, loading] = useGetRepos();
  const [pages, setPages] = useState<Repo[][] | null>(null);
  const [activePage, setActivePage] = useState<number>(0);

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

  useEffect(() => {
    if (!loading && repos.length > 0) {
      const pages: IterableIterator<Repo[]> = chunks<Repo>(repos, 6);
      setPages([...pages]);
    }
  }, [repos, loading]);

  return (
    <div css={containerStyles}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container" css={cardContainerStyles}>
          {pages ? (
            <>
              {pages[activePage].map((repo, index) => {
                return <RepoCard key={index} {...repo} />;
              })}
              <Pagination
                activePage={activePage}
                setActivePage={setActivePage}
                itemsCountPerPage={6}
                totalItemsCount={repos.length}
                pageRangeDisplayed={5}
              />
            </>
          ) : (
            <div>No repos found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export { Repos };
