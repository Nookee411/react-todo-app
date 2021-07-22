export default (theme, MuiButton = {}) => ({
  root: {
    ...theme.typography.p3,
    textTransform: 'none',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5, 2),
  },

  contained: {
    backgroundColor: theme.palette.accent.primary,
    color: theme.palette.black.primary,
    boxShadow: 'none',

    '&:hover': {
      boxShadow: theme.shadow.accent.medium,
      backgroundColor: theme.palette.accent.primary,
    },

    '&:focus': {
      backgroundColor: theme.palette.accent.primary,
      color: theme.palette.black.primary,
      boxShadow: 'none',
    },

    '&$disabled': {
      backgroundColor: theme.palette.white.background,
      color: theme.palette.white.disabled,
    },
  },
});
