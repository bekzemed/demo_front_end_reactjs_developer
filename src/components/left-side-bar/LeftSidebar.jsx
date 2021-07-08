import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SidebarItem from '../side-bar-item/SidebarItem';
import { Avatar, Typography, Box, Button } from '@material-ui/core';
import { data } from '../../data/data';
import { auth } from '../../firebase/firebase.util';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    width: '275px',
    height: '100vh',
    position: 'sticky',
    top: '0',
  },
  image: {
    width: '70px',
  },
  typographyStyle: {
    opacity: '0.8',
  },
  text: {
    fontWeight: '700',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  profile: {
    cursor: 'pointer',
    borderRadius: '30px',
    '&:hover': {
      backgroundColor: 'rgb(57, 62, 70, 0.1)',
    },
  },
  button: {
    borderRadius: '22px',
    textTransform: 'capitalize',
    color: 'rgb(57, 62, 70)',
    borderColor: 'rgb(57, 62, 70)',
    width: '240px',
  },
}));

const LeftSidebar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box
      className={classes.container}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      px={1}
    >
      {/* left sidebar items */}
      <Box>
        <img
          src="https://photos.angel.co/startups/i/8391043-49911a5219f93480755dd6898477b6de-medium_jpg.jpg?buster=1625090794"
          alt="Dextur"
          className={classes.image}
        />
        <Link to="/dashboard" className={classes.link}>
          <SidebarItem icon="fas fa-home" text="Home" />
        </Link>
        <Link to="/dashboard/explore" className={classes.link}>
          <SidebarItem icon="fas fa-hashtag" text="Explore" />
        </Link>
        <SidebarItem icon="far fa-bell" text="Notifications" />
        <SidebarItem icon="far fa-envelope" text="Messages" />
        <SidebarItem icon="far fa-bookmark" text="Bookmarks" />
        <Link to="/dashboard/setting" className={classes.link}>
          <SidebarItem icon="fas fa-cog" text="Setting" />
        </Link>
        <Link to="/dashboard/profile" className={classes.link}>
          <SidebarItem icon="far fa-user" text="Profile" />
        </Link>
        <SidebarItem icon="far fa-comment-dots" text="More" isLast />
        <SidebarItem isButton text="Feedback" />
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() =>
            auth.signOut().then(() => {
              history.push('/');
            })
          }
        >
          Sign out
        </Button>
      </Box>

      <Link to="/dashboard/profile" className={classes.link}>
        <Box px={2} py={1} my={1} className={classes.profile}>
          <Box key={data.profile.id} display="flex">
            <Avatar alt={data.profile.name} src={data.profile.pic} />
            <Box ml={2}>
              <Typography variant="subtitle2" className={classes.text}>
                {data.profile.name}
              </Typography>

              <Typography
                className={classes.typographyStyle}
                variant="subtitle2"
              >
                {data.profile.username}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default LeftSidebar;
