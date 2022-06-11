import { FC, ReactNode } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";

interface Props {
  children: ReactNode;
  className?: string;
}

const Badge: FC<Props> = ({ children, className }) => {
  const containerStyles = css`
    height: 27px;
    background-color: ${Colors.gray100};
    border-radius: 99999999px;
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 0.4em;
    padding-left: 0.6em;
    padding-right: 0.6em;
  `;

  return (
    <div className={className} css={containerStyles}>
      {children}
    </div>
  );
};

export { Badge };
