import { createSlice } from "@reduxjs/toolkit";

export interface Loaders {
  loadingUser: boolean;
  loadingRepos: boolean;
}

interface SetAction {
  payload: boolean;
}

const initialState = { loadingUser: true, loadingRepos: true };

export const loadersSlice = createSlice({
  name: "loaders",
  initialState,
  reducers: {
    setLoadingUser: (currState: Loaders, setAction: SetAction) => {
      currState.loadingUser = setAction.payload;
      return currState;
    },
    setLoadingRepos: (currState: Loaders, setAction: SetAction) => {
      currState.loadingRepos = setAction.payload;
      return currState;
    },
  },
});

export const { setLoadingUser, setLoadingRepos } = loadersSlice.actions;

export default loadersSlice.reducer;
