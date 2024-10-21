/** Dependencies */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Types */
import { InitialState, Book } from './types';

/** Thunks */
import { getBookThunk, getBooksListThunk } from './thunks';

const initialState: InitialState = {
  book: null,
  loading: false,
  books: [],
  meta: [],
};

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    borrowBook: (state, action) => ({
      ...state,
    }),
    returnBook: (state, action) => ({
      ...state,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(getBooksListThunk.pending, state => ({
        ...state,
        loading: true,
      }))
      .addCase(getBooksListThunk.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
        loading: false,
      }))
      .addCase(getBooksListThunk.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
      }))
      .addCase(getBookThunk.pending, state => ({
        ...state,
        loading: true,
      }))
      .addCase(getBookThunk.fulfilled, (state, action) => ({
        ...state,
        book: action.payload,
        loading: false,
      }))
      .addCase(getBookThunk.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
      }));
  },
});

export default bookSlice.reducer;
