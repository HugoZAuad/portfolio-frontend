import { useApi } from '../../contexts/ApiContext';
import type { Skill, SkillResponse, DeleteResponse } from './skillsService.types';

export type SkillUpdateData = Omit<Skill, 'id'>;

export const useSkillService = () => {
  const api = useApi();

  const getSkills = async (): Promise<Skill[]> => {
    const response = await api.get('/skills');
    return response.data;
  };

  const createSkill = async (
    skill: SkillUpdateData,
  ): Promise<SkillResponse> => {
    const response = await api.post('/skills', skill);
    return response.data;
  };

  const updateSkill = async (id: string, skill: SkillUpdateData): Promise<SkillResponse> => {
    const response = await api.patch(`/skills/${id}`, skill);
    return response.data;
  };

  const deleteSkill = async (id: string): Promise<DeleteResponse> => {
    const response = await api.delete(`/skills/${id}`);
    return response.data;
  };

  return {
    getSkills,
    createSkill,
    updateSkill,
    deleteSkill,
  };
};