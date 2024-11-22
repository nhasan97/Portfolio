import { Model, ObjectId } from 'mongoose';
import {
  EMPLOYMENT_NATURE_TYPES,
  JOB_Environment_TYPES,
} from './experiences.constants';

//declaring type for experience
export type TExperience = {
  companyName: string;
  companyLogo?: string;
  joiningDate: Date;
  endingDate?: Date;
  designation: string;
  jobEnvironmentType: keyof typeof JOB_Environment_TYPES;
  employmentNatureType: keyof typeof EMPLOYMENT_NATURE_TYPES;
  responsibilities: string[];
  technologiesWorkedWith: string[];
  projects: ObjectId[];
  isDeleted?: boolean;
};

//declaring type for updtating experience
export type TUpdateExperience = {
  companyName: string;
  companyLogo?: string;
  joiningDate: Date;
  endingDate?: Date;
  designation: string;
  jobEnvironmentType: keyof typeof JOB_Environment_TYPES;
  employmentNatureType: keyof typeof EMPLOYMENT_NATURE_TYPES;
  responsibilities: string[];
  technologiesWorkedWith: string[];
  projects: ObjectId[];
};

//declaring type definition for doesExperienceExist static function
export interface ExperienceModel extends Model<TExperience> {
  doesExperienceExist(id: string): Promise<TExperience>;
}
