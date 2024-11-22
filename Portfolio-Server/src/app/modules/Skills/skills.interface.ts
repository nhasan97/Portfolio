import { Model, ObjectId } from 'mongoose';
import { PROFICIENCY_LEVEL } from './skills.constants';

//declaring type for skill
export type TSkill = {
  skillName: string;
  icon?: string;
  proficiencyLevel?: keyof typeof PROFICIENCY_LEVEL;
  description: string;
  experienceYears?: number;
  certifications?: ObjectId[];
  projects?: ObjectId[];
  isDeleted?: boolean;
};

//declaring type for skill
export type TUpdateSkill = {
  skillName: string;
  icon?: string;
  proficiencyLevel?: keyof typeof PROFICIENCY_LEVEL;
  description: string;
  experienceYears?: number;
  certifications?: ObjectId[];
  projects?: ObjectId[];
};

//declaring type definition for doesSkillExist static function
export interface SkillModel extends Model<TSkill> {
  doesSkillExist(id: string): Promise<TSkill>;
}
