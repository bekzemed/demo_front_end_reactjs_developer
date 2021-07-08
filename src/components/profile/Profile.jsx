import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Avatar, Button } from '@material-ui/core';
import { data } from '../../data/data';
import MainItem from '../main-item/MainItem';
import EditModal from '../edit-modal/EditModal';

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
  topAvatar: {
    position: 'absolute',
    top: '20%',
  },
  avatar: {
    height: '34%',
    width: '34%',
    border: '3px solid white',
  },
  button: {
    borderRadius: '22px',
    textTransform: 'capitalize',
    color: 'rgb(57, 62, 70)',
    borderColor: 'rgb(57, 62, 70)',
  },
  name: {
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '1.5px',
  },
  image: {
    width: '100%',
  },
  opacity: {
    fontSize: '15px',
    opacity: '0.7',
  },
  icons: {
    marginRight: '5px',
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

const Profile = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.container}>
      {/* edit modal */}
      <EditModal open={open} handleClose={handleClose} />

      <Box
        className={classes.topContainer}
        px={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" className={classes.topContainerText}>
          Bereket
        </Typography>
      </Box>

      {/* background image */}
      <Box>
        <img
          className={classes.image}
          src={data.profile.background}
          alt="Background"
        />
      </Box>

      {/* all below background */}
      <Box px={2} mb={2}>
        <Box className={classes.topAvatar}>
          <Avatar src={data.profile.pic} className={classes.avatar} />
        </Box>
        <Box display="flex" justifyContent="flex-end" mt={1}>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={handleOpen}
          >
            Edit Profile
          </Button>
        </Box>

        {/* below avatar */}
        <Box display="flex" flexDirection="column" mt={3}>
          <Box mb={1}>
            <Typography className={classes.name}>
              {data.profile.name}
            </Typography>
            <Typography className={classes.opacity}>
              {data.profile.username}
            </Typography>
          </Box>

          <Box display="flex" className={classes.opacity}>
            <Box display="flex" alignItems="center" mr={3}>
              <i className={`fas fa-mars ${classes.icons}`}></i>
              <Typography>{data.profile.age}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <i className={`fas fa-info-circle ${classes.icons}`}></i>
              <Typography>{data.profile.info}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* main post */}

      <Box className={classes.posts}>
        {data.posts.map(post => (
          <MainItem key={post.id} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default Profile;
