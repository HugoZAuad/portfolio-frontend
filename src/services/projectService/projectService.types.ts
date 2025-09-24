export type ProjectType = 'frontend' | 'backend' | 'fullstack';

export interface Project {
  _id?: string;
  title: string;
  description: string;
  linkRepo?: string;
  linkDeploy?: string;
  imageUrl?: string;
  images?: { url: string }[];
  type: ProjectType;
}

export interface ProjectResponse {
  message: string;
  data: Project;
}

export interface DeleteResponse {
  message: string;
}

export interface PaginatedProjectsResponse {
  projects: Project[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
