export type SkillLevel = 'BASICO' | 'INTERMEDIARIO' | 'AVANCADO' | 'EXPERIENTE'; 

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