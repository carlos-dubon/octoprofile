import { useAppDispatch } from "@app/hooks";
import axios from "axios";
import { useEffect } from "react";
import { set, User } from "src/state/slices/userSlice";
import { setLoadingUser } from "src/state/slices/loadersSlice";
import getUnixTime from "date-fns/getUnixTime";
import parseISO from "date-fns/parseISO";

const useGetUser = (username: string | string[] | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );

      const user: User = {
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

      dispatch(set(user));
      dispatch(setLoadingUser(false));
    };

    if (!username) return;

    getUser();
  }, [username, dispatch]);
};

export { useGetUser };
