import axios from 'axios';

export type Skill = {
  _id?: string;
  name: string;
  level: number;
};

const BASE_URL = 'https://portfolio-backend-dqxo.onrender.com/skills';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getSkills = async (): Promise<Skill[]> => {
  const response = await axios.get<Skill[]>(BASE_URL, getAuthHeaders());
  return response.data;
};

export const createSkill = async (skill: Skill): Promise<Skill> => {
  const response = await axios.post<Skill>(BASE_URL, skill, getAuthHeaders());
  return response.data;
};

export const updateSkill = async (id: string, skill: Skill): Promise<Skill> => {
  const response = await axios.put<Skill>(`${BASE_URL}/${id}`, skill, getAuthHeaders());
  return response.data;
};

export const deleteSkill = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`, getAuthHeaders());
};
