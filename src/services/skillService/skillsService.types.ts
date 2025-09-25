export type SkillLevel = 'BASICO' | 'INTERMEDIARIO' | 'AVANCADO' | 'EXPERIENTE'; 

export type SkillCategory = 'FRONTEND' | 'BACKEND' | 'SOFTSKILLS' | 'DEVOPS' | 'BANCO_DE_DADOS';

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
}

export interface SkillResponse {
  message: string;
  data: Skill;
}

export interface DeleteResponse {
  message: string;
}