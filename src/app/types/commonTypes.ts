import { ThemeOptions } from "@mui/material";

export interface IChildren {
  children: JSX.Element[] | JSX.Element;
}

export interface ICustomizableComponent {
  backgroundColor?: string;
  p?: string;
  height?: string;
}

export interface ITheme {
  theme?: ThemeOptions;
}
