import React from 'react';
import { TableRow, TableCell, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Project } from '../../../services/projectService/projectService.types';

interface Props {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

const ProjectRow: React.FC<Props> = ({ project, onEdit, onDelete }) => (
  <TableRow>
    <TableCell>{project.title}</TableCell>
    <TableCell>{project.description}</TableCell>
    <TableCell>
      <Stack direction="row" spacing={1} flexWrap="wrap">
      </Stack>
    </TableCell>
    <TableCell>
      <IconButton onClick={onEdit}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </TableCell>
  </TableRow>
);

export default ProjectRow;
