import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    width: '80px',
    height: '80px',
    '& div': {
      position: 'absolute',
      top: ' 33px',
      width: ' 13px',
      height: ' 13px',
      borderRadius: '50%',
      background: theme.palette.white.tertiary,
      animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
    },
    '& div:nth-child(1)': {
      left: '8px',
      animation: '$ellipsis1 600ms infinite',
    },
    '& div:nth-child(2)': {
      left: '8px',
      animation: '$ellipsis2 600ms infinite',
    },
    '& div:nth-child(3)': {
      left: '32px',
      animation: '$ellipsis2 600ms infinite',
    },
    '& div:nth-child(4)': {
      left: '56px',
      animation: '$ellipsis3 600ms infinite',
    },
  },
  '@keyframes ellipsis1': {
    '0%': {
      transform: 'scale(0)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  '@keyframes ellipsis3': {
    '0%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(0)',
    },
  },
  '@keyframes ellipsis2': {
    '0%': {
      transform: 'translate(0, 0)',
    },
    '100%': {
      transform: 'translate(24px, 0)',
    },
  },
}));

function LoadingIcon() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default LoadingIcon;
