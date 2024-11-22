import { SkillModel, TSkill } from './skills.interface';
import { PROFICIENCY_LEVEL } from './skills.constants';
import { model, Schema } from 'mongoose';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

//creating mongoose schema as the first layer of validation for skill data
const skillSchema = new Schema<TSkill, SkillModel>(
  {
    skillName: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      //   required: true,
    },

    proficiencyLevel: {
      type: String,
      enum: Object.keys(PROFICIENCY_LEVEL),
      //   required: true,
    },

    description: {
      type: String,
      required: true,
    },

    experienceYears: {
      type: Number,
      //   required: true,
      default: 0,
    },

    certifications: {
      type: [Schema.Types.ObjectId],
      ref: 'Project',
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
skillSchema.pre('save', async function (next) {
  const doesExist = await Skill.findOne({
    skillName: this.skillName,
    icon: this.icon,
    proficiencyLevel: this.proficiencyLevel,
    description: this.description,
    experienceYears: this.experienceYears,
    certifications: this.certifications,
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

//checking if the skill exists or not using static method
skillSchema.statics.doesSkillExist = async function (expId: string) {
  return await Skill.findOne({
    _id: expId,
    isDeleted: { $ne: true },
  });
};

export const Skill = model<TSkill, SkillModel>('Skill', skillSchema);
