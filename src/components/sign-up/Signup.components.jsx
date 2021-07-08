import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link, withRouter } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import validate from '../input-validation/Validation';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
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
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#393E46',
  },
  button: {
    backgroundColor: '#393E46',
    color: 'white',
    border: '1px solid #393E46',
    '&:hover': {
      border: '1px solid #393E46',
      color: '#393E46',
      backgroundColor: 'white',
    },
  },
  errors: {
    color: 'red',
    marginBottom: '5px',
    fontSize: '13px',
  },
}));

const SignUp = ({ history }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    errors && setErrors(validate(values));

    const { displayName, email, password } = values;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setValues({
        displayName: '',
        password: '',
        email: '',
        confirmPassword: '',
      });
      history.push('/signin');
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
      {/* error modal */}
      <ErrorModal
        open={showModal}
        handleClose={handleClose}
        message={message}
      />
      <Box display="flex" height="100vh">
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
              Sign up by entering information below
            </Box>
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit}>
            <FormInput
              type="text"
              label="Display Name"
              name="displayName"
              value={values.displayName}
              handleChange={handleChange}
            />
            {errors.name && (
              <span className={classes.errors}>{errors.name}</span>
            )}
            <FormInput
              type="email"
              name="email"
              value={values.email}
              label="Email"
              handleChange={handleChange}
            />
            {errors.email && (
              <span className={classes.errors}>{errors.email}</span>
            )}
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
            {errors.password && (
              <span className={classes.errors}>{errors.password}</span>
            )}
            <FormInput
              value={values.confirmPassword}
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              handleChange={handleChange}
              inputProps={true}
              showText={showConfirmPassword}
              handleClick={handleClickShowConfirmPassword}
            />
            {errors.confirmPassword && (
              <span className={classes.errors}>{errors.confirmPassword}</span>
            )}

            <Box my={4} justifyContent="space-between">
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                fullWidth
              >
                Sign up
              </Button>
              <Typography className={classes.text} component={'span'}>
                Already have an account?{' '}
                <Box ml={1}>
                  <Link to="/signin" className={classes.link}>
                    Sign in
                  </Link>
                </Box>
              </Typography>
            </Box>
          </form>
        </Box>

        <Box my="auto" width="50%">
          <img
            src="../images/signup.png"
            alt="Welcome"
            className={classes.image}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default withRouter(SignUp);
