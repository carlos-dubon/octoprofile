import { AppChartData } from "@app/types/chartjs";
import { Repo } from "src/state/slices/reposSlice";
import ghLangColors from "gh-lang-colors";
import { colord } from "colord";

const getMostUsedLanguages = (repos: Repo[]): AppChartData => {
  const languages = repos.reduce((acc, repo) => {
    if (repo.language && !repo.isFork) {
      acc[repo.language] = acc[repo.language] + 1 || 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  const sortedLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const chartData: AppChartData = sortedLanguages.reduce(
    (prev: AppChartData, [language, count]) => {
      const langColor: string = colord(
        ghLangColors[language as keyof typeof ghLangColors] || "rgba(0,0,0,0.7)"
      )
        .alpha(0.7)
        .toRgbString();

      prev.labels.push(language);
      prev.datasets[0].data.push(count);
      prev.datasets[0].backgroundColor.push(langColor);

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

export { getMostUsedLanguages };
