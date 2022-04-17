import { FC } from "react";
import { SectionTitle, ChartTitle } from "@lib/molecules";
import { css } from "@emotion/react";
import { Card } from "@lib/atoms";
import { useGetRepos } from "@app/hooks";
import {
  getMostStarredRepos,
  getMostUsedLanguages,
  getStarsPerLanguage,
} from "@lib/helpers";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import Screens from "@app/styles/breakpoints";
import circleBg from "public/chartsCircle.svg";
import Image from "next/image";

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
    aspectRatio: 1,
  };

  const barChartOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    aspectRatio: 1.2,
  };

  const containerStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const cardStyles = css`
    width: 350px;
    height: 440px;
    padding: 2em;
    display: flex;
    flex-direction: column;
  `;

  const cardContainerStyles = css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2em;
    margin-top: 1.5rem;
    @media (min-width: ${Screens.md}px) {
      gap: 2em;
      margin-top: 2.5rem;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${Screens.xl}px) {
      gap: 1.36em;
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const chartContainerStyles = css`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

  const circleBgStyles = css`
    position: absolute;
    width: 540px;
    height: 540px;
    z-index: -2;
    transform: translateX(75%) translateY(-5%);
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
        <div css={circleBgStyles}>
          <Image src={circleBg} alt="Charts circle bg" layout="fill" priority />
        </div>

        <SectionTitle
          title="Some useful charts"
          subtitle="Charts are a fun way to visualize data!"
        />

        <div css={cardContainerStyles}>
          <Card css={cardStyles}>
            <ChartTitle
              title="Top Languages"
              subtitle="Your most used languages"
            />
            {!loading && (
              <div css={chartContainerStyles}>
                <Pie
                  data={getMostUsedLanguages(repos)}
                  options={pieChartOptions}
                />
              </div>
            )}
          </Card>
          <Card css={cardStyles}>
            <ChartTitle
              title="Most starred"
              subtitle="Your most starred repositories"
            />
            {!loading && (
              <div css={chartContainerStyles}>
                <Bar
                  data={getMostStarredRepos(repos)}
                  options={barChartOptions}
                />
              </div>
            )}
          </Card>
          <Card css={cardStyles}>
            <ChartTitle
              title="Stars per Language"
              subtitle="Number of stars per language"
            />
            {!loading && (
              <div css={chartContainerStyles}>
                <Doughnut
                  data={getStarsPerLanguage(repos)}
                  options={pieChartOptions}
                />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export { UsefulCharts };
