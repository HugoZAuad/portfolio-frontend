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
import ProjectRow from '../ProjectRow/ProjectRow';
import type { Project } from '../../../services/projectService/projectService';

interface Props {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const ProjectTable: React.FC<Props> = ({ projects, onEdit, onDelete }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Título</TableCell>
          <TableCell>Descrição</TableCell>
          <TableCell>Tecnologias</TableCell>
          <TableCell>Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projects.map((project) => (
          <ProjectRow
            key={project._id}
            project={project}
            onEdit={() => onEdit(project)}
            onDelete={() => onDelete(project._id!)}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ProjectTable;
