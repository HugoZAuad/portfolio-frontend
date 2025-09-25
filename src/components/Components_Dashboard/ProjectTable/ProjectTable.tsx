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
import type { Project } from '../../../services/projectService/projectService.types';

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
          <TableCell>Tipo</TableCell>
          <TableCell></TableCell>
          <TableCell>Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projects.map((project) => (
          <ProjectRow
            key={project._id || project.title}
            project={project}
            onEdit={() => onEdit(project)}
            onDelete={() => {
              if (project._id) {
                onDelete(project._id);
              } else {
                console.error("ID do projeto não encontrado para exclusão!");
              }
            }}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ProjectTable;