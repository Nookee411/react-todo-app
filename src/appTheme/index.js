import { createTheme } from '@material-ui/core';
import defaultPalette from './palette';
import defaultTypography from './typography';
import defaultFonts from './fonts';

const AppTheme = createTheme({
  palette: {
    ...defaultPalette,
  },
  typography: {
    ...defaultTypography,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          color: defaultPalette.white.primary,
          backgroundColor: defaultPalette.surface.dark.primary,
          fontSize: '1rem',
          lineHeight: 'normal',
          letterSpacing: 'normal',
          fontWeight: 'normal',
          fontFamily: 'Univia Pro',
        },

        '@font-face': [...defaultFonts],
      },
    },
  },
});

export default AppTheme;
