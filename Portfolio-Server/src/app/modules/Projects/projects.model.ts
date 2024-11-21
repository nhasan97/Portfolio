import { model, Schema } from 'mongoose';
import { ProjectModel, TProject } from './projects.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

//creating mongoose schema as the first layer of validation for project data
const projectSchema = new Schema<TProject, ProjectModel>(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    // thumbnail: {
    //   type: String,
    //   required: true,
    // },

    images: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      required: true,
    },

    features: {
      type: [String],
      default: [],
    },

    technologies: {
      type: [String],
      default: [],
    },

    duration: {
      type: String,
      required: true,
    },

    live_link: {
      type: String,
      required: true,
    },

    client_link: {
      type: String,
      required: true,
    },

    server_link: {
      type: String,
      required: true,
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
projectSchema.pre('save', async function (next) {
  const doesExist = await Project.findOne({
    name: this.name,
    type: this.type,
    // thumbnail: this.thumbnail,
    images: this.images,
    description: this.description,
    features: this.features,
    technologies: this.technologies,
    duration: this.duration,
    live_link: this.live_link,
    client_link: this.client_link,
    server_link: this.server_link,
  });
  if (doesExist) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Recipe already exists'
    );
  }
  next();
});

//checking if the project exists or not using static method
projectSchema.statics.doesProjectExist = async function (projectId: string) {
  return await Project.findOne({
    _id: projectId,
    isDeleted: { $ne: true },
  });
};

export const Project = model<TProject, ProjectModel>('Project', projectSchema);
