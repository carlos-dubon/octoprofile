import { FC } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { TranslucentNavLink } from "../atoms/TranslucentNavLink";

const Header: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4.5em;
        font-size: 0.875em;
        font-weight: 500;
        background-color: #c698fa;
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 2.5em;
        `}
      >
        <Link href="https://github.com/carlos-dubon/octoprofile">
          <a>Contribute</a>
        </Link>
        <Link href="https://github.com/carlos-dubon">
          <a>GitHub@carlos-dubon</a>
        </Link>
      </div>
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            alt="logo"
            width={136.41}
            height={28}
            priority
          />
        </a>
      </Link>
      <div
        css={css`
          display: flex;
          gap: 1em;
        `}
      >
        <TranslucentNavLink href="https://github.com/carlos-dubon/octoprofile">
          Star
        </TranslucentNavLink>
        <TranslucentNavLink href="https://github.com/carlos-dubon/octoprofile">
          Continue with GitHub
        </TranslucentNavLink>
      </div>
    </div>
  );
};

export { Header };
