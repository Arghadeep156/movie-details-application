import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  userdata: {},
  tokenResponse: {},
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userIsLoading: (state) => {
      state.isLoading = true; // Set loading to true when loading starts
    },
    userLoadSuccessful: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.data = action.payload.userdata;
      state.tokenResponse = action.payload.tokendata;
      state.error = ""; // Clear any previous errors on success
    },
    userLoadError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Use action.payload to capture the error message
    },
    userSignOut: (state) => {
      state.data = {};
      state.isAuth = false;
    },
  },
});

// Export actions from the slice
export const { userIsLoading, userLoadSuccessful, userLoadError, userSignOut } =
  userSlice.actions;

export default userSlice.reducer;
