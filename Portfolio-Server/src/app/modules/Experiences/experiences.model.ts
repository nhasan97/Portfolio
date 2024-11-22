import { model, Schema } from 'mongoose';
import { ExperienceModel, TExperience } from './experiences.interface';
import {
  EMPLOYMENT_NATURE_TYPES,
  JOB_Environment_TYPES,
} from './experiences.constants';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

//creating mongoose schema as the first layer of validation for experience data
const experienceSchema = new Schema<TExperience, ExperienceModel>(
  {
    companyName: {
      type: String,
      required: true,
    },

    companyLogo: {
      type: String,
      //   required: true,
    },

    joiningDate: {
      type: Date,
      required: true,
    },

    endingDate: {
      type: Date,
      //   required: true,
    },

    designation: {
      type: String,
      required: true,
    },

    jobEnvironmentType: {
      type: String,
      enum: Object.keys(JOB_Environment_TYPES),
      required: true,
    },

    employmentNatureType: {
      type: String,
      enum: Object.keys(EMPLOYMENT_NATURE_TYPES),
      required: true,
    },

    responsibilities: {
      type: [String],
      default: [],
    },

    technologiesWorkedWith: {
      type: [String],
      default: [],
    },

    projects: {
      type: [Schema.Types.ObjectId],
      ref: 'Project',
      default: [],
    },

    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

//using document middleware for checking if the document already exists or not
experienceSchema.pre('save', async function (next) {
  const doesExist = await Experience.findOne({
    companyName: this.companyName,
    companyLogo: this.companyLogo,
    joiningDate: this.joiningDate,
    endingDate: this.endingDate,
    designation: this.designation,
    jobEnvironmentType: this.jobEnvironmentType,
    employmentNatureType: this.employmentNatureType,
    responsibilities: this.responsibilities,
    technologiesWorkedWith: this.technologiesWorkedWith,
    projects: this.projects,
  });
  if (doesExist) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Experience already exists'
    );
  }
  next();
});

//checking if the project exists or not using static method
experienceSchema.statics.doesExperienceExist = async function (expId: string) {
  return await Experience.findOne({
    _id: expId,
    isDeleted: { $ne: true },
  });
};

export const Experience = model<TExperience, ExperienceModel>(
  'Experience',
  experienceSchema
);
