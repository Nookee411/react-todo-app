import { createTheme } from '@material-ui/core';
import defaultPalette from './palette';
import defaultTypography from './typography';
import defaultFonts from './fonts';
import overrides from './overrides';

const AppTheme = createTheme({
  palette: {
    ...defaultPalette,
  },
  typography: {
    ...defaultTypography,
  },
  shadow: {
    accent: {
      small:
        '0px 0px 16px rgba(255, 210, 94, 0.4), 0px 0px 24px rgba(255, 210, 94, 0.2)',
      medium:
        '0px 0px 16px rgba(255, 210, 94, 0.4), 0px 0px 24px rgba(255, 210, 94, 0.2)',
    },
    dark: {
      small:
        '0px 4px 8px rgba(0, 0, 0, 0.64), 0px 8px 16px rgba(0, 0, 0, 0.48)',
      medium:
        '0px 12px 24px rgba(0, 0, 0, 0.64), 0px 24px 48px rgba(0, 0, 0, 0.48)',
      large:
        '0px 32px 64px rgba(0, 0, 0, 0.64), 0px 40px 80px rgba(0, 0, 0, 0.48)',
    },
    light: {
      small:
        '0px 4px 8px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.08)',
      medium:
        '0px 12px 24px rgba(0, 0, 0, 0.12), 0px 24px 48px rgba(0, 0, 0, 0.08)',
      large:
        '0px 32px 64px rgba(0, 0, 0, 0.12), 0px 40px 80px rgba(0, 0, 0, 0.08)',
    },
  },
  spacing: 4,
  border: {
    mainRadius: 8,
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
AppTheme.border = (width, style, color) => `${width}px ${style} ${color}`;
AppTheme.overrides = overrides(AppTheme, AppTheme.overrides);
export default AppTheme;
