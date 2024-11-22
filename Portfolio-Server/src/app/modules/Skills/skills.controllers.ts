import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillServices } from './skills.services';
import AppError from '../../errors/AppError';
import { TImageFile } from '../../interfaces/image.interface';
/*


Controller funtion for getting all skills from DB*/
const getAllSkills = catchAsync(async (req, res) => {
  const skills = await SkillServices.getAllSkillsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skills retrieved successfully',
    data: skills,
  });
});
/*
  
  
Controller funtion for creating skills in DB*/
const createSkill = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new AppError(400, 'Please upload an image');
  }

  const result = await SkillServices.createSkillIntoDB(
    req.body,
    req.file as TImageFile
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill created successfully',
    data: result,
  });
});
/*
  
  
Controller funtion for updating skills in DB*/
const updateSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.updateSkillInDB(
    req.params.id,
    req.body,
    req.file as TImageFile
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill updated successfully',
    data: result,
  });
});
/*
  
  
Controller funtion for deleting skills from DB*/
const deleteSkill = catchAsync(async (req, res) => {
  const skillId = req.params.id;
  await SkillServices.deleteSkillFromDB(skillId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill deleted successfully',
    data: null,
  });
});

export const SkillControllers = {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};
