import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";
import { SectionTitle } from "@lib/molecules";
import bands from "public/bands.svg";
import externalLink from "public/icons/externalLink.svg";
import Image from "next/image";
import { Button } from "@lib/atoms";
import { UsersGrid } from "@lib/organisms";

const RecentlySearched: FC = () => {
  const containerStyles = css`
    margin-top: 3.75em;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    @media (min-width: ${Screens.lg}px) {
      margin-top: 0px;
    }
  `;

  const bandStyles = css`
    position: absolute;
    z-index: -1;
    width: 1832px;
    height: 387px;
    transform: translateX(-30%) translateY(100%);
    @media (min-width: ${Screens.sm}px) {
      transform: translateY(70%);
    }
  `;

  const buttonStyles = css`
    display: flex;
    align-items: center;
    gap: 0.625em;
    p {
      margin: 0;
    }
  `;

  return (
    <div css={containerStyles}>
      <SectionTitle
        title="Recently Searched"
        subtitle="300+ GitHub profiles searched on OctoProfile"
      />
      <UsersGrid />
      <div css={bandStyles}>
        <Image src={bands} alt={"bands"} priority width={1832} height={387} />
      </div>
      <Button
        bgColor={Colors.gray900}
        href={"https://github.com/carlos-dubon/octoprofile"}
        external
        mobile
      >
        <div css={buttonStyles}>
          <p>Contribute</p>
          <Image
            src={externalLink}
            alt="External link"
            width={16}
            height={16}
            priority
          />
        </div>
      </Button>
    </div>
  );
};

export { RecentlySearched };
