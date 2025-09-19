import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '120px 20px 80px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));

export default SectionContainer;
