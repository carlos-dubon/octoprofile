import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";
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
    display: grid;
    justify-content: center;
    padding-top: 2em;
    padding-bottom: 2em;
    gap: 1.2em;
    grid-template-areas:
      "copyright"
      "logo"
      "gitHub";
    color: #ffffff;
    @media (min-width: ${Screens.lg}px) {
      grid-template-areas: "logo copyright gitHub";
      justify-content: space-between;
      padding-top: 0;
      padding-bottom: 0;
      min-height: 72px;
    }
  `;

  const logoStyles = css`
    grid-area: logo;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const copyrightStyles = css`
    margin: 0;
    grid-area: copyright;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const gitHubStyles = css`
    grid-area: gitHub;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const currentYear: string = new Date().getFullYear().toString();

  return (
    <div css={containerStyles}>
      <div className="container" css={footerStyles}>
        <div css={logoStyles}>
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
        </div>
        <p css={copyrightStyles}>
          © {currentYear} OctoProfile. All rights reserved
        </p>
        <div css={gitHubStyles}>
          <Link href="https://github.com/carlos-dubon/octoprofile">
            <a>
              <TranslucentNavLink>
                <div
                  css={css`
                    display: grid;
                    align-items: center;
                    width: 28px;
                    height: 28px;
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
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Footer };
