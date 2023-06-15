import { ThemeProvider } from "@mui/material";
import { UserContextWrapper } from "../app/context/user/userContext";
import { theme } from "../theme/theme";
import { IAppProviderProps } from "./types";

const AppProvider = ({ children }: IAppProviderProps) => {
  return (
    <UserContextWrapper>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserContextWrapper>
  );
};

export default AppProvider;
