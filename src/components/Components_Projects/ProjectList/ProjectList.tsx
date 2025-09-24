import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from '../ProjectCard/ProjectCard';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <ProjectCard linkRepo={''} linkDeploy={''} type={'Frontend'} {...project} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
