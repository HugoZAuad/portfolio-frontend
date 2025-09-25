import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
} from '@mui/material';
import SkillRow from '../SkillRow/SkillRow';
import type { Skill } from '../../../services/skillService/skillsService.types';


interface Props {
  skills: Skill[];
  onEdit: (skill: Skill) => void;
  onDelete: (id: string) => void;
}

const SkillTable: React.FC<Props> = ({ skills, onEdit, onDelete }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>Categoria</TableCell>
          <TableCell>Nível</TableCell>
          <TableCell align="center" sx={{ width: '100px' }}>Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {skills.map((skill) => (
          <SkillRow
            key={skill.id}
            skill={skill}
            onEdit={() => onEdit(skill)}
            onDelete={() => onDelete(skill.id)}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default SkillTable;