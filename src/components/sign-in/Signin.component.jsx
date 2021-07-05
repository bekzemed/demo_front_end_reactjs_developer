import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import ErrorModal from '../error-modal/ErrorModal';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
  },
  opacity: {
    opacity: 0.6,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  button: {
    marginRight: '20px',
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setValues({ email: '', password: '' });
    } catch (error) {
      setMessage(error.message);
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container maxWidth="lg">
      <ErrorModal
        open={showModal}
        handleClose={handleClose}
        message={message}
      />
      <Box display="flex" height="100vh">
        <Box my="auto" width="50%">
          <img
            src="../images/signin.png"
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
              pb={2}
            >
              Dexter Hut
            </Box>
          </Typography>

          <Typography component={'span'}>
            <Box
              fontWeight="fontWeightMedium"
              fontSize={20}
              textAlign="center"
              pb={3}
              className={classes.opacity}
            >
              Sign in by entering information below
            </Box>
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={values.email}
              label="Email"
              handleChange={handleChange}
            />
            <FormInput
              value={values.password}
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              handleChange={handleChange}
              inputProps={true}
              showText={showPassword}
              handleClick={handleClickShowPassword}
            />

            <Box my={4}>
              <Box display="flex">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  fullWidth
                >
                  Sign in
                </Button>

                <Button
                  onClick={signInWithGoogle}
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Sign in with Google
                </Button>
              </Box>

              <Typography className={classes.text}>
                Do not have an account?{' '}
                <Box ml={1}>
                  <Link to="/signup" className={classes.link}>
                    Sign up
                  </Link>
                </Box>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
