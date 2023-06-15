// @ts-nocheck
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Theme {
    customThemeColors: {
      blue?: string;
      lightBlue?: string;
      gray?: string;
      lighGray: string;
      white?: string;
      primary?: string;
      secondary?: string;
    };
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    customThemeColors?: {
      blue?: string;
      lightBlue?: string;
      gray?: string;
      lighGray: string;
      white?: string;
      primary?: string;
      secondary?: string;
    };
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
}

const themeCreator = createTheme({
  customThemeColors: {
    blue: "#0C3458",
    lightBlue: "#1F3251",
    gray: "#6D6D6D",
    lighGray: "#BAC0CC",
    white: "#ffffff",
    primary: "#CA8A4B",
    secondary: "#FFF9EB",
  },
  palette: {
    primary: {
      main: "#CA8A4B",
    },
    secondary: {
      main: "#FFF9EB",
    },
  },
});

export const theme = responsiveFontSizes(themeCreator);
