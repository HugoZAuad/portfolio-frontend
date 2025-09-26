import { useApi } from '../../contexts/ApiContext';
import type { Project, PaginatedProjectsResponse, ProjectResponse, DeleteResponse } from './projectService.types'

export type ProjectUpdateData = Partial<Omit<Project, 'id' | 'imageUrl'>>;

export const useProjectService = () => {
  const api = useApi();

  const getProjects = async (
    page: number,
    limit: number = 6,
  ): Promise<PaginatedProjectsResponse> => {
    const response = await api.get(`/projects?page=${page}&limit=${limit}`);
    return response.data;
  };

  const getAllProjects = async (): Promise<Project[]> => {
    const response = await api.get('/projects');
    return response.data;
  };

  const createProject = async (
    project: Project,
    imageFile?: File,
  ): Promise<ProjectResponse> => {
    const formData = new FormData();

    formData.append('title', project.title);
    formData.append('description', project.description);
    formData.append('type', String(project.type));

    if (project.linkRepo) formData.append('linkRepo', project.linkRepo);
    if (project.linkDeploy) formData.append('linkDeploy', project.linkDeploy);

    if (imageFile) {
      formData.append('image', imageFile);
    }

    const response = await api.post('/projects', formData);
    return response.data;
  };

  const updateProject = async (
    id: string,
    projectUpdateData: ProjectUpdateData,
    imageFile?: File,
  ): Promise<ProjectResponse> => {
    const formData = new FormData();

    if (projectUpdateData.title !== undefined) formData.append('title', projectUpdateData.title);
    if (projectUpdateData.description !== undefined) formData.append('description', projectUpdateData.description);
    if (projectUpdateData.type !== undefined) formData.append('type', projectUpdateData.type);
    
    if (projectUpdateData.linkRepo !== undefined) {
      formData.append('linkRepo', projectUpdateData.linkRepo || '');
    }
    if (projectUpdateData.linkDeploy !== undefined) {
      formData.append('linkDeploy', projectUpdateData.linkDeploy || '');
    }

    if (imageFile) {
      formData.append('image', imageFile);
    }
    
    const response = await api.patch(`/projects/${id}`, formData);
    return response.data;
  };

  const deleteProject = async (id: string): Promise<DeleteResponse> => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  };

  return {
    getProjects,
    getAllProjects,
    createProject,
    updateProject,
    deleteProject,
  };
};