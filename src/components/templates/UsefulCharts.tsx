import { FC, useEffect } from "react";
import { SectionTitle } from "@lib/molecules";
import { css } from "@emotion/react";
import { Card } from "@lib/atoms";
import { useGetRepos } from "@app/hooks";
import { getMostUsedLanguages } from "src/helpers/getMostUsedLanguages";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const UsefulCharts: FC = () => {
  const [repos, loading] = useGetRepos();

  const mostUsedLanguagesChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
      },
    ],
  };

  useEffect(() => {
    !loading && console.log(getMostUsedLanguages(repos));
  }, [repos, loading]);

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

        <Card>{!loading && <Pie data={mostUsedLanguagesChartData} />}</Card>
      </div>
    </div>
  );
};

export { UsefulCharts };
