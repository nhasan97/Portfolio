import express from 'express';
import { ExperienceControllers } from './experiences.controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { parseBody } from '../../middlewares/bodyParser';
import { ExperienceValidation } from './experiences.validation';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

router.get('/getAllExperiences', ExperienceControllers.getAllExperiences);

router.post(
  '/create-experience',
  auth(USER_ROLE.ADMIN),
  multerUpload.single('companyLogoImage'),
  parseBody,
  validateRequest(ExperienceValidation.createExperienceValidationSchema),
  ExperienceControllers.createExperience
);

router.patch(
  '/edit-experience/:id',
  auth(USER_ROLE.ADMIN),
  multerUpload.single('companyLogoImage'),
  parseBody,
  validateRequest(ExperienceValidation.updateExperienceValidationSchema),
  ExperienceControllers.updateExperience
);

router.delete(
  '/delete-experience/:id',
  auth(USER_ROLE.ADMIN),
  ExperienceControllers.deleteExperience
);

export const ExperienceRoutes = router;
