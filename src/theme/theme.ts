import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface Theme {
    customThemeColors: {
      white: string;
      black: string;
      blue?: string;
      emphasis?: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    customThemeColors?: {
      white?: string;
      black?: string;
      blue?: string;
      emphasis?: string;
    };
  }
}

const themeCreator = createTheme({
  customThemeColors: {
    // white: '#ffffff',
    // black: '#000000',
    blue: '#0C3458'
    // emphasis: '#000000'
  }
});

export const theme = responsiveFontSizes(themeCreator);
