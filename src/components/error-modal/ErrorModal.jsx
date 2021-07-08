import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalTitle: {
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
  },
}));

const ErrorModal = ({ open, handleClose, message }) => {
  const classes = useStyles();
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
        <div className={classes.paper}>
          <h2 className={classes.modalTitle}>Error Message</h2>
          <p>{message}</p>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={handleClose} variant="contained" color="secondary">
              Close
            </Button>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default ErrorModal;
