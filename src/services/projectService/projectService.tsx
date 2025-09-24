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
  hasMore: boolean;
};

const BASE_URL = 'https://portfolio-backend-dqxo.onrender.com/projects';

/**
 * Lista projetos com paginação
 */
export const getProjects = async (
  page: number,
  limit: number = 6
): Promise<PaginatedProjectsResponse> => {
  const response = await axios.get<PaginatedProjectsResponse>(
    `${BASE_URL}?page=${page}&limit=${limit}`
  );
  return response.data;
};

/**
 * Lista todos os projetos sem paginação (para dashboard)
 */
export const getAllProjects = async (): Promise<Project[]> => {
  const response = await axios.get<Project[]>(BASE_URL);
  return response.data;
};

/**
 * Cria um novo projeto
 */
export const createProject = async (project: Project): Promise<Project> => {
  const response = await axios.post<Project>(BASE_URL, project);
  return response.data;
};

/**
 * Atualiza um projeto existente
 */
export const updateProject = async (id: string, project: Project): Promise<Project> => {
  const response = await axios.put<Project>(`${BASE_URL}/${id}`, project);
  return response.data;
};

/**
 * Exclui um projeto
 */
export const deleteProject = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};

/**
 * Upload de imagem (retorna a URL da imagem hospedada)
 */
export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await axios.post<{ imageUrl: string }>(
    'https://portfolio-backend-dqxo.onrender.com/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data.imageUrl;
};
