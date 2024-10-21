import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { SnackbarProvider, SnackbarKey } from 'notistack';
import Navigation from './Navigation';
import { store } from './store';
import theme from './theme';
import SnackBarDismissButton from './components/SnackBarDismissButton';

function App() {
    const snackBarRef = useRef<SnackbarProvider>(null);
    const onClickDismiss = (key: SnackbarKey) => () => {
        snackBarRef.current?.closeSnackbar(key);
    };

    return (
        // @ts-ignore
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* @ts-ignore */}
                <SnackbarProvider
                    ref={snackBarRef}
                    // eslint-disable-next-line react/no-unstable-nested-components
                    action={key => (
                        <SnackBarDismissButton onClick={onClickDismiss(key)} />
                    )}
                    maxSnack={3}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <Navigation />
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
