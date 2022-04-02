import { FC } from "react";
import { css } from "@emotion/react";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import { useGetUser } from "@app/hooks";

const ProfilePicture: FC = () => {
  const containerStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 225px;
    height: 225px;
    border-radius: 50%;
    margin-top: 3.75em;
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  `;

  const [user, loading] = useGetUser();

  return (
    <div css={containerStyles}>
      {loading ? (
        <div
          css={css`
            width: 208px;
            height: 208px;
            border-radius: 50%;
          `}
        >
          <Skeleton
            width={208}
            height={208}
            circle
            css={css`
              position: relative;
              top: -2px;
            `}
          />
        </div>
      ) : (
        <Image
          src={user.avatarUrl}
          alt={user.displayName}
          width={210}
          height={210}
          css={css`
            border-radius: 50%;
          `}
        />
      )}
    </div>
  );
};

export { ProfilePicture };
