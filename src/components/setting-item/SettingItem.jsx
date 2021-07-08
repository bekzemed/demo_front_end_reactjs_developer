import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  settingsContainer: {
    cursor: 'pointer',
    height: '50px',
    borderBottom: '1px solid #f3f3f3',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
}));

const SettingItem = ({ text }) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={2}
      className={classes.settingsContainer}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography>{text}</Typography>
        <i className="fas fa-angle-right"></i>
      </Box>
    </Box>
  );
};

export default SettingItem;
