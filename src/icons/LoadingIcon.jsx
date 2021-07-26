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
      background: '#fff',
      animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
    },
    '& div:nth-child(1)': {
      left: '8px',
      animation: 'lds-ellipsis1 0.6s infinite',
    },
    '& div:nth-child(2)': {
      left: '8px',
      animation: 'lds-ellipsis2 0.6s infinite',
    },
    '& div:nth-child(3)': {
      left: '8px',
      animation: 'lds-ellipsis3 0.6s infinite',
    },
    '& div:nth-child(4)': {
      left: '8px',
      animation: 'lds-ellipsis4 0.6s infinite',
    },

    '@keyframes lds-ellipsis1': {
      from: {
        transform: 'scale(0)',
      },
      to: {
        transform: 'scale(1)',
      },
    },
    '@keyframes lds-ellipsis3': {
      from: {
        transform: 'scale(1)',
      },
      to: {
        transform: 'scale(0)',
      },
    },
    '@keyframes lds-ellipsis2': {
      from: {
        transform: 'translate(0, 0)',
      },
      to: {
        transform: "translate('24px', 0)",
      },
    },
  },
}));

function LoadingIcon() {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default LoadingIcon;
