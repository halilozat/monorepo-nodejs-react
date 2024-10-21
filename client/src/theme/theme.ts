import { createTheme } from '@mui/material/styles';
import { trTR } from '@mui/material/locale';
import './global.css';

const BACKGROUND_COLOR = '#f5f8fa';
const LIGHT_RED = '#fff5f8';
const INPUT_HEIGHT = 45;

const theme = createTheme(
  {
    typography: {
      fontFamily: [
        'Poppins',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    palette: {
      primary: {
        light: '#f1faff',
        main: '#26acf8',
        dark: '#0d47a1',
        contrastText: '#fff',
      },
      success: {
        light: '#e8fff3',
        main: '#50cd89',
        contrastText: '#fff',
      },
      warning: {
        light: '#fff8dd',
        main: '#ffc700',
        contrastText: '#fff',
      },
      error: {
        light: LIGHT_RED,
        main: '#f1416c',
        dark: '#cb1c47',
        contrastText: '#fff',
      },
      text: {
        primary: '#181c32',
        secondary: '#5e6278',
        disabled: '#adb0c0',
      },
      neutral: {
        light: '#e3e4e9',
        main: BACKGROUND_COLOR,
        dark: '#a1a5b7',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            color: '#fff',
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            height: INPUT_HEIGHT,
            backgroundColor: BACKGROUND_COLOR,
            '&:hover': {
              backgroundColor: BACKGROUND_COLOR,
            },
            '&.Mui-focused': {
              backgroundColor: BACKGROUND_COLOR,
            },
            '&.Mui-error': {
              backgroundColor: LIGHT_RED,
            },
          },
          multiline: {
            height: 3 * INPUT_HEIGHT,
          },
        },
      },
    },
  },
  trTR,
);

export default theme;
declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}
