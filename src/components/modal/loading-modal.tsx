import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';

const LoadingModal = ({ open }: { open: boolean }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="loading-modal-title"
      aria-describedby="loading-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          bgcolor: 'background.paper',
          border: '2px solid #00000045',
          boxShadow: 24,
          p: 4,
        }}
      >
        <CircularProgress color="primary" />
        <p id="loading-modal-description">Espere un momento...</p>
      </Box>
    </Modal>
  );
};

export default LoadingModal;
