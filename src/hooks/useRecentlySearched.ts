import {
  collection,
  CollectionReference,
  query,
  orderBy,
  limitToLast,
  Timestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "@app/firebase";

export interface RecentlySearchedUser {
  date: Timestamp;
  display_name: string;
  id: string;
  profile_picture: string;
  username: string;
}

const useRecentlySearched = () => {
  const recentlySearchedRef = collection(
    db,
    "recently_searched"
  ) as CollectionReference<RecentlySearchedUser>;

  const recentlySearchedQuery = query(
    recentlySearchedRef,
    orderBy("date", "asc"),
    limitToLast(7)
  );

  return useCollectionData(recentlySearchedQuery);
};

export { useRecentlySearched };
