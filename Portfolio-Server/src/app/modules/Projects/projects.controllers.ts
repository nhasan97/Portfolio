import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TImageFiles } from '../../interfaces/image.interface';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './projects.services';
/*


Controller funtion for getting all projects from DB*/
const getAllProjects = catchAsync(async (req, res) => {
  const projects = await ProjectServices.getAllProjectsFromDB(
    req.query
    // req.params.email
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Projects retrieved successfully',
    data: projects,
  });
});
/*


Controller funtion for a single project from DB*/
const getSingleProject = catchAsync(async (req, res) => {
  const projectId = req.params.id;
  const project = await ProjectServices.getSingleProjectFromDB(projectId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project retrieved successfully',
    data: project,
  });
});
/*


Controller funtion for counting projects*/
const getProjectCount = catchAsync(async (req, res) => {
  const response = await ProjectServices.getProjectCountFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Projects counted successfully',
    data: response,
  });
});
/*


Controller funtion for creating projects in DB*/
const createProject = catchAsync(async (req, res) => {
  if (!req.files) {
    throw new AppError(400, 'Please upload an image');
  }

  const result = await ProjectServices.createProjectIntoDB(
    req.body,
    req.files as TImageFiles
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project created successfully',
    data: result,
  });
});
/*


Controller funtion for updating projects in DB*/
const updateProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.updateProjectInDB(
    req.params.id,
    req.body,
    req.files as TImageFiles
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project updated successfully',
    data: result,
  });
});
/*


Controller funtion for deleting projects from DB*/
const deleteProject = catchAsync(async (req, res) => {
  const projectId = req.params.id;
  await ProjectServices.deleteProjectFromDB(projectId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project deleted successfully',
    data: null,
  });
});

export const ProjectControllers = {
  getAllProjects,
  getSingleProject,
  getProjectCount,
  createProject,
  updateProject,
  deleteProject,
};
