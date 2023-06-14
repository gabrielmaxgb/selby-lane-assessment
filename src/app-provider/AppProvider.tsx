import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';
import { IAppProviderProps } from './types';

const AppProvider = ({ children }: IAppProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
