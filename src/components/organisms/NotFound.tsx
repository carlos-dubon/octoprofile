import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Image from "next/image";

const NotFound: FC = () => {
  const containerStyles = css`
    cursor: default;
    display: flex;
    gap: 1.5em;
  `;

  const textContainerStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4em;
    max-width: 18.5em;
  `;

  const headlineStyles = css`
    font-size: 1.5em;
    font-weight: 600;
    color: ${Colors.gray700};
  `;

  const descriptionStyles = css`
    font-size: 1em;
    line-height: 1.5em;
    font-weight: 400;
    color: #b9b9b9;
  `;

  return (
    <div css={containerStyles}>
      <Image
        src="/icons/questionMark.svg"
        alt="not found"
        width={70}
        height={70}
      />
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
