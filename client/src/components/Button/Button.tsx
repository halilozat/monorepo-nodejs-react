import { Button as Base, ButtonProps, CircularProgress } from '@mui/material';

import React from 'react';
import styles from './styles';

interface Props extends ButtonProps {
  loading?: boolean;
}
function Button({ loading, sx, size, children, ...rest }: Props) {
  return (
    <Base
      sx={[
        size ? styles.container : { ...styles.container, height: 45 },
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
      disabled={loading}
      variant="contained"
      size={size}
      {...rest}
    >
      {loading ? (
        <CircularProgress color="inherit" sx={{ ml: 2 }} size={20} />
      ) : (
        children
      )}
    </Base>
  );
}

export default Button;
