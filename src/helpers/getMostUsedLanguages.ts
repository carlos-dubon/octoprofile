import { Repo } from "src/state/slices/reposSlice";

const getMostUsedLanguages = (repos: Repo[]): [string, number][] => {
  const languages = repos.reduce((acc, repo) => {
    if (repo.language && !repo.isFork) {
      acc[repo.language] = acc[repo.language] + 1 || 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  const sortedLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return sortedLanguages;
};

export { getMostUsedLanguages };
