import { FC } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import hexagon from "public/hexagon.svg";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { formatLargeNumber } from "@lib/helpers";

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
    gap: 0.5em;
  `;

  const valueStyles = css`
    width: 100%;
    text-align: center;
    font-size: 3em;
    font-weight: 800;
    color: ${Colors.gray900};
  `;

  const labelStyles = css`
    width: 100%;
    text-align: center;
    font-size: 1.125em;
    font-weight: 400;
    color: ${Colors.gray900};
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
        {loading ? (
          <div css={divStyles}>
            <Skeleton width={162} height={59} />
            <Skeleton width={110} height={21} />
          </div>
        ) : (
          <div css={divStyles}>
            <div css={valueStyles}>{formatLargeNumber(value)}</div>
            <div css={labelStyles}>{label}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Stat };
