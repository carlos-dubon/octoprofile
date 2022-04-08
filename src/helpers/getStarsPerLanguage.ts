import { AppChartData } from "@app/types/chartjs";
import { Repo } from "src/state/slices/reposSlice";
import { getLanguageColor } from "@lib/helpers";

const getStarsPerLanguage = (repos: Repo[]): AppChartData => {
  const languages = repos.reduce((acc, repo) => {
    if (repo.language && !repo.isFork) {
      acc[repo.language] = acc[repo.language] + repo.stars || repo.stars;
    }
    return acc;
  }, {} as { [key: string]: number });

  const sortedLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const chartData: AppChartData = sortedLanguages.reduce(
    (prev: AppChartData, [language, count]) => {
      prev.labels.push(language);
      prev.datasets[0].data.push(count);
      prev.datasets[0].backgroundColor.push(getLanguageColor(language, 0.6));

      return prev;
    },
    {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
        },
      ],
    }
  );

  return chartData;
};

export { getStarsPerLanguage };
