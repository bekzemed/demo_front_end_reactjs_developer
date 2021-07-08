import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  trendItem: {
    padding: '12px',
    borderBottomColor: 'rgb(239, 243, 244)',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  trendItemText: {
    fontWeight: '700',
  },
  trendIcons: {
    color: '#676464',
    cursor: 'pointer',
  },
}));

const TrendItem = ({ trend }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.trendItem}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      key={trend.id}
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="caption">Trending</Typography>
        <Typography className={classes.trendItemText}>{trend.topic}</Typography>
        <Typography variant="caption">{trend.username}</Typography>
      </Box>
      <i className={`fas fa-chevron-circle-down ${classes.trendIcons}`}></i>
    </Box>
  );
};

export default TrendItem;
