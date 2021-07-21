export default (theme, { MuiButton } = {}) => ({
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
  containedSecondary: {
    backgroundColor: theme.palette.white.background,
    border: theme.border(1, 'solid', theme.palette.white.background),
    boxShadow: 'none',
    color: theme.palette.white.primary,

    '&:hover': {
      backgroundColor: theme.palette.white.disabled,
      boxShadow: 'none',
    },

    '&:focus': {
      backgroundColor: theme.palette.white.disabled,
      borderColor: theme.palette.white.primary,
      color: theme.palette.white.primary,
    },

    '&$disabled': {
      backgroundColor: theme.palette.white.background,
      color: theme.palette.white.disabled,
    },
  },

  text: {
    padding: theme.spacing(1.5, 2),
    color: theme.palette.accent.primary,
    border: theme.border(1, 'solid', 'transparent'),

    '&:hover': {
      backgroundColor: theme.palette.accent.background,
    },

    '&:focus': {
      backgroundColor: 'transparent',
      border: theme.border(1, 'solid', theme.palette.accent.border),
    },

    '&$disabled': {
      color: theme.palette.white.disabled,
    },
  },
  textSecondary: {
    padding: theme.spacing(1.5, 2),
    color: theme.palette.white.primary,
    border: theme.border(1, 'solid', 'transparent'),

    '&:hover': {
      backgroundColor: theme.palette.white.background,
    },

    '&:focus': {
      backgroundColor: 'transparent',
      border: theme.border(1, 'solid', theme.palette.white.border),
    },

    '&$disabled': {
      color: theme.palette.white.disabled,
    },
  },

  outlined: {
    padding: theme.spacing(1.5, 2),
    border: theme.border(1, 'solid', theme.palette.accent.border),
    color: theme.palette.accent.primary,

    '&:hover': {
      backgroundColor: theme.palette.accent.primary,
      color: theme.palette.black.primary,
    },

    '&:focus': {
      backgroundColor: 'transparent',
      color: theme.palette.accent.primary,
    },

    '&$disabled': {
      color: theme.palette.white.disabled,
      borderColor: theme.palette.white.disabled,
    },
  },
  outlinedSecondary: {
    padding: theme.spacing(1.5, 2),
    border: theme.border(1, 'solid', theme.palette.white.background),
    color: theme.palette.white.primary,

    '&:hover': {
      backgroundColor: theme.palette.white.background,
      color: theme.palette.white.primary,
      border: theme.border(1, 'solid', theme.palette.white.background),
    },

    '&:focus': {
      backgroundColor: theme.palette.white.background,
      color: theme.palette.white.primary,
      borderColor: theme.palette.white.primary,
    },

    '&$disabled': {
      color: theme.palette.white.disabled,
      borderColor: theme.palette.white.disabled,
    },
  },
});
