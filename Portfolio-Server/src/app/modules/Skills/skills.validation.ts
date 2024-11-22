import { z } from 'zod';
import { PROFICIENCY_LEVEL } from './skills.constants';
import mongoose from 'mongoose';

//---------------------Validation schema for creating skill---------------------

const createSkillValidationSchema = z.object({
  body: z.object({
    skillName: z.string({
      required_error: 'Name is required',
    }),

    icon: z.string(),

    proficiencyLevel: z.nativeEnum(PROFICIENCY_LEVEL).optional(),

    description: z.string({
      required_error: 'Description is required',
    }),

    experienceYears: z.number().default(0).optional(),

    certifications: z
      .string()
      .refine((val) => {
        return mongoose.Types.ObjectId.isValid(val);
      })
      .array()
      .optional(),

    projects: z
      .string()
      .refine((val) => {
        return mongoose.Types.ObjectId.isValid(val);
      })
      .array()
      .optional(),
  }),
});

//---------------------Validation schema for updating skill---------------------

const updateSkillValidationSchema = z.object({
  body: z.object({
    skillName: z.string().optional(),

    icon: z.string().optional(),

    proficiencyLevel: z.nativeEnum(PROFICIENCY_LEVEL).optional(),

    description: z.string().optional(),

    experienceYears: z.number().default(0).optional(),

    certifications: z
      .string()
      .refine((val) => {
        return mongoose.Types.ObjectId.isValid(val);
      })
      .array()
      .optional(),

    projects: z
      .string()
      .refine((val) => {
        return mongoose.Types.ObjectId.isValid(val);
      })
      .array()
      .optional(),
  }),
});

export const SkillValidation = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};
