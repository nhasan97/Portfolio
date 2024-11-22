import { z } from 'zod';
import {
  EMPLOYMENT_NATURE_TYPES,
  JOB_Environment_TYPES,
} from './experiences.constants';
import mongoose from 'mongoose';

//---------------------Validation schema for creating experience---------------------

const createExperienceValidationSchema = z.object({
  body: z.object({
    companyName: z.string({
      required_error: 'Name is required',
    }),

    companyLogo: z.string().optional(),

    joiningDate: z
      .string({ message: 'Joining Date is required' })
      .refine((val) => {
        return new Date(val).toString() !== 'Invalid Date';
      }),

    endingDate: z
      .string()
      .refine((val) => {
        return new Date(val).toString() !== 'Invalid Date';
      })
      .optional(),

    designation: z.string({
      required_error: 'Designation is required',
    }),

    jobEnvironmentType: z.nativeEnum(JOB_Environment_TYPES),

    employmentNatureType: z.nativeEnum(EMPLOYMENT_NATURE_TYPES),

    responsibilities: z
      .string({
        required_error: 'Responsibilities is required',
      })
      .array(),

    technologiesWorkedWith: z
      .string({
        required_error: 'Technologies is required',
      })
      .array(),

    projects: z
      .string({
        required_error: 'Projects is required',
      })
      .refine((val) => {
        return mongoose.Types.ObjectId.isValid(val);
      })
      .array(),
  }),
});

//---------------------Validation schema for updating experience---------------------

const updateExperienceValidationSchema = z.object({
  body: z.object({
    companyName: z.string().optional(),

    companyLogo: z.string().optional(),

    joiningDate: z
      .string()
      .refine((val) => {
        return new Date(val).toString() !== 'Invalid Date';
      })
      .optional(),

    endingDate: z
      .string()
      .refine((val) => {
        return new Date(val).toString() !== 'Invalid Date';
      })
      .optional(),

    designation: z.string().optional(),

    jobEnvironmentType: z.nativeEnum(JOB_Environment_TYPES).optional(),

    employmentNatureType: z.nativeEnum(EMPLOYMENT_NATURE_TYPES).optional(),

    responsibilities: z.string().array().optional(),

    technologiesWorkedWith: z.string().array().optional(),

    projects: z
      .string()
      .refine((val) => {
        return mongoose.Types.ObjectId.isValid(val);
      })
      .array()
      .optional(),
  }),
});

export const ExperienceValidation = {
  createExperienceValidationSchema,
  updateExperienceValidationSchema,
};
