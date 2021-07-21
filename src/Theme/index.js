import { createTheme } from '@material-ui/core/styles';

import defaultPalette from './palette';
import defaultTypography from './typography';
import defaultFonts from './fonts';
import overrides from './overrides';

export default ({
  palette = [],
  typography = [],
  fonts = [],
  disableFonts = false,
} = {}) => {
  const theme = createTheme({
    palette: {
      ...defaultPalette,
      ...palette,

      background: {
        default: defaultPalette.surface.dark.primary,

        ...palette.background,
      },
    },
    typography: {
      ...defaultTypography,
      ...typography,
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

          '@font-face': disableFonts ? [] : [...defaultFonts, ...fonts],
        },
      },
    },

    page: {
      main: {
        fontFamily: 'Univia Pro',
        background: defaultPalette.surface.dark.primary,
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
      },
    },
  });

  theme.border = (width, style, color) => `${width}px ${style} ${color}`;

  theme.scrollbar = {
    '&::-webkit-scrollbar': {
      width: theme.spacing(1.5),
      height: 48,
    },
    '&::-webkit-scrollbar-track': {
      // background: '#fff'
    },
    '&::-webkit-scrollbar-thumb': {
      border: '2px solid transparent',
      background: theme.palette.white.disabled,
      backgroundClip: 'content-box',
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-corner': {
      background: 'transparent',
    },
  };

  theme.scrollbarX = {
    ...theme.scrollbar,
    '&::-webkit-scrollbar': {
      height: theme.spacing(1.5),
      width: 48,
    },
    '&::-webkit-scrollbar-track': {
      // background: '#fff'
    },
    '&::-webkit-scrollbar-thumb': {
      border: '2px solid transparent',
      background: theme.palette.white.disabled,
      backgroundClip: 'content-box',
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-corner': {
      background: 'transparent',
    },
  };

  theme.dropdownMenu = {
    background: theme.palette.surface.dark.primary,
    border: `1px solid ${theme.palette.white.border}`,
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.4)',
    borderRadius: 8,

    '& li': {
      color: theme.palette.white.primary,
      fontSize: 14,

      '&:hover': {
        backgroundColor: theme.palette.surface.accent.primary,
        color: theme.palette.accent.primary,
      },

      '& > svg': {
        marginRight: theme.spacing(1),
      },

      '& > .coin-icon': {
        width: theme.spacing(3),
        height: theme.spacing(2.5),
      },
    },

    '& .menu-title': {
      padding: theme.spacing(0.25, 2),
      display: 'block',
      width: 'auto',
      lineHeight: 1.5,
      color: theme.palette.white.disabled,
      fontSize: 12,
      marginTop: theme.spacing(1),
      textTransform: 'uppercase',
    },
  };

  theme.tooltip = {
    '& > div': {
      ...theme.typography.p5,
      backgroundColor: '#f5f5f5',
      color: theme.palette.black.secondary,
      border: theme.border(1, 'solid', theme.palette.white.border),
      margin: theme.spacing(1, 0),
      boxShadow: theme.shadow.dark.small,
      padding: theme.spacing(0.5, 1.5),
    },

    '&.dark': {
      '& > div': {
        backgroundColor: theme.palette.surface.dark.secondary,
        color: theme.palette.white.secondary,
      },
    },
  };

  theme.overrides = overrides(theme, theme.overrides);

  return theme;
};
