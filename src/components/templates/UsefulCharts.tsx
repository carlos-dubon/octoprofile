import { FC } from "react";
import { SectionTitle } from "@lib/molecules";
import { css } from "@emotion/react";
import { Card } from "@lib/atoms";
import { useGetRepos } from "@app/hooks";
import { getMostUsedLanguages } from "src/helpers/getMostUsedLanguages";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const UsefulCharts: FC = () => {
  const [repos, loading] = useGetRepos();

  const chartOptions: ChartOptions = {
    plugins: {
      legend: {
        position: "right",
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

        <Card>
          {!loading && (
            <Pie data={getMostUsedLanguages(repos)} options={chartOptions} />
          )}
        </Card>
      </div>
    </div>
  );
};

export { UsefulCharts };
