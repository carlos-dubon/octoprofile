import { FC } from "react";
import { SectionTitle } from "../molecules/SectionTitle";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";
import { UserCard } from "../molecules/UserCard";
import bands from "public/bands.svg";
import externalLink from "public/externalLink.svg";
import Image from "next/image";
import { Button } from "../atoms/Button";

const RecentlySearched: FC = () => {
  // Get the last 7 profiles

  const profiles = [
    {
      displayName: "Marek Brzezinski",
      username: "marekbrze",
      url: "https://github.com/marekbrze",
      profilePicture: "https://avatars.githubusercontent.com/u/1033055?v=4",
    },
    {
      displayName: "Mohammed Madany",
      username: "MohammedMadany",
      url: "https://github.com/MohammedMadany",
      profilePicture: "https://avatars.githubusercontent.com/u/99369298?v=4",
    },
    {
      displayName: "Sonia Chaparro",
      username: "soniaS4nt",
      url: "https://github.com/soniaS4nt",
      profilePicture: "https://avatars.githubusercontent.com/u/83901468?v=4",
    },
    {
      displayName: "Brandon Williams",
      username: "brando5393",
      url: "https://github.com/brando5393",
      profilePicture: "https://avatars.githubusercontent.com/u/4858359?v=4",
    },
    {
      displayName: "Pavel S",
      username: "PauliCZ44",
      url: "https://github.com/PauliCZ44",
      profilePicture: "https://avatars.githubusercontent.com/u/62062095?v=4",
    },
    {
      displayName: "Aurélien Morice",
      username: "aurelien-morice",
      url: "https://github.com/aurelien-morice",
      profilePicture: "https://avatars.githubusercontent.com/u/34755518?v=4",
    },
    {
      displayName: "Derek Sneddon",
      username: "dsneddon00",
      url: "https://github.com/dsneddon00",
      profilePicture: "https://avatars.githubusercontent.com/u/59843849?v=4",
    },
  ];

  const containerStyles = css`
    margin-top: 3.75em;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    @media (min-width: ${Screens.lg}px) {
      margin-top: 0px;
    }
  `;

  const gridStyles = css`
    display: grid;
    margin-top: 3em;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1.5em;
    margin-bottom: 6em;
    @media (min-width: ${Screens.sm}px) {
      grid-template-columns: repeat(2, 1fr);
      width: fit-content;
      .card:last-child {
        transform: translateX(50%);
      }
    }
    @media (min-width: ${Screens.lg}px) {
      grid-template-columns: repeat(3, 1fr);
      .card:last-child {
        grid-column: 2;
        transform: translateX(0);
      }
      .card:nth-child(1),
      .card:nth-child(3),
      .card:nth-child(4),
      .card:nth-child(6) {
        transform: translateY(50%);
      }
    }
  `;

  return (
    <div css={containerStyles}>
      <SectionTitle
        title="Recently Searched"
        subtitle="300+ GitHub profiles searched on OctoProfile"
      />
      <div css={gridStyles}>
        {profiles.map((profile, index) => {
          return (
            <div key={index} className="card">
              <UserCard
                displayName={profile.displayName}
                picture={profile.profilePicture}
                url={`/${profile.username}`}
                username={profile.username}
              />
            </div>
          );
        })}
      </div>
      <div
        css={css`
          position: absolute;
          z-index: -1;
          width: 1832px;
          height: 387px;
          transform: translateY(70%);
        `}
      >
        <Image src={bands} alt={"bands"} priority width={1832} height={387} />
      </div>
      <Button bgColor={Colors.gray900}>
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 0.625em;
            p {
              margin: 0;
            }
          `}
        >
          <p>Contribute</p>
          <Image
            src={externalLink}
            alt="External link"
            width={16}
            height={16}
            priority
          />
        </div>
      </Button>
    </div>
  );
};

export { RecentlySearched };
