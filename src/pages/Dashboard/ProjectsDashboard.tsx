import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '@mui/material';
import SectionHeader from '../../components/Components_Dashboard/SectionHeader/SectionHeader';
import ProjectForm from '../../components/Components_Dashboard/ProjectForm/ProjectForm';
import ProjectTable from '../../components/Components_Dashboard/ProjectTable/ProjectTable';
import FeedbackAlert from '../../components/Common/FeedbackAlert/FeedbackAlert';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../../services/projectService/projectService';
import type { Project, PaginatedProjectsResponse } from '../../services/projectService/projectService.types';

const ProjectsDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | undefined>(undefined);
  const [page] = useState(1);
  const [limit] = useState(10);

  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSeverity, setFeedbackSeverity] = useState<'success' | 'error'>('success');

  const showFeedback = (message: string, severity: 'success' | 'error') => {
    setFeedbackMessage(message);
    setFeedbackSeverity(severity);
    setFeedbackOpen(true);
  };

  const loadProjects = useCallback(async (): Promise<void> => {
    try {
      const response: PaginatedProjectsResponse = await getProjects(page, limit);
      setProjects(response.projects);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
      showFeedback('Erro ao carregar projetos.', 'error');
    }
  }, [page, limit]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const handleCreateOrUpdate = async (project: Project, imageFile?: File): Promise<void> => {
    try {
      if (editingProject && editingProject._id) {
        await updateProject(editingProject._id, project);
        showFeedback('Projeto atualizado com sucesso!', 'success');
      } else {
        await createProject(project, imageFile);
        showFeedback('Projeto criado com sucesso!', 'success');
      }
      setEditingProject(undefined);
      await loadProjects();
    } catch (error) {
      console.error('Erro ao salvar projeto:', error);
      showFeedback('Erro ao salvar projeto.', 'error');
    }
  };

  const handleEdit = (project: Project): void => {
    setEditingProject(project);
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteProject(id);
      showFeedback('Projeto excluído com sucesso!', 'success');
      await loadProjects();
    } catch (error) {
      console.error('Erro ao excluir projeto:', error);
      showFeedback('Erro ao excluir projeto.', 'error');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader title="Gerenciar Projetos" />
      <ProjectForm onSubmit={handleCreateOrUpdate} initialData={editingProject} />
      <ProjectTable projects={projects} onEdit={handleEdit} onDelete={handleDelete} />
      <FeedbackAlert
        open={feedbackOpen}
        message={feedbackMessage}
        severity={feedbackSeverity}
        onClose={() => setFeedbackOpen(false)}
      />
    </Container>
  );
};

export default ProjectsDashboard;
