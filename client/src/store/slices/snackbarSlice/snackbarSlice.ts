import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import {
  InitialState,
  ShowSnackbar,
  DismissParams,
  RemoveParams,
} from './types';

const initialState: InitialState = { snacks: [] };
// @ts-ignore
const snackbarSlice = createSlice({
  name: 'snackbarSlice',
  initialState,
  reducers: {
    // @ts-ignore
    showSnackbar: (state, action: PayloadAction<ShowSnackbar>) => {
      const key = nanoid();
      const { message, options } = action.payload;

      return {
        snacks: [...state.snacks, { message, options: { key, ...options } }],
      };
    },
    dismissSnackbar: (state, action: PayloadAction<DismissParams>) => ({
      snacks: state.snacks.map(snack =>
        !snack.options?.key || snack.options.key === action.payload.key
          ? { ...snack, dismissed: true }
          : { ...snack },
      ),
    }),
    removeSnackbar: (state, action: PayloadAction<RemoveParams>) => ({
      snacks: state.snacks.filter(
        snack => snack.options?.key !== action.payload.key,
      ),
    }),
  },
});

export const { showSnackbar, dismissSnackbar, removeSnackbar } =
  snackbarSlice.actions;
// @ts-ignore
export default snackbarSlice.reducer;
