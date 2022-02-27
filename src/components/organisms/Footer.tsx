import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "public/logoWhite.svg";
import { TranslucentNavLink } from "@lib/atoms";

const Footer: FC = () => {
  const containerStyles = css`
    margin-top: 8.125em;
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${Colors.turquoise900};
  `;

  const footerStyles = css`
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    min-height: 72px;
  `;

  return (
    <div css={containerStyles}>
      <div className="container" css={footerStyles}>
        <Link href="/">
          <a>
            <Image
              src={logoWhite}
              alt={"Logo white"}
              width={136.41}
              height={28}
            />
          </a>
        </Link>
        <p>© {new Date().getFullYear()} OctoProfile. All rights reserved</p>
        <TranslucentNavLink>
          <div
            css={css`
              display: grid;
              align-items: center;
              width: 2em;
            `}
          >
            <Image
              src="/icons/github.svg"
              alt="github"
              width={18}
              height={18}
            />
          </div>
        </TranslucentNavLink>
      </div>
    </div>
  );
};

export { Footer };
