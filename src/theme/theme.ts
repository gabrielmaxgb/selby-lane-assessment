import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface Theme {
    extraColors: {
      white: string;
      black: string;
      yellow?: string;
      emphasis?: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    extraColors?: {
      white?: string;
      black?: string;
      yellow?: string;
      emphasis?: string;
    };
  }
}

const themeCreator = createTheme({
  extraColors: {
    // white: '#ffffff',
    // black: '#000000',
    // yellow: '#cbac64',
    // emphasis: '#000000'
  }
});

export const theme = responsiveFontSizes(themeCreator);
