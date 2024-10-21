import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../services/api';

export const getUsersListThunk = createAsyncThunk(
  'user/list',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.users.list();
      const result = response.data;
      return result;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

export const getUserThunk = createAsyncThunk(
  'user/get',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.users.view(id);
      const result = response.data.data;
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
