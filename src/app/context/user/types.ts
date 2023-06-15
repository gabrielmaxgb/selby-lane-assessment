import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";

export interface IUser {
  firstName: string | undefined;
  lastName: string | undefined;
}
export type UserContextType = {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
};

export interface IUserContextWrapper {
  children: React.ReactElement<ThemeProviderProps>;
}
