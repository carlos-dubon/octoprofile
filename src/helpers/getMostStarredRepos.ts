import { AppChartData } from "@app/types/chartjs";
import { Repo } from "src/state/slices/reposSlice";

const alpha: number = 0.6;

const colors: string[] = [
  `rgba(255,70,110,${alpha})`,
  `rgba(56,113,190,${alpha})`,
  `rgba(230,218,53,${alpha})`,
  `rgba(30,172,92,${alpha})`,
  `rgba(100,170,210,${alpha})`,
];

const getMostStarredRepos = (repos: Repo[]): AppChartData => {
  const sortedRepos = [...repos]
    .filter((repo) => !repo.isFork)
    .sort((a, b) => b.stars - a.stars);

  const mostStarredRepos = sortedRepos.slice(0, 5);

  const chartData = mostStarredRepos.reduce(
    (prev: AppChartData, repo: Repo) => {
      prev.labels.push(repo.name);
      prev.datasets[0].data.push(repo.stars);
      return prev;
    },
    {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: colors,
        },
      ],
    }
  );

  return chartData;
};

export { getMostStarredRepos };
