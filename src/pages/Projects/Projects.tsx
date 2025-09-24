import React, { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../../components/Components_Projects/SectionHeader/SectionHeader';
import ProjectList from '../../components/Components_Projects/ProjectList/ProjectList';
import PaginationControls from '../../components/Components_Projects/PaginationControls/PaginationControls';
import { fetchProjects } from '../../services/projectService/projectService';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '120px 20px 80px',
  backgroundColor: theme.palette.background.default,
}));

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects(page);
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
