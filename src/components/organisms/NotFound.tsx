import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";
import Image from "next/image";

const NotFound: FC = () => {
  const containerStyles = css`
    cursor: default;
    display: flex;
    align-items: center;
    gap: 1.2em;
    @media (min-width: ${Screens.sm}px) {
      gap: 1.5em;
    }
  `;

  const imageContainerStyles = css`
    position: relative;
    display: grid;
    place-items: center;
    width: 45px;
    height: 45px;
    @media (min-width: ${Screens.sm}px) {
      width: 65px;
      height: 65px;
    }
  `;

  const textContainerStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4em;
    max-width: 14em;
    @media (min-width: ${Screens.sm}px) {
      max-width: 18.5em;
    }
  `;

  const headlineStyles = css`
    font-size: 1.3em;
    @media (min-width: ${Screens.sm}px) {
      font-size: 1.5em;
    }
    font-weight: 600;
    color: ${Colors.gray700};
  `;

  const descriptionStyles = css`
    font-size: 0.8em;
    @media (min-width: ${Screens.sm}px) {
      font-size: 1em;
    }
    line-height: 1.5em;
    font-weight: 400;
    color: #b9b9b9;
  `;

  return (
    <div css={containerStyles}>
      <div css={imageContainerStyles}>
        <Image
          src="/icons/questionMark.svg"
          alt="not found"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div css={textContainerStyles}>
        <div css={headlineStyles}>No search results</div>
        <div css={descriptionStyles}>
          Try a different search term or try again later.
        </div>
      </div>
    </div>
  );
};

export { NotFound };
