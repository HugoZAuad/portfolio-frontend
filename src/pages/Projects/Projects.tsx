import React, { useEffect, useState, useCallback } from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../../components/Components_Projects/SectionHeader/SectionHeader';
import ProjectList from '../../components/Components_Projects/ProjectList/ProjectList';
import PaginationControls from '../../components/Components_Projects/PaginationControls/PaginationControls';
import FeedbackAlert from '../../components/Common/FeedbackAlert/FeedbackAlert';
import { useProjectService } from '../../services/projectService/projectService';
import type { Project } from '../../services/projectService/projectService.types';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '80px 20px 60px',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
}));

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSeverity, setFeedbackSeverity] = useState<'success' | 'error'>('error');

  const { getProjects } = useProjectService();

  const showFeedback = (message: string, severity: 'success' | 'error') => {
    setFeedbackMessage(message);
    setFeedbackSeverity(severity);
    setFeedbackOpen(true);
  };

  const loadProjects = useCallback(async () => {
    try {
      const data = await getProjects(page);
      setProjects(data.projects);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error(error);
      showFeedback('Erro ao carregar projetos.', 'error');
    }
  }, [getProjects, page]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return (
    <SectionContainer id="projects">
      <Container maxWidth="lg">
        <SectionHeader />
        <ProjectList projects={projects} />
        <PaginationControls page={page} setPage={setPage} hasMore={hasMore} />
        <FeedbackAlert
          open={feedbackOpen}
          message={feedbackMessage}
          severity={feedbackSeverity}
          onClose={() => setFeedbackOpen(false)}
        />
      </Container>
    </SectionContainer>
  );
};

export default ProjectsSection;
