import { FC } from "react";
import { css } from "@emotion/react";
import Skeleton from "react-loading-skeleton";

const RepoCardSkeleton: FC = () => {
  const containerStyles = css`
    width: 100%;
    height: 12.813rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: 8px;
    background-color: #ffffff;
    padding: 1.325rem;
  `;

  const titleSkeletonStyles = css`
    width: 180px;
    height: 24px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1em;
  `;

  const descriptionContainerStyles = css`
    display: flex;
    flex-direction: column;
    flex: 1;
  `;

  const descriptionSkeletonStyles = css`
    width: 100%;
    height: 1.1em;
    margin-bottom: 0.6em;
  `;

  const badgeContainerStyles = css`
    display: flex;
    gap: 0.5em;
  `;

  const badgeSkeletonStyles = css`
    height: 1.1em;
    width: 100%;
    max-width: 70px;
  `;

  return (
    <div css={containerStyles}>
      <div css={titleSkeletonStyles}>
        <Skeleton width="100%" height="100%" />
      </div>
      <div css={descriptionContainerStyles}>
        {new Array(3).fill(0).map((_, index) => (
          <div key={index} css={descriptionSkeletonStyles}>
            <Skeleton width="100%" height="100%" />
          </div>
        ))}
      </div>
      <div css={badgeContainerStyles}>
        {new Array(4).fill(0).map((_, index) => (
          <div key={index} css={badgeSkeletonStyles}>
            <Skeleton width="100%" height="100%" borderRadius={999999} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { RepoCardSkeleton };
