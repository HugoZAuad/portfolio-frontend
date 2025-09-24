import api from '../api/api';
import type { Skill, SkillResponse, DeleteResponse } from './skillsService.types';

export const getSkills = async (): Promise<Skill[]> => {
  const response = await api.get<Skill[]>('/skills');
  return response.data;
};

export const createSkill = async (
  skill: Skill,
  imageFile?: File
): Promise<SkillResponse> => {
  const formData = new FormData();

  formData.append('name', skill.name);
  formData.append('level', String(skill.level));

  if (imageFile) {
    formData.append('image', imageFile); 
  }

  const response = await api.post<SkillResponse>('/skills', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const updateSkill = async (id: string, skill: Skill): Promise<Skill> => {
  const response = await api.patch<Skill>(`/skills/${id}`, skill);
  return response.data;
};

export const deleteSkill = async (id: string): Promise<DeleteResponse> => {
  const response = await api.delete<DeleteResponse>(`/skills/${id}`);
  return response.data;
};
