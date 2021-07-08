import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import { data } from '../../data/data';
import MainItem from '../main-item/MainItem';
import TrendItem from '../trend-item/TrendItem';

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
  posts: {
    overflowY: 'scroll',
    borderBottom: '1px solid rgb(239, 243, 244)',
    cursor: 'pointer',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '30px',
    textAlign: 'center',

    '&:focus': {
      outline: 'none',
      border: '1px solid rgb(57, 62, 70)',
    },
  },
  searchIcon: {
    position: 'absolute',
    left: '255px',
    color: 'rgb(57, 62, 70)',
  },
}));

const Explore = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        className={classes.topContainer}
        px={2}
        display="flex"
        alignItems="center"
      >
        <i className={`fas fa-search fa-sm ${classes.searchIcon}`}></i>
        <input className={classes.input} type="text" placeholder="Search" />
      </Box>
      {data.trends.map(trend => (
        <TrendItem key={trend.id} trend={trend} />
      ))}

      <Box className={classes.posts}>
        {data.posts.map(post => (
          <MainItem key={post.id} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default Explore;
