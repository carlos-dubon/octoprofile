import { FC } from "react";
import { css } from "@emotion/react";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import { useGetUser } from "@app/hooks";
import Screens from "@app/styles/breakpoints";

const ProfilePicture: FC = () => {
  const containerStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 210px;
    height: 210px;
    @media (min-width: ${Screens.sm}px) {
      width: 225px;
      height: 225px;
    }
    position: relative;
    border-radius: 50%;
    margin-top: 4em;
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  `;

  const skeletonContainerStyles = css`
    width: 194px;
    height: 194px;
    border-radius: 50%;
    @media (min-width: ${Screens.sm}px) {
      width: 208px;
      height: 208px;
    }
  `;

  const skeletonStyles = css`
    position: relative;
    top: -2px;
  `;

  const imageContainerStyles = css`
    width: 194px;
    height: 194px;
    @media (min-width: ${Screens.sm}px) {
      width: 210px;
      height: 210px;
    }
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  `;

  const [user, loading] = useGetUser();

  return (
    <div css={containerStyles}>
      {loading ? (
        <div css={skeletonContainerStyles}>
          <Skeleton width="100%" height="100%" circle css={skeletonStyles} />
        </div>
      ) : (
        <div css={imageContainerStyles}>
          <Image src={user.avatarUrl} alt={user.displayName} layout="fill" />
        </div>
      )}
    </div>
  );
};

export { ProfilePicture };
