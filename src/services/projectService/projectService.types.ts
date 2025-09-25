export type ProjectType = 'Frontend' | 'Backend' | 'Fullstack';

export interface Project {
  id: string; 
  title: string;
  description: string;
  linkRepo?: string;
  linkDeploy?: string;
  imageUrl?: string;
  type: ProjectType;
}

export interface ProjectResponse {
  message: string;
  project: Project;
}

export interface PaginatedProjectsResponse {
  projects: Project[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface DeleteResponse {
  message: string;
  id: string;
}