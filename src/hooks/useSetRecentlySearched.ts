import { useEffect } from "react";
import { useRecentlySearched } from "@app/hooks";
import { User } from "src/state/slices/userSlice";
import { RecentlySearchedUser } from "./useRecentlySearched";
import { db } from "@app/firebase";
import { v4 as uuidv4 } from "uuid";
import { Timestamp, setDoc, doc } from "firebase/firestore";

const useSetRecentlySearched = (user: User) => {
  const [recentlySearched, loading] = useRecentlySearched();

  const saveUser = async (user: User) => {
    const id: string = uuidv4();

    const newUser: RecentlySearchedUser = {
      id,
      date: Timestamp.fromDate(new Date()),
      display_name: user.displayName,
      profile_picture: user.avatarUrl,
      username: user.username,
    };

    await setDoc(doc(db, "recently_searched", id), newUser);
  };

  useEffect(() => {
    if (!loading && user.username) {
      const foundUser: RecentlySearchedUser | undefined =
        recentlySearched?.find((fetchedUser) => {
          if (fetchedUser.username == user.username) {
            return true;
          }
        });

      if (!foundUser) {
        saveUser(user);
      }
    }
  }, [user, loading, recentlySearched]);
};

export { useSetRecentlySearched };
