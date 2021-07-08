import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  hideOverflow: {
    overflow: 'hidden',
  },
  text1: {
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '20px',
  },
  text: {
    opacity: '0.7',
    marginLeft: '5px',
  },
  image: {
    width: '100%',
    borderRadius: '15px',
  },
  socialTexts: {
    padding: '0 12px',
  },
}));
const MainItem = ({ post }) => {
  const classes = useStyles();
  return (
    <Box
      key={post.id}
      px={2}
      py={2}
      className={classes.container}
      display="flex"
    >
      <Box mr={2}>
        <Avatar src={post.profile} alt={post.name} />
      </Box>

      <Box className={classes.hideOverflow}>
        <Box display="flex">
          <Typography variant="body2" className={classes.text1}>
            {' '}
            {post.name}
          </Typography>
          <Typography variant="body2" className={classes.text}>
            {post.username}
          </Typography>
        </Box>
        <Typography variant="body2"> {post.description}</Typography>
        <Box my={1}>
          <img src={post.pic} alt={post.name} className={classes.image} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <i className="far fa-comment"></i>
            <Typography className={classes.socialTexts} variant="body2">
              20
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <i className="fas fa-retweet"></i>
            <Typography className={classes.socialTexts} variant="body2">
              80
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <i className="far fa-heart"></i>
            <Typography className={classes.socialTexts} variant="body2">
              150
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <i className="fas fa-share"></i>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainItem;
