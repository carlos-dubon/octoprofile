import { createSlice } from "@reduxjs/toolkit";

export interface User {
  displayName: string;
}

interface SetAction {
  payload: User;
}

const initialState: User | null = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (currState: User | null, setAction: SetAction) => {
      currState = setAction.payload;
    },
    clear: (currState: User | null) => {
      currState = null;
    },
  },
});

export const { set } = userSlice.actions;

export default userSlice.reducer;
