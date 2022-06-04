import { FC, ReactNode } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";

interface Props {
  children: ReactNode;
}

const Badge: FC<Props> = ({ children }) => {
  const containerStyles = css`
    height: 27px;
    background-color: ${Colors.gray100};
    border-radius: 99999999px;
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 0.4em;
    padding-left: 0.8em;
    padding-right: 0.8em;
  `;

  return <div css={containerStyles}>{children}</div>;
};

export { Badge };
