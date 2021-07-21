export default (theme, { MuiTextField } = {}) => ({
  root: {
    fontFamily: 'Univia Pro',

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.white.border,
    },

    '& .MuiFormLabel-root': {
      color: theme.palette.white.tertiary,
    },

    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.white.disabled,
      },
    },

    '& .MuiFormHelperText-root': {
      color: theme.palette.white.tertiary,
    },

    '& > .MuiInputBase-root': {
      color: theme.palette.white.primary,
    },
    '& .MuiInputBase-input': {
      textTransform: 'lowercase',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${theme.palette.white.disabled}`,
          '&:hover': {
            borderColor: theme.palette.white.border,
          },
        },
      },
      '&.Mui-disabled': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.white.border,
        },
      },
      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.accent.negative,
          '&:hover': {
            borderColor: theme.palette.accent.negative,
          },
        },

        '& .MuiFormHelperText-root': {
          color: theme.palette.accent.negative,
        },
      },
    },
  },
});
