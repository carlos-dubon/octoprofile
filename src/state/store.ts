import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loadersReducer from "./slices/loadersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    loaders: loadersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
