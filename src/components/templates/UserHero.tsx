import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Image from "next/image";
import { TranslucentNavLink, TranslucentIcon } from "@lib/atoms";
import { useAppSelector } from "@app/hooks";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { ProfilePicture } from "@lib/molecules";
import { formatUnixDate } from "@lib/helpers";
import calendar from "public/icons/calendar.svg";
import location from "public/icons/location.svg";
import briefcase from "public/icons/briefcase.svg";

const StatSkeleton: FC = () => {
  const containerStyles = css`
    display: flex;
    gap: 0.5em;
  `;

  return (
    <div css={containerStyles}>
      <Skeleton circle height={32} width={32} />
      <Skeleton width={160} height={32} />
    </div>
  );
};

const UserHero: FC = () => {
  const user = useAppSelector((state) => state.user);
  const loadingUser = useAppSelector((state) => state.loaders.loadingUser);

  const containerStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 750px;
    color: #ffffff;
  `;

  const wavesStyles = css`
    width: 100%;
    height: 750px;
    position: absolute;
    z-index: -1;
    top: 0;
    background: ${Colors.purple900};
  `;

  const contentWrapperStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;

  const navContainerStyles = css`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 1em;
  `;

  const navButtonContainerStyles = css`
    display: flex;
    gap: 0.5em;
    padding: 0 0.75em;
    height: 2em;
    align-items: center;
    font-size: 0.875em;
  `;

  const statStyles = css`
    font-size: 1.125em;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.5em;
  `;

  return (
    <div css={containerStyles}>
      <div css={wavesStyles}>
        <Image
          src="/waves.svg"
          alt="waves"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="container">
        <div css={contentWrapperStyles}>
          <div css={navContainerStyles}>
            <TranslucentNavLink href="https://github.com/carlos-dubon/octoprofile">
              <div css={navButtonContainerStyles}>
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={18}
                  height={18}
                  priority
                />
                <div className="hide-mobile">Contribute</div>
              </div>
            </TranslucentNavLink>
          </div>

          <ProfilePicture />

          {loadingUser ? (
            <div
              css={css`
                width: 330px;
                height: 59px;
                margin-top: 0.5em;
                margin-bottom: 0.2em;
                font-size: 3em;
              `}
            >
              <Skeleton width={330} height={59} />
            </div>
          ) : (
            <h1
              css={css`
                font-size: 3em;
                font-weight: 800;
                width: fit-content;
                margin-top: 0.5em;
                margin-bottom: 0.2em;
                text-align: center;
              `}
            >
              {user.displayName}
            </h1>
          )}

          {loadingUser ? (
            <div
              css={css`
                width: 140px;
                height: 29px;
                font-size: 1.5em;
                font-size: 3em;
              `}
            >
              <Skeleton width={180} height={29} />
            </div>
          ) : (
            <Link href={`https://github.com/${user.username}`} passHref>
              <a
                target="_blank"
                css={css`
                  font-size: 1.5em;
                  font-weight: 500;
                  width: fit-content;
                  :hover {
                    text-decoration: underline;
                  }
                `}
              >
                <Tippy
                  content="View GitHub profile"
                  delay={200}
                  offset={[0, 12]}
                >
                  <span>@{user.username}</span>
                </Tippy>
              </a>
            </Link>
          )}

          <div
            css={css`
              display: flex;
              margin-top: 1.5em;
              margin-bottom: 1.5em;
              gap: 2em;
            `}
          >
            {loadingUser ? (
              <StatSkeleton />
            ) : (
              user.company && (
                <div css={statStyles}>
                  <TranslucentIcon>
                    <Image src={briefcase} alt={"Briefcase icon"} priority />
                  </TranslucentIcon>
                  {user.company}
                </div>
              )
            )}

            {loadingUser ? (
              <StatSkeleton />
            ) : (
              user.location && (
                <div css={statStyles}>
                  <TranslucentIcon>
                    <Image src={location} alt={"Location icon"} priority />
                  </TranslucentIcon>
                  {user.location}
                </div>
              )
            )}

            {loadingUser ? (
              <StatSkeleton />
            ) : (
              <div css={statStyles}>
                <TranslucentIcon>
                  <Image src={calendar} alt={"Calendar icon"} priority />
                </TranslucentIcon>
                Joined {formatUnixDate(user.createdAtUnixTime, "MMM d',' yyyy")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserHero };
