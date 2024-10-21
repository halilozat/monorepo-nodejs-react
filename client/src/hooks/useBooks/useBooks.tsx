import { useAppDispatch, useAppSelector } from '../../store';
import {getBooksListThunk, getBookThunk} from "../../store/slices/books";

const useBooks = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(state => state.books.books);
  const meta = useAppSelector(state => state.books.meta);
  const user = useAppSelector(state => state.books.book);
  const userLoading = useAppSelector(
    state => state.books.loading,
  );
  const userError = useAppSelector(state => state.books.error);

  const fetchBooks = (params: { page: number; role?: string }) =>
    dispatch(getBooksListThunk(params));

  const getBook = (id: string) => dispatch(getBookThunk(id));

  return {
    fetchBooks,
    getBook,
    users,
    user,
    userLoading,
    userError,
    meta,
  };
};

export default useBooks;
