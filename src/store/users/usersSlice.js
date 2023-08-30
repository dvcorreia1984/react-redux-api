// src/store/users/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
export const selectUsers = (state) => state.users.users;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;
