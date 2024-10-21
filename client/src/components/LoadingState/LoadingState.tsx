import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function LoadingState() {
  return (
    <Box
      sx={{
        minHeight: 150,
        minWidth: 150,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingState;
