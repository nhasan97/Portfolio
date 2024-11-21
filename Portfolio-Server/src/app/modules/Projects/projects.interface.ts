import { Model } from 'mongoose';

//declaring type for project
export type TProject = {
  name: string;
  type: string;
  // thumbnail: string;
  images?: string[];
  description: string;
  features: string[];
  technologies: string[];
  duration: string;
  live_link: string;
  client_link: string;
  server_link: string;
  isDeleted?: boolean;
};

//declaring type for updating project
export type TUpdateProject = {
  name?: string;
  type?: string;
  images?: string[];
  description?: string;
  features?: string[];
  technologies?: string[];
  duration?: string;
  live_link?: string;
  client_link?: string;
  server_link?: string;
};

//declaring type definition for doesProjectExist static function
export interface ProjectModel extends Model<TProject> {
  doesProjectExist(id: string): Promise<TProject>;
}
