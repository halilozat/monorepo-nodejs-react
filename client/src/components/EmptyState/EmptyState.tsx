import React from 'react';
import { Box, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

interface Props {
  message: string;
}

function EmptyState({ message }: Props) {
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
      <WarningIcon sx={{ fontSize: 75 }} color="disabled" />
      <Typography>{message}</Typography>
    </Box>
  );
}

export default EmptyState;
