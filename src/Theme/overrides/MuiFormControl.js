export default (theme, { MuiFormControl } = {}) => ({
  root: {
    color: theme.palette.white.tertiary,
    '& .MuiCheckbox-root': {
      color: theme.palette.accent.primary,
    },
  },
});
