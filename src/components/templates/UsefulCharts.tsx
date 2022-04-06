import { FC } from "react";
import { SectionTitle } from "@lib/molecules";
import { css } from "@emotion/react";
import { Card } from "@lib/atoms";

const UsefulCharts: FC = () => {
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

        <Card>Hello world</Card>
      </div>
    </div>
  );
};

export { UsefulCharts };
