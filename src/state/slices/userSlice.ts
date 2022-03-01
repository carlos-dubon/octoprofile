import { createSlice } from "@reduxjs/toolkit";

export interface User {
  displayName: string;
  avatarUrl: string;
  company: string;
  followers: number;
  following: number;
  location: string;
  username: string;
  amountOfRepos: number;
  createdAtUnixTime: number;
}

export const emptyUser = (): User => ({
  displayName: "",
  amountOfRepos: 0,
  avatarUrl: "",
  company: "",
  createdAtUnixTime: 0,
  followers: 0,
  following: 0,
  location: "",
  username: "",
});

interface SetAction {
  payload: User;
}

const initialState = emptyUser();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (currState: User, setAction: SetAction) => {
      currState = setAction.payload;
      return currState;
    },
    clear: (currState: User) => {
      currState = emptyUser();
      return currState;
    },
  },
});

export const { set } = userSlice.actions;

export default userSlice.reducer;
