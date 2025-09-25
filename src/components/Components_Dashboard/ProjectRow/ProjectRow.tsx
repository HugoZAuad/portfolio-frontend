import React from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Project, ProjectType } from '../../../services/projectService/projectService.types';

interface Props {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

const formatType = (type: ProjectType): string => {
    return type.charAt(0) + type.slice(1).toLowerCase();
};

const ProjectRow: React.FC<Props> = ({ project, onEdit, onDelete }) => (
  <TableRow>
    <TableCell>{project.title}</TableCell>
    <TableCell>{project.description}</TableCell>
    <TableCell>{formatType(project.type)}</TableCell>   
    <TableCell align="center" sx={{ width: '100px' }}>
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