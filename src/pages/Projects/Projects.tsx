import React, { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../../components/Components_Projects/SectionHeader/SectionHeader';
import ProjectList from '../../components/Components_Projects/ProjectList/ProjectList';
import PaginationControls from '../../components/Components_Projects/PaginationControls/PaginationControls';
import { getProjects } from '../../services/projectService/projectService';
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

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects(page);
        setProjects(data.projects);
        setHasMore(data.hasMore);
      } catch (error) {
        console.error('Erro ao carregar projetos:', error);
      }
    };

    loadProjects();
  }, [page]);

  return (
    <SectionContainer id="projects">
      <Container maxWidth="lg">
        <SectionHeader />
        <ProjectList projects={projects} />
        <PaginationControls page={page} setPage={setPage} hasMore={hasMore} />
      </Container>
    </SectionContainer>
  );
};

export default ProjectsSection;
