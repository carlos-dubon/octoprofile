import { FC, useMemo } from "react";
import { SectionTitle, ChartTitle } from "@lib/molecules";
import { css } from "@emotion/react";
import { Card, Loader } from "@lib/atoms";
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

  const mostUsedLanguages = useMemo(() => getMostUsedLanguages(repos), [repos]);
  const mostStarredRepos = useMemo(() => getMostStarredRepos(repos), [repos]);
  const starsPerLanguage = useMemo(() => getStarsPerLanguage(repos), [repos]);

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
    transform: translateX(60%) translateY(-5%);
    @media (min-width: ${Screens.sm}px) {
      transform: translateX(75%) translateY(-5%);
    }
  `;

  const noDataToDisplayStyles = css`
    font-size: 0.8em;
    @media (min-width: ${Screens.sm}px) {
      font-size: 1em;
    }
    font-weight: 400;
    color: #b9b9b9;
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
            <div css={chartContainerStyles}>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {mostUsedLanguages.datasets.at(0)?.data.length ? (
                    <Pie data={mostUsedLanguages} options={pieChartOptions} />
                  ) : (
                    <div css={noDataToDisplayStyles}>No data to display.</div>
                  )}
                </>
              )}
            </div>
          </Card>
          <Card css={cardStyles}>
            <ChartTitle
              title="Most starred"
              subtitle="Your most starred repositories"
            />

            <div css={chartContainerStyles}>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {mostStarredRepos.datasets.at(0)?.data.length ? (
                    <Bar data={mostStarredRepos} options={barChartOptions} />
                  ) : (
                    <div css={noDataToDisplayStyles}>No data to display.</div>
                  )}
                </>
              )}
            </div>
          </Card>
          <Card css={cardStyles}>
            <ChartTitle
              title="Stars per Language"
              subtitle="Number of stars per language"
            />
            <div css={chartContainerStyles}>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {starsPerLanguage.datasets.at(0)?.data.length ? (
                    <Doughnut
                      data={starsPerLanguage}
                      options={pieChartOptions}
                    />
                  ) : (
                    <div css={noDataToDisplayStyles}>No data to display.</div>
                  )}
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export { UsefulCharts };
