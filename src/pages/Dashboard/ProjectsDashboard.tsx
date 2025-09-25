import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '@mui/material';
import SectionHeader from '../../components/Components_Dashboard/SectionHeader/SectionHeader';
import ProjectForm from '../../components/Components_Dashboard/ProjectForm/ProjectForm';
import ProjectTable from '../../components/Components_Dashboard/ProjectTable/ProjectTable';
import FeedbackAlert from '../../components/Common/FeedbackAlert/FeedbackAlert';
import { useProjectService } from '../../services/projectService/projectService';
import type { Project, ProjectResponse } from '../../services/projectService/projectService.types';

const ProjectsDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | undefined>(undefined);
  const [page] = useState(1);
  const [limit] = useState(10);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSeverity, setFeedbackSeverity] = useState<'success' | 'error'>('success');

  const { getProjects, createProject, updateProject, deleteProject } = useProjectService();

  const showFeedback = (message: string, severity: 'success' | 'error') => {
    setFeedbackMessage(message);
    setFeedbackSeverity(severity);
    setFeedbackOpen(true);
  };

  const loadProjects = useCallback(async () => {
    try {
      const response = await getProjects(page, limit);
      setProjects(response.projects);
    } catch (error) {
      console.error(error);
      showFeedback('Erro ao carregar projetos.', 'error');
    }
  }, [getProjects, page, limit]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const handleCreateOrUpdate = async (projectData: Project, imageFile?: File) => {
    let result: ProjectResponse;
    
    try {
      if (projectData._id) {
        result = await updateProject(projectData._id, projectData);
        setProjects(prevProjects =>
          prevProjects.map(p => (p._id === projectData._id ? result.project : p))
        );
        showFeedback('Projeto atualizado com sucesso!', 'success');
      } else {
        result = await createProject(projectData, imageFile);
        setProjects(prevProjects => [result.project, ...prevProjects]);
        showFeedback('Projeto criado com sucesso!', 'success');
      }
      setEditingProject(undefined);
    } catch (error) {
      console.error(error);
      showFeedback('Erro ao salvar projeto.', 'error');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id);
      setProjects(prevProjects => prevProjects.filter(p => p._id !== id));
      showFeedback('Projeto excluído com sucesso!', 'success');
    } catch (error) {
      console.error(error);
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