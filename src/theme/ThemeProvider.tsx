import { ThemeProvider as MThemeProvider, CssBaseline } from '@mui/material';
import { FC, ReactNode } from 'react';

import theme from './theme';

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <MThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MThemeProvider>
);
