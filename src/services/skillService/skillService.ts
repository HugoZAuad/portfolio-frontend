import api from '../api/api';
import type { Skill, SkillResponse, DeleteResponse } from './skillsService.types';

export const getSkills = async (): Promise<Skill[]> => {
  const response = await api.get<Skill[]>('/skills');
  return response.data;
};

export const createSkill = async (skill: Skill): Promise<SkillResponse> => {
  const response = await api.post<SkillResponse>('/skills', skill);
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
