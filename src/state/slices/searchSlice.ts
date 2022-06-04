import { createSlice } from "@reduxjs/toolkit";

export type SortBy = "Stars" | "Forks" | "Size";

export interface Search {
  query: string;
  sort: SortBy;
}

const initialState: Search = {
  query: "",
  sort: "Stars",
};

interface SetQueryAction {
  payload: string;
}

interface SetSortAction {
  payload: SortBy;
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (currState: Search, setAction: SetQueryAction) => {
      currState = { ...currState, query: setAction.payload };
      return currState;
    },
    setSort: (currState: Search, setAction: SetSortAction) => {
      currState = { ...currState, sort: setAction.payload };
      return currState;
    },
  },
});

export const { setQuery, setSort } = searchSlice.actions;

export default searchSlice.reducer;
