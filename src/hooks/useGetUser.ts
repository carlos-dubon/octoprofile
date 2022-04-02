import { useAppSelector } from "./useAppSelector";
import { useAppDispatch } from "@app/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { setUser, User } from "src/state/slices/userSlice";
import { setLoadingUser } from "src/state/slices/loadersSlice";
import getUnixTime from "date-fns/getUnixTime";
import parseISO from "date-fns/parseISO";
import to from "await-to-ts";

// eslint-disable-next-line valid-jsdoc
/**
 *
 * use throughout the app instead of `useAppSelector((state) => state.user);` to get user data
 */
const useGetUser = (username?: string): [User, boolean, Error | null] => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const loading = useAppSelector((state) => state.loaders.loadingUser);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getUser = async () => {
      dispatch(setLoadingUser(true));

      const [err, res] = await to(
        axios.get(`https://api.github.com/users/${username}`)
      );

      setError(err);

      const { data } = res;

      const fetchedUser: User = {
        displayName: data.name,
        amountOfRepos: data.public_repos,
        avatarUrl: data.avatar_url,
        company: data.company,
        createdAtUnixTime: getUnixTime(parseISO(data.created_at)),
        followers: data.followers,
        following: data.following,
        location: data.location,
        username: data.login,
      };

      dispatch(setUser(fetchedUser));
      dispatch(setLoadingUser(false));
    };

    if (username) {
      getUser();
    }
  }, [username, dispatch]);

  return [user, loading, error];
};

export { useGetUser };
