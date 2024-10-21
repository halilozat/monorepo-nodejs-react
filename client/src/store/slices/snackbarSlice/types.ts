import { OptionsObject, SnackbarMessage, SnackbarKey } from 'notistack';

export type Snack = {
  message: SnackbarMessage;
  options?: OptionsObject;
  dismissed?: boolean;
};

export type InitialState = {
  snacks: Snack[];
};

export type ShowSnackbar = {
  message: SnackbarMessage;
  options?: OptionsObject;
};

export type DismissParams = {
  key?: SnackbarKey;
};

export type RemoveParams = {
  key: SnackbarKey;
};
