import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";

interface Props {
  url: string;
  picture: string;
  displayName: string;
  username: string;
}

const UserCard: FC<Props> = ({ url, picture, displayName, username }) => {
  return (
    <Link href={url} passHref>
      <a
        css={css`
          display: flex;
          align-items: center;
          width: 270px;
          min-width: 270px;
          max-width: 270px;
          height: 96px;
          background: #ffffff;
          box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
          border-radius: 16px;
          &:hover {
            cursor: pointer;
            background: ${Colors.grayHover};
          }
        `}
      >
        <div
          css={css`
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            margin-left: 16px;
            margin-right: 16px;
            background: ${Colors.gray200};
          `}
        >
          <Image src={picture} alt={username} width={60} height={60} />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            color: ${Colors.gray900};
          `}
        >
          <p
            css={css`
              font-weight: 600;
              font-size: 1.125em;
              line-height: 178%;
              margin: 0;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              width: 160px;
            `}
          >
            {displayName}
          </p>
          <p
            css={css`
              font-weight: normal;
              font-size: 1em;
              line-height: 162%;
              margin: 0;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              width: 160px;
            `}
          >
            @{username}
          </p>
        </div>
      </a>
    </Link>
  );
};

export { UserCard };
