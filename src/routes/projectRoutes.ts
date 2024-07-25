import { Router } from 'express';
import {
	getProjects,
	getProject,
	createProject,
	updateProject,
	deleteProject,
} from '../controllers/projectController';
import { authenticate } from '../middleware/auth';
const router = Router();

router.get('/projects', authenticate, getProjects);
router.get('/projects/:id', authenticate, getProject);
router.post('/projects', authenticate, createProject);
router.put('/projects/:id', authenticate, updateProject);
router.delete('/projects/:id', authenticate, deleteProject);

export default router;
