export type ProjectType = 'Frontend' | 'Backend' | 'Fullstack';

export interface Project {
  _id?: string;
  title: string;
  description: string;
  linkRepo?: string;
  linkDeploy?: string;
  imageUrl?: string;
  type: ProjectType;
}
