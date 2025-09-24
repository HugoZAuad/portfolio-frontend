import React from 'react';
import { Box } from '@mui/material';
import Button from '../../Common/Button/Button';

interface Props {
  page: number;
  setPage: (page: number) => void;
  hasMore: boolean;
}

const PaginationControls: React.FC<Props> = ({ page, setPage, hasMore }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, gap: 2 }}>
      <Button variant="secondary" disabled={page === 1} onClick={() => setPage(page - 1)}>
        Anterior
      </Button>
      <Button variant="primary" disabled={!hasMore} onClick={() => setPage(page + 1)}>
        Próxima
      </Button>
    </Box>
  );
};

export default PaginationControls;
