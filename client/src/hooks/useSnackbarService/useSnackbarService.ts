import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar, SnackbarKey } from 'notistack';
import { removeSnackbar } from '../../store/slices/snackbarSlice';
import { RootState } from '../../store';

let displayed: SnackbarKey[] = [];

const useSnackbarService = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const snacks = useSelector((store: RootState) => store.snackbar.snacks || []);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter(key => id !== key)];
  };

  React.useEffect(() => {
    // @ts-ignore
    snacks.forEach(({ message, options = {}, dismissed = false }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        // @ts-ignore
        if (options.key) closeSnackbar(options.key);
        return;
      }

      // do nothing if snackbar is already displayed
      // @ts-ignore
      if (options.key && displayed.includes(options.key)) return;

      // display snackbar using notistack
      enqueueSnackbar(message, {
        ...options,
        onClose: (event, reason, myKey) => {
          // @ts-ignore
          if (options.onClose) {
            // @ts-ignore
            options.onClose(event, reason, myKey);
          }
        },
        onExited: (event, key) => {
          // remove this snackbar from redux store
          dispatch(removeSnackbar({ key }));
          removeDisplayed(key);
        },
        autoHideDuration: 3000,
      });

      // keep track of snackbars that we've displayed
      // @ts-ignore
      if (options.key) storeDisplayed(options.key);
    });
  }, [snacks, closeSnackbar, enqueueSnackbar, dispatch]);
};

export default useSnackbarService;
