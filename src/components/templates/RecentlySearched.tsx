import { FC } from "react";
import { SectionTitle } from "../molecules/SectionTitle";
import { css } from "@emotion/react";
import Screens from "@app/styles/breakpoints";

const RecentlySearched: FC = () => {
  const containerStyles = css`
    margin-top: 3.75em;
    @media (min-width: ${Screens.lg}px) {
      margin-top: 0px;
    }
  `;

  return (
    <div css={containerStyles}>
      <SectionTitle
        title="Recently Searched"
        subtitle="300+ GitHub profiles searched on OctoProfile"
      />
    </div>
  );
};

export { RecentlySearched };
