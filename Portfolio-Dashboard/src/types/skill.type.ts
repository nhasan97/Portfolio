export const PROFICIENCY_LEVEL = {
  Beginner: "Beginner",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
  Expert: "Expert",
  Master: "Master",
} as const;

//declaring type for skill
export interface ISkill {
  _id?: string;
  skillName: string;
  icon?: string;
  proficiencyLevel?: keyof typeof PROFICIENCY_LEVEL;
  description: string;
  experienceYears?: number;
  certifications?: string[];
  projects?: string[];
}
