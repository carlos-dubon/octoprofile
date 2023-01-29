import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import Screens from "@app/styles/breakpoints";
import { UserCard } from "@lib/molecules";
import { useRecentlySearched } from "@app/hooks";
import { RecentlySearchedUser } from "src/hooks/useRecentlySearched";
import { Timestamp } from "firebase/firestore";

const emptyProfile = (): RecentlySearchedUser => {
  return {
    display_name: "",
    id: "",
    profile_picture: "https://via.placeholder.com/150",
    username: "",
    date: Timestamp.fromDate(new Date()),
  };
};

const UsersGrid: FC = () => {
  const [recentlySearched, loading] = useRecentlySearched();
  const [profiles, setProfiles] = useState<RecentlySearchedUser[]>(
    new Array(7).fill(emptyProfile())
  );

  useEffect(() => {
    if (!loading && recentlySearched) {
      setProfiles(recentlySearched);
    }
  }, [recentlySearched, loading]);

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
            {loading ? (
              <UserCard loading />
            ) : (
              <UserCard
                displayName={profile.display_name ?? profile.username}
                picture={profile.profile_picture}
                url={`/${profile.username}`}
                username={profile.username}
                loading={false}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export { UsersGrid };
