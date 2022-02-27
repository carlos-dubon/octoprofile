import { FC, MouseEventHandler, ReactNode } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";
import Link from "next/link";

interface Props {
  bgColor?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  external?: boolean;
  mobile?: boolean;
}

const Button: FC<Props> = ({
  children,
  bgColor,
  onClick,
  href,
  external,
  mobile,
}) => {
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

    ${mobile
      ? css`
          display: flex;
          width: 100%;
          justify-content: center;
          @media (min-width: ${Screens.sm}px) {
            width: fit-content;
          }
        `
      : ""}
  `;

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <a target={external ? "_blank" : ""} css={buttonStyles}>
            {children}
          </a>
        </Link>
      ) : (
        <button css={buttonStyles} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export { Button };
