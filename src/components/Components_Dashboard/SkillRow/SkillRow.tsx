import React from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Skill, SkillCategory } from '../../../services/skillService/skillsService.types';

interface Props {
  skill: Skill;
  onEdit: () => void;
  onDelete: () => void;
}

const formatLevel = (level: string) => {
  if (level === 'AVANCADO') return 'Avançado';
  if (level === 'BASICO') return 'Básico';
  if (level === 'EXPERIENTE') return 'Especialista';
  return level.charAt(0) + level.slice(1).toLowerCase();
};

const formatCategory = (category: SkillCategory): string => {
    return category.split('_').map(word => 
        word.charAt(0) + word.slice(1).toLowerCase()
    ).join(' ');
};

const SkillRow: React.FC<Props> = ({ skill, onEdit, onDelete }) => (
  <TableRow>
    <TableCell>{skill.name}</TableCell>
    <TableCell>{formatCategory(skill.category)}</TableCell> 
    <TableCell>{formatLevel(skill.level)}</TableCell>  
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

export default SkillRow;