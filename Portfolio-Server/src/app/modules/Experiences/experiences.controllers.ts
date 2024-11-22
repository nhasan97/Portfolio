import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceServices } from './experiences.services';
import AppError from '../../errors/AppError';
import { TImageFile } from '../../interfaces/image.interface';
/*


Controller funtion for getting all experiences from DB*/
const getAllExperiences = catchAsync(async (req, res) => {
  const experiences = await ExperienceServices.getAllExperiencesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experiences retrieved successfully',
    data: experiences,
  });
});
/*
  
  
Controller funtion for creating experiences in DB*/
const createExperience = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new AppError(400, 'Please upload an image');
  }

  const result = await ExperienceServices.createExperienceIntoDB(
    req.body,
    req.file as TImageFile
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience created successfully',
    data: result,
  });
});
/*
  
  
Controller funtion for updating experiences in DB*/
const updateExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.updateExperienceInDB(
    req.params.id,
    req.body,
    req.file as TImageFile
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience updated successfully',
    data: result,
  });
});
/*
  
  
Controller funtion for deleting experiences from DB*/
const deleteExperience = catchAsync(async (req, res) => {
  const projectId = req.params.id;
  await ExperienceServices.deleteExperienceFromDB(projectId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience deleted successfully',
    data: null,
  });
});

export const ExperienceControllers = {
  getAllExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
