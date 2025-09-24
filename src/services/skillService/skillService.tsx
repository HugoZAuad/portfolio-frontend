import axios from 'axios';

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export const fetchSkills = async (): Promise<Skill[]> => {
  const response = await axios.get('https://portfolio-backend-dqxo.onrender.com/skills');
  return response.data;
};
