import { FC } from "react";
import { SectionTitle } from "../molecules/SectionTitle";
import { css } from "@emotion/react";
import Screens from "@app/styles/breakpoints";
import { UserCard } from "../molecules/UserCard";

const RecentlySearched: FC = () => {
  // i need the last 7 profiles

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
    width: fit-content;
    gap: 1.5em;
    margin-top: 3em;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: ${Screens.sm}px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${Screens.md}px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const columnStyles = css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100%;
    justify-content: center;
    gap: 1.5em;
  `;

  return (
    <div css={containerStyles}>
      <SectionTitle
        title="Recently Searched"
        subtitle="300+ GitHub profiles searched on OctoProfile"
      />
      <div css={gridStyles}>
        <div css={columnStyles}>
          {profiles.slice(0, 2).map((profile, index) => {
            return (
              <div key={index}>
                <UserCard
                  displayName={profile.displayName}
                  picture={profile.profilePicture}
                  url={profile.url}
                  username={profile.username}
                />
              </div>
            );
          })}
        </div>
        <div css={columnStyles}>
          {profiles.slice(2, 5).map((profile, index) => {
            return (
              <div key={index}>
                <UserCard
                  displayName={profile.displayName}
                  picture={profile.profilePicture}
                  url={profile.url}
                  username={profile.username}
                />
              </div>
            );
          })}
        </div>
        <div css={columnStyles}>
          {profiles.slice(5, 7).map((profile, index) => {
            return (
              <div key={index}>
                <UserCard
                  displayName={profile.displayName}
                  picture={profile.profilePicture}
                  url={profile.url}
                  username={profile.username}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { RecentlySearched };
