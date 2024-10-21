import { useAppDispatch, useAppSelector } from '../../store';
import {
  getUsersListThunk,
  getUserThunk,
} from '../../store/slices/users';

const useUsers = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(state => state.users.users);
  const meta = useAppSelector(state => state.users.meta);
  const user = useAppSelector(state => state.users.user);
  const userLoading = useAppSelector(
    state => state.users.loading,
  );
  const userError = useAppSelector(state => state.users.error);

  const fetchUsers = () => {
    // @ts-ignore
    dispatch(getUsersListThunk());
  }

  const getUser = (id: string) => {
    // @ts-ignore
    dispatch(getUserThunk(id));
  }

  return {
    fetchUsers,
    getUser,
    users,
    user,
    userLoading,
    userError,
    meta,
  };
};

export default useUsers;
