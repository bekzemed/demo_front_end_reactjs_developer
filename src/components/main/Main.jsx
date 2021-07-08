import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import { data } from '../../data/data';
import MainItem from '../main-item/MainItem';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '600px',
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
  posts: {
    overflowY: 'scroll',
    borderBottom: '1px solid rgb(239, 243, 244)',
    cursor: 'pointer',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        className={classes.topContainer}
        px={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" className={classes.topContainerText}>
          Home
        </Typography>
        <i className="fas fa-globe"></i>
      </Box>

      <Box className={classes.posts}>
        {data.posts.map(post => (
          <MainItem key={post.id} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default Main;
