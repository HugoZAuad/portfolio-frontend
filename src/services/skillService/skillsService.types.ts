export type SkillLevel = 'Basico' | 'Intermediario' | 'Avancado' | 'Especialista'; 

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
}

export interface SkillResponse {
  message: string;
  data: Skill;
}

export interface DeleteResponse {
  message: string;
}