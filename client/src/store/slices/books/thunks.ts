import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../services/api';

export const getBooksListThunk = createAsyncThunk(
  'book/list',
  async (params: { page: number; role?: string }, { rejectWithValue }) => {
    try {
      const response = await api.books.list(
        params.page,
        params?.role,
      );
      const result = response.data;
      return result;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

export const getBookThunk = createAsyncThunk(
  'book/get',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.books.view(id);
      const result = response.data.data;
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
