import { createSlice } from "@reduxjs/toolkit";

export interface Repo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  size: number;
  url: string;
}

export const emptyRepos = (): Repo[] => [];

interface SetAction {
  payload: Repo[];
}

const initialState = emptyRepos();

export const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos: (currState: Repo[], setAction: SetAction) => {
      currState = setAction.payload;
      return currState;
    },
    clearRepos: (currState: Repo[]) => {
      currState = emptyRepos();
      return currState;
    },
  },
});

export const { setRepos, clearRepos } = reposSlice.actions;

export default reposSlice.reducer;
