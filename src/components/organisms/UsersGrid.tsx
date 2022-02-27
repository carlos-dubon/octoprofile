import { FC } from "react";
import { css } from "@emotion/react";
import Screens from "@app/styles/breakpoints";
import { UserCard } from "@lib/molecules";

const UsersGrid: FC = () => {
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

  const gridStyles = css`
    display: grid;
    margin-top: 3em;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1.5em;
    margin-bottom: 5em;
    @media (min-width: ${Screens.sm}px) {
      margin-bottom: 6em;
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
      .card:nth-of-type(1),
      .card:nth-of-type(3),
      .card:nth-of-type(4),
      .card:nth-of-type(6) {
        transform: translateY(50%);
      }
    }
  `;

  return (
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
  );
};

export { UsersGrid };
