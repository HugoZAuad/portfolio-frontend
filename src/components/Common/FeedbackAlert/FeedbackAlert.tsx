import React from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import type { AlertColor } from '@mui/material';

interface FeedbackAlertProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: () => void;
}

const FeedbackAlert: React.FC<FeedbackAlertProps> = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={Slide}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%', fontWeight: 500 }}
        iconMapping={{
          success: <span>✅</span>,
          error: <span>❌</span>,
          warning: <span>⚠️</span>,
          info: <span>ℹ️</span>,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default FeedbackAlert;
