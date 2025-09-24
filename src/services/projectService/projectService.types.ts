export interface Project {
  _id?: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
}

export interface ProjectResponse {
  message: string;
  project: Project;
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
