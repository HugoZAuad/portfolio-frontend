import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SectionHeader from '../../components/Components_Dashboard/SectionHeader/SectionHeader';
import ProjectForm from '../../components/Components_Dashboard/ProjectForm/ProjectForm';
import ProjectTable from '../../components/Components_Dashboard/ProjectTable/ProjectTable';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../../services/projectService/projectService';
import type { Project } from '../../services/projectService/projectService';

const ProjectsDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | undefined>(undefined);

  const loadProjects = async (): Promise<void> => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreateOrUpdate = async (project: Project): Promise<void> => {
    try {
      if (editingProject && editingProject._id) {
        await updateProject(editingProject._id, project);
      } else {
        await createProject(project);
      }
      setEditingProject(undefined);
      await loadProjects();
    } catch (error) {
      console.error('Erro ao salvar projeto:', error);
    }
  };

  const handleEdit = (project: Project): void => {
    setEditingProject(project);
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteProject(id);
      await loadProjects();
    } catch (error) {
      console.error('Erro ao excluir projeto:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader title="Gerenciar Projetos" />
      <ProjectForm onSubmit={handleCreateOrUpdate} initialData={editingProject} />
      <ProjectTable projects={projects} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

export default ProjectsDashboard;
