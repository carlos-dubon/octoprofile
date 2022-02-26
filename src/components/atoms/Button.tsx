import { FC, MouseEventHandler, ReactNode } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Link from "next/link";

interface Props {
  bgColor?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

const Button: FC<Props> = ({ children, bgColor, onClick, href }) => {
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
      opacity: 0.9;
      cursor: pointer;
    }
  `;

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <a css={buttonStyles}>{children}</a>
        </Link>
      ) : (
        <button css={buttonStyles}>{children}</button>
      )}
    </>
  );
};

export { Button };
