import { FC } from "react";
import { SectionTitle } from "@lib/molecules";
import { css } from "@emotion/react";
import { Card } from "@lib/atoms";
import { useGetRepos } from "@app/hooks";
import {
  getMostStarredRepos,
  getMostUsedLanguages,
  getStarsPerLanguage,
} from "@lib/helpers";
import { Pie, Bar, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const UsefulCharts: FC = () => {
  const [repos, loading] = useGetRepos();

  const pieChartOptions: ChartOptions = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  const barChartOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const containerStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <div css={containerStyles}>
      <div
        className="container"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <SectionTitle
          title="Some useful charts"
          subtitle="Charts are a fun way to visualize data!"
        />

        <div
          css={css`
            display: flex;
            gap: 1em;
          `}
        >
          <Card>
            {!loading && (
              <Pie
                data={getMostUsedLanguages(repos)}
                options={pieChartOptions}
              />
            )}
          </Card>
          <Card>
            {!loading && (
              <Bar
                data={getMostStarredRepos(repos)}
                options={barChartOptions}
              />
            )}
          </Card>
          <Card>
            {!loading && (
              <Doughnut
                data={getStarsPerLanguage(repos)}
                options={pieChartOptions}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export { UsefulCharts };
