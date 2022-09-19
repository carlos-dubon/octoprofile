import { FC, ReactNode } from "react";
import { css } from "@emotion/react";

interface Props {
  children: ReactNode;
}

const TranslucentIcon: FC<Props> = ({ children }) => {
  const containerStyles = css`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.1);
  `;

  return <div css={containerStyles}>{children}</div>;
};

export { TranslucentIcon };
