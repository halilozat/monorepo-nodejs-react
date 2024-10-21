import booksSlice from './slices/books';
import usersSlice from "./slices/users/usersSlice.ts";
import snackbarSlice from "./slices/snackbarSlice";

const rootReducer = {
  snackbar: snackbarSlice,
  users: usersSlice,
  books: booksSlice,
};

export default rootReducer;
