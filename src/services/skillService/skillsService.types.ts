export interface Skill {
  id?: string;
  name: string;
  level: number;
}

export interface SkillResponse {
  message: string;
  skill: Skill;
}

export interface DeleteResponse {
  message: string;
}
