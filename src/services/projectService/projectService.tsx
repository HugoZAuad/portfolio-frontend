import axios from 'axios';

export type Project = {
  _id?: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
};

export type PaginatedProjectsResponse = {
  projects: Project[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
};

const BASE_URL = 'https://portfolio-backend-dqxo.onrender.com/projects';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getProjects = async (
  page: number,
  limit: number = 6
): Promise<PaginatedProjectsResponse> => {
  const response = await axios.get<PaginatedProjectsResponse>(
    `${BASE_URL}?page=${page}&limit=${limit}`,
    getAuthHeaders()
  );
  return response.data;
};

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await axios.get<Project[]>(BASE_URL, getAuthHeaders());
  return response.data;
};

export const createProject = async (project: Project): Promise<Project> => {
  const response = await axios.post<Project>(BASE_URL, project, getAuthHeaders());
  return response.data;
};

export const updateProject = async (
  id: string,
  project: Project
): Promise<Project> => {
  const response = await axios.put<Project>(`${BASE_URL}/${id}`, project, getAuthHeaders());
  return response.data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`, getAuthHeaders());
};

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const token = localStorage.getItem('token');

  const response = await axios.post<{ imageUrl: string }>(
    'https://portfolio-backend-dqxo.onrender.com/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.imageUrl;
};
