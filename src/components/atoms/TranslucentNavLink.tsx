import { FC, MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { css } from "@emotion/react";

interface Props {
  href?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

const TranslucentNavLink: FC<Props> = ({ href, onClick, children }) => {
  const styles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2em;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 999999px;
    cursor: pointer;
  `;

  return href ? (
    <Link href={href} passHref>
      <a css={styles}>{children}</a>
    </Link>
  ) : (
    <div css={styles} onClick={onClick}>
      {children}
    </div>
  );
};

export { TranslucentNavLink };
