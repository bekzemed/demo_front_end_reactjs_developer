import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import SettingItem from '../setting-item/SettingItem';

const useStyles = makeStyles(() => ({
  container: {
    width: '370px',
    border: '1px solid rgb(239, 243, 244)',
    marginRight: '40px',
  },
  topContainer: {
    position: 'sticky',
    top: '0',
    backgroundColor: 'white',
    zIndex: '10',
    height: '70px',
    border: '1px solid rgb(239, 243, 244)',
  },
  topContainerText: {
    fontWeight: '700',
  },
}));

const Setting = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        className={classes.topContainer}
        px={2}
        display="flex"
        alignItems="center"
      >
        <Typography variant="h6" className={classes.topContainerText}>
          Settings
        </Typography>
      </Box>
      <SettingItem text="Your account" />
      <SettingItem text="Security and account access" />
      <SettingItem text="Privacy and safety" />
      <SettingItem text="Notifications" />
      <SettingItem text="Accessibility, display, and languages" />
      <SettingItem text="Additional resources" />
    </Box>
  );
};

export default Setting;
