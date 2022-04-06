import { FC, ReactNode } from "react";
import { css as cssStyles, SerializedStyles } from "@emotion/react";

interface Props {
  children?: ReactNode;
  css?: SerializedStyles;
}

const Card: FC<Props> = ({ children, css }) => {
  const containerStyles = cssStyles`
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: 8px;
    background-color: #fff;
    padding: 1em;
    ${css}
  `;

  return <div css={containerStyles}>{children}</div>;
};

export { Card };
