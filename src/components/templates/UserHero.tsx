import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Image from "next/image";
import { TranslucentNavLink, TranslucentIcon } from "@lib/atoms";
import { useGetUser } from "@app/hooks";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { ProfilePicture } from "@lib/molecules";
import { formatUnixDate } from "@lib/helpers";
import calendar from "public/icons/calendar.svg";
import location from "public/icons/location.svg";
import briefcase from "public/icons/briefcase.svg";
import Screens from "@app/styles/breakpoints";

const InfoSkeleton: FC = () => {
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
  const [user, loading] = useGetUser();

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

  const infoStyles = css`
    font-size: 1.125em;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.5em;
  `;

  const nameContainerStyles = css`
    width: 330px;
    height: 59px;
    margin-top: 0.5em;
    margin-bottom: 0.2em;
    font-size: 3em;
  `;

  const nameStyles = css`
    font-size: 3em;
    font-weight: 800;
    width: fit-content;
    margin-top: 0.625em;
    margin-bottom: 0.2em;
    text-align: center;
  `;

  const usernameContainerStyles = css`
    width: 180px;
    height: 29px;
    font-size: 1.5em;
    font-size: 3em;
  `;

  const usernameStyles = css`
    font-size: 1.5em;
    font-weight: 500;
    width: fit-content;
    :hover {
      text-decoration: underline;
    }
  `;

  const infoItemsContainer = css`
    display: flex;
    margin-top: 2.25em;
    gap: 1.25em;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${Screens.md}px) {
      flex-direction: row;
      gap: 2em;
    }
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

          {loading ? (
            <div css={nameContainerStyles}>
              <Skeleton width="100%" height="100%" />
            </div>
          ) : (
            <h1 css={nameStyles}>{user.displayName}</h1>
          )}

          {loading ? (
            <div css={usernameContainerStyles}>
              <Skeleton width="100%" height="100%" />
            </div>
          ) : (
            <Link href={`https://github.com/${user.username}`} passHref>
              <a target="_blank" css={usernameStyles}>
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

          <div css={infoItemsContainer}>
            {loading ? (
              <InfoSkeleton />
            ) : (
              user.company && (
                <div css={infoStyles}>
                  <TranslucentIcon>
                    <Image src={briefcase} alt={"Briefcase icon"} priority />
                  </TranslucentIcon>
                  {user.company}
                </div>
              )
            )}

            {loading ? (
              <InfoSkeleton />
            ) : (
              user.location && (
                <div css={infoStyles}>
                  <TranslucentIcon>
                    <Image src={location} alt={"Location icon"} priority />
                  </TranslucentIcon>
                  {user.location}
                </div>
              )
            )}

            {loading ? (
              <InfoSkeleton />
            ) : (
              <div css={infoStyles}>
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
