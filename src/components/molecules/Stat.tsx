import { FC } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import hexagon from "public/hexagon.svg";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { formatLargeNumber } from "@lib/helpers";
import Screens from "@app/styles/breakpoints";

interface Props {
  value: number;
  label: string;
  loading: boolean;
}

const Stat: FC<Props> = ({ value, label, loading = true }) => {
  const containerStyles = css`
    position: relative;
  `;

  const hexagonStyles = css`
    filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
  `;

  const contentStyles = css`
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `;

  const divStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.325em;
    @media (min-width: ${Screens.sm}px) {
      gap: 0.5em;
    }
  `;

  const valueStyles = css`
    width: 78px;
    height: 31px;
    text-align: center;
    font-size: 1.6em;
    font-weight: 800;
    color: ${Colors.gray900};
    @media (min-width: ${Screens.sm}px) {
      font-size: 2.5em;
      width: 120px;
      height: 49px;
    }
    @media (min-width: ${Screens.md}px) {
      font-size: 3em;
      width: 145px;
      height: 59px;
    }
  `;

  const labelStyles = css`
    width: 75px;
    height: 15px;
    text-align: center;
    font-size: 0.8em;
    font-weight: 400;
    color: ${Colors.gray900};
    @media (min-width: ${Screens.sm}px) {
      font-size: 1em;
      width: 95px;
      height: 20px;
    }
    @media (min-width: ${Screens.md}px) {
      font-size: 1.125em;
      width: 106px;
      height: 21px;
    }
  `;

  return (
    <div css={containerStyles}>
      <div css={hexagonStyles}>
        <Image
          src={hexagon}
          alt={"Hexagon shape"}
          width={255}
          height={255}
          priority
        />
      </div>

      <div css={contentStyles}>
        <div css={divStyles}>
          <div css={valueStyles}>
            {loading ? (
              <Skeleton width="100%" height="100%" />
            ) : (
              formatLargeNumber(value)
            )}
          </div>
          <div css={labelStyles}>
            {loading ? <Skeleton width="100%" height="100%" /> : label}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Stat };
