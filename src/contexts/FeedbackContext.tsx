import { Alert, Snackbar } from '@mui/material'
import React, { createContext, useContext, useState } from 'react';

interface FeedbackContextType {
  showFeedback: (msg: string, type: 'success' | 'error' | 'warning' | 'info') => void;
}

const FeedbackContext = createContext<FeedbackContextType>({
  showFeedback: () => {},
});

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('info');

  const showFeedback = (msg: string, type: typeof severity) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  const closeFeedback = () => setOpen(false);

  return (
    <FeedbackContext.Provider value={{ showFeedback }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={closeFeedback}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={closeFeedback} severity={severity} variant="filled" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </FeedbackContext.Provider>
  );
};
