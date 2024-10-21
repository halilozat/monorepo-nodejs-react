import React from 'react';
import { Link } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import { Box, Typography } from '@mui/material';

interface Props {
  message: string;
  posRedirect?: boolean;
}

function ErrorState({ message, posRedirect }: Props) {

  return (
    <Box
      sx={{
        minHeight: 100,
        minWidth: 100,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ErrorIcon sx={{ fontSize: 75 }} color="error" />
      <Typography>{message}</Typography>
      {posRedirect && <Link to="/app/pos">Error</Link>}
    </Box>
  );
}

export default ErrorState;
