import { FC, MouseEventHandler, ReactNode } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";

interface Props {
  bgColor?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ children, bgColor, onClick }) => {
  const buttonStyles = css`
    background-color: ${bgColor ? bgColor : Colors.purple900};
    color: #ffffff;
    padding: 0.75em 1.75em;
    border-radius: 6px;
    border: none;
    outline: inherit;
    font-family: Inter;
    font-weight: 500;
    font-size: 1em;
    line-height: 150%;
    text-align: center;
    &:hover {
      opacity: 0.95;
      cursor: pointer;
    }
  `;

  return (
    <button onClick={onClick} css={buttonStyles}>
      {children}
    </button>
  );
};

export { Button };
