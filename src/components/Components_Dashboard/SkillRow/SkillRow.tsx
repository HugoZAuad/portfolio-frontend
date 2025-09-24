import React from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Skill } from '../../../services/skillService/skillsService.types';

interface Props {
  skill: Skill;
  onEdit: () => void;
  onDelete: () => void;
}

const SkillRow: React.FC<Props> = ({ skill, onEdit, onDelete }) => (
  <TableRow>
    <TableCell>{skill.name}</TableCell>
    <TableCell>{skill.level}%</TableCell>
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

export default SkillRow;
