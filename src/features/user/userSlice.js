import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
