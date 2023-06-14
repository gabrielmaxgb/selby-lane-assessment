import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface Theme {
    customThemeColors: {
      blue?: string;
      yellow?: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    customThemeColors?: {
      blue?: string;
      yellow?: string;
    };
  }
}

const themeCreator = createTheme({
  customThemeColors: {
    blue: '#0C3458',
    yellow: '#CA8A4B'
  }
});

export const theme = responsiveFontSizes(themeCreator);
