import React from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
  },
  buttonRadius: {
    borderRadius: '15px',
  },
  buttonColor: {
    backgroundColor: '#393E46',
  },
  removeLinkDecoration: {
    textDecoration: 'none',
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box display="flex" height="100vh">
        <Box my="auto" width="50%">
          <img
            src="../images/welcome.png"
            alt="Welcome"
            className={classes.image}
          />
        </Box>
        <Box width="50%" my="auto" p={7}>
          <Typography component={'span'}>
            <Box
              fontWeight="fontWeightMedium"
              fontSize={25}
              textAlign="center"
              pb={3}
            >
              Welcome to Dexter Hut
            </Box>
          </Typography>
          <Box mb={2}>
            <Link to="/signup" className={classes.removeLinkDecoration}>
              <Button
                variant="contained"
                fullWidth
                className={classes.buttonRadius}
                style={{ backgroundColor: '#393E46', color: 'white' }}
              >
                Sign up
              </Button>
            </Link>
          </Box>
          <Link to="/signin" className={classes.removeLinkDecoration}>
            <Button
              variant="outlined"
              fullWidth
              className={classes.buttonRadius}
            >
              Sign in
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
