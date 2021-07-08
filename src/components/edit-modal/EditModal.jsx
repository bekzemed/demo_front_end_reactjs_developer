import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  Box,
  TextField,
} from '@material-ui/core';
import { data } from '../../data/data';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: '600px',
  },
  modalTitle: {
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    marginBottom: '15px',
  },
  button: {
    color: 'rgb(57, 62, 70)',
  },
}));

const EditModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: data.profile.name,
    age: data.profile.age,
    info: data.profile.info,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.paper} px={2} py={2}>
          <h2 className={classes.modalTitle}>Edit Profile</h2>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={classes.textField}
            fullWidth
          />

          <TextField
            type="number"
            label="Age"
            variant="outlined"
            name="age"
            value={values.age}
            onChange={handleChange}
            className={classes.textField}
            fullWidth
          />

          <TextField
            type="text"
            label="Info"
            variant="outlined"
            name="info"
            value={values.info}
            onChange={handleChange}
            className={classes.textField}
            fullWidth
          />
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={handleClose} variant="contained" color="primary">
              Close
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EditModal;
