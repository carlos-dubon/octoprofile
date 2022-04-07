import { GitHubApiRepo } from "@app/types/gitHubApi";
import { setLoadingRepos } from "src/state/slices/loadersSlice";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch, useGetUser } from "@app/hooks";
import axios from "axios";
import to from "await-to-ts";
import { Repo, setRepos } from "src/state/slices/reposSlice";

// eslint-disable-next-line valid-jsdoc
/**
 *
 * use throughout the app instead of `useAppSelector((state) => state.repos);` to get repos data
 */
const useGetRepos = (username?: string): [Repo[], boolean, Error | null] => {
  const dispatch = useAppDispatch();

  const [user] = useGetUser();

  const loadingRepos = useAppSelector((state) => state.loaders.loadingRepos);
  const repos = useAppSelector((state) => state.repos);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getRepos = async () => {
      dispatch(setLoadingRepos(true));

      const pages: number = Math.ceil(user.amountOfRepos / 100);

      const [err, res] = await to(
        Promise.all(
          [...Array(pages)].map((_, currentPage: number) =>
            axios.get(
              `https://api.github.com/users/${user.username}/repos?page=${
                currentPage + 1
              }&per_page=100`
            )
          )
        )
      );

      setError(err);

      const mergedRes = res.reduce((prev, curr) => {
        const { data } = curr;

        return prev.concat(...data);
      }, <GitHubApiRepo[]>[]);

      const repos: Repo[] = mergedRes.map((repo: GitHubApiRepo) => {
        return {
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          size: repo.size,
          isFork: repo.fork,
        };
      });

      dispatch(setRepos(repos));
      dispatch(setLoadingRepos(false));
    };

    if (username) {
      if (user.amountOfRepos > 0) {
        getRepos();
      } else {
        dispatch(setLoadingRepos(false));
      }
    }
  }, [user, dispatch, username]);

  return [repos, loadingRepos, error];
};

export { useGetRepos };
