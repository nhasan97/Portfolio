import express from 'express';
import { SkillControllers } from './skills.controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';
import validateRequest from '../../middlewares/validateRequest';
import { SkillValidation } from './skills.validation';

const router = express.Router();

router.get('/getAllSkills', SkillControllers.getAllSkills);

router.post(
  '/create-skill',
  auth(USER_ROLE.ADMIN),
  multerUpload.single('skillIcon'),
  parseBody,
  validateRequest(SkillValidation.createSkillValidationSchema),
  SkillControllers.createSkill
);

router.patch(
  '/edit-skill/:id',
  auth(USER_ROLE.ADMIN),
  multerUpload.single('skillIcon'),
  parseBody,
  validateRequest(SkillValidation.updateSkillValidationSchema),
  SkillControllers.updateSkill
);

router.delete(
  '/delete-skill/:id',
  auth(USER_ROLE.ADMIN),
  SkillControllers.deleteSkill
);

export const SkillRoutes = router;
