import { createSlice } from "@reduxjs/toolkit";

export interface Repo {
  id: string;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  size: number;
  url: string;
  isFork: boolean;
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
