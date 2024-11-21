import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TImageFiles } from '../../interfaces/image.interface';
import { TProject, TUpdateProject } from './projects.interface';
import { Project } from './projects.model';
import { areArraysEqualUnorderedDeep } from './projects.utils';
/*


Service funtion for getting all projects from DB*/
const getAllProjectsFromDB = async (
  query: Record<string, unknown>
  // loggedInUserEmail?: string | undefined
) => {
  const queryObject = { ...query };

  const searchableFields = ['name', 'type', 'technologies'];
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const searchQuery = Project.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const excludeFields = ['searchTerm', 'sort', 'limit', 'page'];

  excludeFields.forEach((el) => delete queryObject[el]);

  const getProjectQuery = {
    isDeleted: { $ne: true },
    ...queryObject,
  };

  const filterQuery = searchQuery.find(getProjectQuery);

  let sort = 'title';
  if (query?.sort) {
    sort = query?.sort as string;
  }
  const sortQuery = filterQuery.sort(sort);

  let limit = 10;
  let page = 1;
  let skip = 0;
  if (query?.limit) {
    limit = Number(query?.limit);
  }
  if (query?.page) {
    page = Number(query?.page);
    skip = page * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = await paginateQuery.limit(limit);

  return limitQuery;
};
/*


Service funtion for getting a single project from DB*/
const getSingleProjectFromDB = async (projectId: string) => {
  const project = await Project.doesProjectExist(projectId);

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'This project is not found!');
  }

  return project;
};
/*


Service funtion for counting projects*/
const getProjectCountFromDB = async () => {
  const getProjectCountQuery = { isDeleted: { $ne: true } };

  const response = await Project.countDocuments(getProjectCountQuery);

  return response;
};
/*


Service funtion for creating projects in DB*/
const createProjectIntoDB = async (payload: TProject, images: TImageFiles) => {
  const { projectImages } = images;
  payload.images = projectImages.map((image) => image.path);

  const result = await Project.create(payload);

  return result;
};
/*


Controller funtion for updating projects in DB*/
const updateProjectInDB = async (
  projectId: string,
  data: TUpdateProject,
  passedImages: TImageFiles
) => {
  const project = await Project.doesProjectExist(projectId);

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }

  let updatedImageData: string[] = [];

  if (
    !areArraysEqualUnorderedDeep(
      project.images as string[],
      data.images as string[]
    )
  ) {
    updatedImageData = [...(data.images as string[])];
  } else {
    updatedImageData = [...(project.images as string[])];
  }

  const projectImages = passedImages['projectImages'];

  if (projectImages && projectImages.length > 0) {
    data.images = [
      ...(updatedImageData as string[]),
      ...projectImages.map((image) => image.path),
    ];
  } else {
    data.images = [...(updatedImageData as string[])];
  }

  return await Project.findOneAndUpdate(
    {
      _id: projectId,
      isDeleted: { $ne: true },
    },
    data,
    { new: true }
  );
};
/*


Service funtion for deleting projects from DB*/
const deleteProjectFromDB = async (projectId: string) => {
  const project = await Project.doesProjectExist(projectId);

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }

  const response = await Project.findByIdAndUpdate(
    projectId,
    { isDeleted: true },
    { new: true }
  );

  return response;
};

export const ProjectServices = {
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  getProjectCountFromDB,
  createProjectIntoDB,
  updateProjectInDB,
  deleteProjectFromDB,
};
