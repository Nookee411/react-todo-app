export default (theme, MuiTextField = {}) => ({
  root: {
    maxHeight: '3em',
    border: '1px solid rgb(255 255 255 / 40%)',
    borderRadius: theme.spacing(2),
    backgroundColor: 'transparent',
    color: theme.palette.white.primary,
    '& input': {
      ...theme.typography.p3,
      color: theme.palette.white.primary,
      height: 48,
      padding: '0 0.8em',
    },
    '& .MuiInputBase-root': {
      margin: '6px 0',
      '&:before, &:after': {
        display: 'none',
      },
    },
    '& label': {
      top: 0,
      ...theme.typography.p3,
      color: theme.palette.white.secondary,
      padding: '0 0.8em',
    },
    '& .MuiInputLabel-formControl': {
      transform: 'scale(1) translate(0, 12px)',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'scale(0.875) translate(0, 0px)',
      color: theme.palette.white.disabled,
    },
  },
});
