import { useState } from 'react';

export const useFeedback = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('info');

  const showFeedback = (msg: string, type: typeof severity) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  const closeFeedback = () => setOpen(false);

  return {
    open,
    message,
    severity,
    showFeedback,
    closeFeedback,
  };
};
