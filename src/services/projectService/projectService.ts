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

export const createProject = async (project: Project): Promise<ProjectResponse> => {
  const response = await api.post<ProjectResponse>('/projects', project);
  return response.data;
};

export const updateProject = async (id: string, project: Project): Promise<ProjectResponse> => {
  const response = await api.patch<ProjectResponse>(`/projects/${id}`, project);
  return response.data;
};

export const deleteProject = async (id: string): Promise<DeleteResponse> => {
  const response = await api.delete<DeleteResponse>(`/projects/${id}`);
  return response.data;
};

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await api.post<{ imageUrl: string }>(
    '/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data.imageUrl;
};
