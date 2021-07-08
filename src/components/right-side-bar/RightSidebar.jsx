import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { data } from '../../data/data';
import TrendItem from '../trend-item/TrendItem';

const useStyles = makeStyles(() => ({
  container: {
    width: '315px',
    height: '100vh',
    position: 'sticky',
    top: '0',
  },
  inputContainer: {
    height: '70px',
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
    left: '117px',
    color: 'rgb(57, 62, 70)',
  },
  trendsContainer: {
    background: '#f3f7f7',
    borderRadius: '10px',
  },
  trend: {
    padding: '12px',
  },
  button: {
    width: '100%',
    color: 'rgb(57, 62, 70)',
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'start',
  },
}));

const RightSidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        alignItems="center"
        className={classes.inputContainer}
        mb={5}
      >
        <i className={`fas fa-search fa-sm ${classes.searchIcon}`}></i>
        <input className={classes.input} type="text" placeholder="Search" />
      </Box>
      <Box className={classes.trendsContainer}>
        <Box
          className={classes.trend}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6">Trends For you</Typography>
          <i className="fas fa-poll fa-lg"></i>
        </Box>
        {data.trends.map(trend => (
          <TrendItem key={trend.id} trend={trend} />
        ))}
        <Button className={classes.button}>Show all</Button>
      </Box>
    </Box>
  );
};

export default RightSidebar;
