export default (theme, MiuCheckbox = {}) => ({
  root: {
    color: theme.palette.white.disabled,
  },
  checked: {
    '& .MuiSvgIcon-root, & .MuiTouchRipple-root': {
      color: theme.palette.accent.primary,
    },
  },
});
