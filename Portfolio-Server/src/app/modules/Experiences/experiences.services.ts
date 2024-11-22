import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TImageFile } from '../../interfaces/image.interface';
import { TExperience, TUpdateExperience } from './experiences.interface';
import { Experience } from './experiences.model';
/*


Service funtion for getting all experiences from DB*/
const getAllExperiencesFromDB = async () => {
  const getExperienceQuery = {
    isDeleted: { $ne: true },
  };

  const experiences = Experience.find(getExperienceQuery);

  return experiences;
};
/*
  
  
Service funtion for creating experiences in DB*/
const createExperienceIntoDB = async (
  payload: TExperience,
  passedImage: TImageFile
) => {
  if (passedImage) {
    payload.companyLogo = passedImage.path;
  } else {
    delete payload.companyLogo;
  }

  const result = await Experience.create(payload);

  return result;
};
/*
  
  
Service funtion for updating experiences in DB*/
const updateExperienceInDB = async (
  expId: string,
  data: TUpdateExperience,
  passedImage: TImageFile
) => {
  const experience = await Experience.doesExperienceExist(expId);

  if (!experience) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience not found');
  }

  if (passedImage) {
    data.companyLogo = passedImage.path;
  } else {
    delete data.companyLogo;
  }

  return await Experience.findOneAndUpdate(
    {
      _id: expId,
      isDeleted: { $ne: true },
    },
    data,
    { new: true }
  );
};
/*
  
  
Service funtion for deleting experiences from DB*/
const deleteExperienceFromDB = async (expId: string) => {
  const experience = await Experience.doesExperienceExist(expId);

  if (!experience) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience not found');
  }

  const response = await Experience.findByIdAndUpdate(
    expId,
    { isDeleted: true },
    { new: true }
  );

  return response;
};

export const ExperienceServices = {
  getAllExperiencesFromDB,
  createExperienceIntoDB,
  updateExperienceInDB,
  deleteExperienceFromDB,
};
