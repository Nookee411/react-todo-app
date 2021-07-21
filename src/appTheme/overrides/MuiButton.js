export default (theme, MuiButton) => ({
  root: {
    backgroundColor: theme.palette.accent.primary,
    borderRadius: theme.spacing(2),
    '&:hover, &:focus, &:active': {
      backgroundColor: theme.palette.accent.secondary,
    },
    '&.MuiButton-text': {
      padding: ` ${theme.spacing(2)}px ${theme.spacing(4)}px`,
    },
  },
  text: {
    textTransform: 'none',
    ...theme.typography.p3,
  },
});
