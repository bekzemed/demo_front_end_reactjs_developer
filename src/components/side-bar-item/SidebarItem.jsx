import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  linkContainer: {
    width: 'fit-content',
    borderRadius: '30px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(57, 62, 70, 0.1)',
      color: 'black',
    },
  },
  icons: {
    marginRight: '20px',
    opacity: '0.8',
    width: '25px',
  },
  texts: {
    fontWeight: 'bold',
  },
  button: {
    width: '240px',
    borderRadius: '30px',
    cursor: 'pointer',
    backgroundColor: 'rgb(57, 62, 70)',
    color: 'white',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: 'rgb(57, 62, 70, 0.8)',
    },
  },
}));

const SidebarItem = ({ icon, text, isButton, handleClick, isLast }) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      className={isButton ? classes.button : classes.linkContainer}
      px={2}
      py={1}
      mb={isLast ? 3 : 1}
      onClick={handleClick}
    >
      {isButton ? null : <i className={`${icon} fa-lg ${classes.icons}`}></i>}
      <Typography variant="h6" className={classes.texts}>
        {text}
      </Typography>
    </Box>
  );
};

export default SidebarItem;
