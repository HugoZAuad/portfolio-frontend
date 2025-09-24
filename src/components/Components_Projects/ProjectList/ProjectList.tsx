import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from '../ProjectCard/ProjectCard';
import type { Project } from '../../../services/projectService/projectService.types';

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={project._id || index}>
          <ProjectCard
            index={index}
            title={project.title}
            description={project.description}
            linkRepo={project.linkRepo || ''}
            linkDeploy={project.linkDeploy || ''}
            imageUrl={project.imageUrl}
            type={project.type}
            technologies={[]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
