import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import SidebarItem from '../side-bar-item/SidebarItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    width: '500px',
    height: '100vh',
    borderRight: '1px solid rgb(239, 243, 244)',
  },

  topText: {
    fontWeight: '700',
    letterSpacing: '1.3px',
    fontSize: '24px',
    marginBottom: '10px',
  },
  middleText: {
    color: 'rgb(83, 100, 113)',
    fontSize: '15px',
    lineHeight: '20px',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
  },
}));

const SettingRightBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography className={classes.topText}>
          Welcome to the setting
        </Typography>
        <Typography className={classes.middleText}>
          You do not have any setting applied to our website.
        </Typography>
        <Link to="/dashboard" className={classes.link}>
          <SidebarItem text="Back to home" isButton />
        </Link>
      </Box>
    </Box>
  );
};

export default SettingRightBar;
