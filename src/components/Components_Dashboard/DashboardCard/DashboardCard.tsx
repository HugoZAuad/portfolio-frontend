import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface Props {
  title: string;
  description: string;
  onClick: () => void;
}

const DashboardCard: React.FC<Props> = ({ title, description, onClick }) => {
  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>{description}</Typography>
        <Button variant="contained" onClick={onClick}>Acessar</Button>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
