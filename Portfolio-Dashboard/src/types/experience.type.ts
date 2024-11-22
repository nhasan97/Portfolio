export const JOB_Environment_TYPES = {
  Remote: "Remote",
  Onsite: "Onsite",
  Hybrid: "Hybrid",
  Fieldbased: "Fieldbased",
} as const;

export const EMPLOYMENT_NATURE_TYPES = {
  Fulltime: "Fulltime",
  Parttime: "Parttime",
  Freelance: "Freelance",
  Contract: "Contract",
  Internship: "Internship",
  Temporary: "Temporary",
} as const;

//declaring type for experience
export interface IExperience {
  _id?: string;
  companyName: string;
  companyLogo?: string;
  joiningDate: Date;
  endingDate?: Date;
  designation: string;
  jobEnvironmentType: keyof typeof JOB_Environment_TYPES;
  employmentNatureType: keyof typeof EMPLOYMENT_NATURE_TYPES;
  responsibilities: string[];
  technologiesWorkedWith: string[];
  projects: string[];
}
