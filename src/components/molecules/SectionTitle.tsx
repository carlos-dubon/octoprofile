import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";

interface Props {
  title: string;
  subtitle: string;
}

const SectionTitle: FC<Props> = ({ title, subtitle }) => {
  const containerStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const titleStyles = css`
    font-weight: 800;
    font-size: 2.3em;
    @media (min-width: ${Screens.sm}px) {
      font-size: 2.725em;
    }
    @media (min-width: ${Screens.md}px) {
      font-size: 2.8em;
    }
    @media (min-width: ${Screens.lg}px) {
      font-size: 3em;
    }
    line-height: 133%;
    color: ${Colors.gray900};
    margin: 8px 0px;
    max-width: 540px;
    text-align: center;
  `;

  const subtitleStyles = css`
    font-weight: normal;
    font-size: 1em;
    @media (min-width: ${Screens.sm}px) {
      font-size: 1.125em;
    }
    line-height: 178%;
    color: ${Colors.gray900};
    margin: 8px 0px;
    max-width: 540px;
    text-align: center;
  `;

  return (
    <div css={containerStyles}>
      <h2 css={titleStyles}>{title}</h2>
      <h3 css={subtitleStyles}>{subtitle}</h3>
    </div>
  );
};

export { SectionTitle };
