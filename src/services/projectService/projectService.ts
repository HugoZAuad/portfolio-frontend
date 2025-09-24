import api from '../api/api';
import type {
  Project,
  ProjectResponse,
  DeleteResponse,
  PaginatedProjectsResponse,
} from './projectService.types';

export const getProjects = async (
  page: number,
  limit: number = 6
): Promise<PaginatedProjectsResponse> => {
  const response = await api.get<PaginatedProjectsResponse>(`/projects?page=${page}&limit=${limit}`);
  return response.data;
};

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>('/projects');
  return response.data;
};

export const createProject = async (
  project: Project,
  imageFile?: File
): Promise<ProjectResponse> => {
  const formData = new FormData();

  formData.append('title', project.title);
  formData.append('description', project.description);
  formData.append('type', project.type);
  formData.append('linkRepo', project.linkRepo || '');
  formData.append('linkDeploy', project.linkDeploy || '');
  formData.append('imageUrl', project.imageUrl || '');

  if (imageFile) {
    formData.append('image', imageFile);
  }

  const response = await api.post<ProjectResponse>('/projects', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const updateProject = async (
  id: string,
  project: Project
): Promise<ProjectResponse> => {
  const response = await api.patch<ProjectResponse>(`/projects/${id}`, project);
  return response.data;
};

export const deleteProject = async (id: string): Promise<DeleteResponse> => {
  const response = await api.delete<DeleteResponse>(`/projects/${id}`);
  return response.data;
};
