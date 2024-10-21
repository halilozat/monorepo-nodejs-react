import React from 'react';
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
} from '@mui/material';
import useUsers from "../../hooks/useUsers";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const { userLoading } = useUsers();
  return (
    <Box sx={{ backgroundColor: 'neutral.main' }}>
      <Grid item sx={{ minHeight: '100vh' }} xs={12}>
        <Box
            sx={{
              p: 5,
              position: 'relative',
            }}
        >
          <Backdrop
              sx={{
                color: 'primary.dark',
                zIndex: theme => theme.zIndex.drawer + 1,
                position: 'absolute',
              }}
              open={userLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          {children}
        </Box>
      </Grid>
    </Box>
  );
}

export default Layout;
