import { FC } from "react";
import Colors from "@app/styles/colors";
import { css } from "@emotion/react";

interface Props {
  title: string;
  subtitle: string;
}

const ChartTitle: FC<Props> = ({ title, subtitle }) => {
  const containerStyles = css`
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  `;

  const titleStyles = css`
    font-size: 1.5em;
    font-weight: 600;
    color: ${Colors.gray900};
  `;

  const subtitleStyles = css`
    font-size: 1em;
    font-weight: 400;
    color: ${Colors.gray900};
  `;

  return (
    <div css={containerStyles}>
      <div css={titleStyles}>{title}</div>
      <div css={subtitleStyles}>{subtitle}</div>
    </div>
  );
};

export { ChartTitle };
