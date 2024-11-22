import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TImageFile } from '../../interfaces/image.interface';
import { TSkill, TUpdateSkill } from './skills.interface';
import { Skill } from './skills.model';

/*


Service funtion for getting all skills from DB*/
const getAllSkillsFromDB = async () => {
  const getSkillQuery = {
    isDeleted: { $ne: true },
  };

  const skills = Skill.find(getSkillQuery);

  return skills;
};
/*
  
  
Service funtion for creating skills in DB*/
const createSkillIntoDB = async (payload: TSkill, passedImage: TImageFile) => {
  if (passedImage) {
    payload.icon = passedImage.path;
  } else {
    delete payload.icon;
  }

  const result = await Skill.create(payload);

  return result;
};
/*
  
  
Service funtion for updating skills in DB*/
const updateSkillInDB = async (
  skillId: string,
  data: TUpdateSkill,
  passedImage: TImageFile
) => {
  const skill = await Skill.doesSkillExist(skillId);

  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill not found');
  }

  if (passedImage) {
    data.icon = passedImage.path;
  } else {
    delete data.icon;
  }

  return await Skill.findOneAndUpdate(
    {
      _id: skillId,
      isDeleted: { $ne: true },
    },
    data,
    { new: true }
  );
};
/*
  
  
Service funtion for deleting skills from DB*/
const deleteSkillFromDB = async (skillId: string) => {
  const skill = await Skill.doesSkillExist(skillId);

  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill not found');
  }

  const response = await Skill.findByIdAndUpdate(
    skillId,
    { isDeleted: true },
    { new: true }
  );

  return response;
};

export const SkillServices = {
  getAllSkillsFromDB,
  createSkillIntoDB,
  updateSkillInDB,
  deleteSkillFromDB,
};
