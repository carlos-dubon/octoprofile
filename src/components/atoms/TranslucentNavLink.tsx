import { FC, ReactNode } from "react";
import Link from "next/link";
import { css } from "@emotion/react";

interface Props {
  href: string;
  children: ReactNode;
}

const TranslucentNavLink: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2em;
          padding-left: 1em;
          padding-inline-end: 1em;
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 999999px;
        `}
      >
        {children}
      </a>
    </Link>
  );
};

export { TranslucentNavLink };
