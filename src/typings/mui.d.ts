// in the file where you are creating the theme (invoking the function `createTheme()`)
import { Theme } from '@mui/material/styles';
import '@mui/material/Typography';
import theme from '../theme/theme';

type RawTheme = typeof theme;
type CustomPalette = RawTheme['palette'];
type CustomTypography = RawTheme['typography'];

declare module '@mui/styles' {

  interface DefaultTheme extends Theme {
    palette: Theme['palette'] & {
      [K in keyof CustomPalette]: Record<keyof CustomPalette[K], string>;
    };

  }
}

declare module '@mui/material/Typography' {
  type CustomVariants = {
    [K in keyof CustomTypography]: true;
  }

  interface TypographyPropsVariantOverrides extends CustomVariants {

  }
}
