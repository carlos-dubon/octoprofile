import { FC, ReactNode } from "react";
import { css } from "@emotion/react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  const containerStyles = css`
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: 8px;
    background-color: #fff;
    padding: 1em;
  `;

  return (
    <div css={containerStyles} className={className}>
      {children}
    </div>
  );
};

export { Card };
