import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { ProfileRoutes } from '../modules/Profile/profile.route';
import { ProjectRoutes } from '../modules/Projects/projects.routes';
import { ExperienceRoutes } from '../modules/Experiences/experiences.routes';
import { SkillRoutes } from '../modules/Skills/skills.routes';
import { BlogRoutes } from '../modules/Blogs/blogs.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/experiences',
    route: ExperienceRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
