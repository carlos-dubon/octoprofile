import { useAppSelector, useGetRepos } from "@app/hooks";
import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { chunks } from "@lib/helpers";
import {
  Pagination,
  RepoCardSkeleton,
  FunctionalRepoCard,
} from "@lib/molecules";
import { NotFound } from "@lib/organisms";
import Screens from "@app/styles/breakpoints";
import { SortBy } from "src/state/slices/searchSlice";
import { Repo } from "src/state/slices/reposSlice";
import FlipMove from "react-flip-move";

const Repos: FC = () => {
  const query: string = useAppSelector((state) => state.search.query);
  const sort: SortBy = useAppSelector((state) => state.search.sort);

  const [repos, loading] = useGetRepos();
  const [pages, setPages] = useState<Repo[][] | null>(null);
  const [activePage, setActivePage] = useState<number>(0);

  const containerStyles = css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: calc(-2em - 2px);
  `;

  const cardContainerStyles = css`
    display: grid;
    justify-content: center;
    place-items: center;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    @media (min-width: ${Screens.md}px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: ${Screens.xl}px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    gap: 1.75em;
  `;

  useEffect(() => {
    if (!loading && repos.length > 0) {
      const fetchedRepos: Repo[] = [...repos];
      let repositories: Repo[] = [];

      if (sort == "Stars") {
        repositories = fetchedRepos.sort((a, b) => b.stars - a.stars);
      } else if (sort == "Forks") {
        repositories = fetchedRepos.sort((a, b) => b.forks - a.forks);
      } else if (sort == "Size") {
        repositories = fetchedRepos.sort((a, b) => b.size - a.size);
      }

      if (query.trim().length > 0) {
        setActivePage(0);
        repositories = repositories.filter((repo: Repo) =>
          repo.name.toLowerCase().includes(query.toLowerCase())
        );
      }

      const pages: IterableIterator<Repo[]> = chunks<Repo>(repositories, 6);
      setPages([...pages]);
    }
  }, [repos, loading, sort, query]);

  return (
    <div css={containerStyles}>
      {loading ? (
        <div className="container" css={cardContainerStyles}>
          {new Array(6).fill(0).map((_, index) => (
            <RepoCardSkeleton key={index} />
          ))}
        </div>
      ) : pages && pages[activePage] ? (
        <div>
          <FlipMove className="container" css={cardContainerStyles}>
            {pages[activePage].map((repo) => {
              return <FunctionalRepoCard key={repo.id} {...repo} />;
            })}
          </FlipMove>

          {pages.length > 1 && (
            <Pagination
              activePage={activePage}
              setActivePage={setActivePage}
              pageCount={pages.length}
            />
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export { Repos };
