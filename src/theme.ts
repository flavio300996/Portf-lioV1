import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Helvetica Neue',
  },
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#4052D6',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;