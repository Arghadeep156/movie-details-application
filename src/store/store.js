import { configureStore } from "@reduxjs/toolkit"; // Correct import
import homeSlice from "./homeSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.NODE_ENV !== "production",
});
