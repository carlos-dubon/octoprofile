import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";
import Skeleton from "react-loading-skeleton";

interface Props {
  url?: string;
  picture?: string;
  displayName?: string;
  username?: string;
  loading: boolean;
}

const UserCard: FC<Props> = ({
  url,
  picture,
  displayName,
  username,
  loading,
}) => {
  const textWidth: number = 185;
  const smTextWidth: number = 160;

  const containerSytles = css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 96px;
    background: #ffffff;
    box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
    border-radius: 16px;

    ${loading
      ? ""
      : css`
          &:hover {
            cursor: pointer;
            background: ${Colors.grayHover};
          }
        `}

    @media (min-width: ${Screens.sm}px) {
      width: 270px;
      min-width: 270px;
      max-width: 270px;
      justify-content: flex-start;
    }
  `;

  const pictureStyles = css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 16px;
    margin-right: 16px;
    background: #ebebeb;
  `;

  const displayNameStyles = css`
    font-weight: 600;
    font-size: 1.125em;
    line-height: 178%;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: ${textWidth}px;
    @media (min-width: ${Screens.sm}px) {
      width: ${smTextWidth}px;
    }
  `;

  const usernameStyles = css`
    font-weight: normal;
    font-size: 1em;
    line-height: 162%;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: ${textWidth}px;
    @media (min-width: ${Screens.sm}px) {
      width: ${smTextWidth}px;
    }
  `;

  return (
    <Link href={url || ""} passHref={!loading} scroll={!loading}>
      <a css={containerSytles}>
        <div
          css={css`
            display: flex;
          `}
        >
          <div css={pictureStyles}>
            {loading ? (
              <Skeleton circle height="100%" />
            ) : (
              <Image src={picture!} alt={username} width={60} height={60} />
            )}
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              color: ${Colors.gray900};
            `}
          >
            <p css={displayNameStyles}>
              {loading ? <Skeleton width={160} /> : displayName}
            </p>
            <p css={usernameStyles}>
              {loading ? <Skeleton height={15} width={160} /> : `@${username}`}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export { UserCard };
