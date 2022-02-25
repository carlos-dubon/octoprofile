import Image from "next/image";
import { css } from "@emotion/react";
import { FC } from "react";
import Screens from "@app/styles/breakpoints";

const HeroBgCircles: FC = () => {
  return (
    <div
      className="container"
      css={css`
        top: 0;
        position: absolute;
        display: flex;
        justify-content: flex-end;
        z-index: -1;
        overflow: hidden;
        @media (min-width: ${Screens.sm}px) {
          overflow: visible;
        }
      `}
    >
      <div
        css={css`
          transform: translateX(140px) translateY(-120px);
          @media (min-width: ${Screens.sm}px) {
            transform: translateX(195px) translateY(-195px);
          }
          @media (min-width: ${Screens.md}px) {
            transform: translateX(350px) translateY(-295px);
          }
        `}
      >
        <Image
          src="/circles.svg"
          alt="circles"
          width={828}
          height={861}
          priority
        />
      </div>
    </div>
  );
};

export { HeroBgCircles };
