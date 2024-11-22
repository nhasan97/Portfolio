import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { multerUpload } from '../../config/multer.config';
import validateImageFileRequest from '../../middlewares/validateImageFileRequest';
import { ImageFilesArrayZodSchema } from '../../zod/image.validation';
import { parseBody } from '../../middlewares/bodyParser';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidation } from './projects.validation';
import { ProjectControllers } from './projects.controllers';

const router = express.Router();

router.get('/getAllProjects', ProjectControllers.getAllProjects);

router.get('/getSingleProject/:id', ProjectControllers.getSingleProject);

router.get('/count-projects', ProjectControllers.getProjectCount);

router.post(
  '/create-project',
  auth(USER_ROLE.ADMIN),
  multerUpload.fields([{ name: 'projectImages' }]),
  validateImageFileRequest(ImageFilesArrayZodSchema),
  parseBody,
  validateRequest(ProjectValidation.createProjectValidationSchema),
  ProjectControllers.createProject
);

router.patch(
  '/edit-project/:id',
  auth(USER_ROLE.ADMIN),
  multerUpload.fields([{ name: 'projectImages' }]),
  parseBody,
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  ProjectControllers.updateProject
);

router.delete(
  '/delete-project/:id',
  auth(USER_ROLE.ADMIN),
  ProjectControllers.deleteProject
);

export const ProjectRoutes = router;
