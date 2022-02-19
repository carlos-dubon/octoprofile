import { FC } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { TranslucentNavLink } from "../atoms/TranslucentNavLink";
import Colors from "@app/styles/colors";
import Tippy from "@tippyjs/react";

const Header: FC = () => {
  const containerStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5em;
    font-size: 0.875em;
    font-weight: 500;
  `;

  const leftNavStyles = css`
    display: flex;
    gap: 2.5em;
    color: ${Colors.gray900};
  `;

  const rightNavStyles = css`
    display: flex;
    gap: 1em;
  `;

  return (
    <div css={containerStyles}>
      <div css={leftNavStyles}>
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
      <div css={rightNavStyles}>
        <Tippy content="Star this project" delay={200} offset={[0, 12]}>
          <div>
            <TranslucentNavLink href="https://github.com/carlos-dubon/octoprofile">
              <div
                css={css`
                  display: grid;
                  align-items: center;
                  width: 2em;
                `}
              >
                <Image
                  src="/icons/star.svg"
                  alt="star"
                  width={18}
                  height={18}
                  priority
                />
              </div>
            </TranslucentNavLink>
          </div>
        </Tippy>
        <Tippy content="Sign in with GitHub" delay={200} offset={[0, 12]}>
          <div>
            <TranslucentNavLink
              onClick={() => {
                console.log("Log in");
              }}
            >
              <div
                css={css`
                  display: flex;
                  gap: 0.5em;
                  padding: 0 0.75em;
                `}
              >
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={18}
                  height={18}
                  priority
                />
                <div>Continue with GitHub</div>
              </div>
            </TranslucentNavLink>
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export { Header };
