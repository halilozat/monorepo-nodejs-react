/** Dependencies */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Types */
import { InitialState, User } from './types';

/** Thunks */
import { getUsersListThunk, getUserThunk } from './thunks';

const initialState: InitialState = {
  user: null,
  loading: false,
  users: [],
  meta: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    state: (state) => ({
      ...state,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(getUsersListThunk.pending, state => ({
        ...state,
        loading: true,
      }))
      .addCase(getUsersListThunk.fulfilled, (state, action) => ({
        ...state,
        users: action.payload,
        loading: false,
      }))
      .addCase(getUsersListThunk.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
      }))
      .addCase(getUserThunk.pending, state => ({
        ...state,
        loading: true,
      }))
      .addCase(getUserThunk.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
        loading: false,
      }))
      .addCase(getUserThunk.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
      }));
  },
});

export default userSlice.reducer;
