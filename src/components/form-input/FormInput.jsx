import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  formInput: {
    marginBottom: '10px',
  },
}));

const FormInput = ({
  value,
  name,
  type,
  label,
  handleChange,
  inputProps,
  showText,
  handleClick,
}) => {
  const classes = useStyles();
  return (
    <TextField
      required
      value={value}
      autoComplete="on"
      variant="standard"
      label={label}
      type={type}
      name={name}
      onChange={handleChange}
      className={classes.formInput}
      InputProps={
        inputProps && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
              >
                {showText ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
};

export default FormInput;
