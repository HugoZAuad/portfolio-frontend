import { useApi } from '../../contexts/ApiContext';
import type { Skill, SkillResponse, DeleteResponse } from './skillsService.types';

export const useSkillService = () => {
  const api = useApi();

  const getSkills = async (): Promise<Skill[]> => {
    const response = await api.get('/skills');
    return response.data;
  };

  const createSkill = async (
    skill: Skill,
    imageFile?: File
  ): Promise<SkillResponse> => {
    const formData = new FormData();
    formData.append('name', skill.name);
    formData.append('level', String(skill.level));
    if (imageFile) formData.append('image', imageFile);

    const response = await api.post('/skills', formData);
    return response.data;
  };

  const updateSkill = async (id: string, skill: Skill): Promise<Skill> => {
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
