import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContactCard = styled(Box)(({ theme }) => ({
  padding: '32px',
  borderRadius: '16px',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 20px ${theme.palette.primary.main}08`,
}));

export default ContactCard;
