import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Image from "next/image";
import { TranslucentNavLink } from "@lib/atoms";

const UserHero: FC = () => {
  const containerStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 750px;
    color: #ffffff;
  `;

  const wavesStyles = css`
    width: 100%;
    height: 750px;
    position: absolute;
    z-index: -1;
    top: 0;
    background: ${Colors.purple900};
  `;

  return (
    <div css={containerStyles}>
      <div css={wavesStyles}>
        <Image
          src="/waves.svg"
          alt="waves"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="container">
        <div
          css={css`
            display: flex;
            width: 100%;
            justify-content: flex-end;
            margin-top: 1em;
          `}
        >
          <TranslucentNavLink href="https://github.com/carlos-dubon/octoprofile">
            <div
              css={css`
                display: flex;
                gap: 0.5em;
                padding: 0 0.75em;
                height: 2em;
                align-items: center;
                font-size: 0.875em;
              `}
            >
              <Image
                src="/icons/github.svg"
                alt="github"
                width={18}
                height={18}
                priority
              />
              <div className="hide-mobile">Contribute</div>
            </div>
          </TranslucentNavLink>
        </div>
      </div>
    </div>
  );
};

export { UserHero };
