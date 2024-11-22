import express from 'express';
import { BlogControllers } from './blogs.controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blogs.validation';

const router = express.Router();

router.get('/getAllBlogs', BlogControllers.getAllBlogs);

router.get('/getSingleBlog/:id', BlogControllers.getSingleBlog);

router.get('/count-blogs', BlogControllers.getBlogCount);

router.post(
  '/create-blog',
  auth(USER_ROLE.ADMIN),
  multerUpload.single('blogThumbnail'),
  parseBody,
  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogControllers.createBlog
);

router.patch(
  '/edit-blog/:id',
  auth(USER_ROLE.ADMIN),
  multerUpload.single('blogThumbnail'),
  parseBody,
  validateRequest(BlogValidation.updateBlogValidationSchema),
  BlogControllers.updateBlog
);

router.delete(
  '/delete-blog/:id',
  auth(USER_ROLE.ADMIN),
  BlogControllers.deleteBlog
);

export const BlogRoutes = router;
