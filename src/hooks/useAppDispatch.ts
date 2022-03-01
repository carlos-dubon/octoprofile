import { useDispatch } from "react-redux";
import type { AppDispatch } from "src/state/store";

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();
