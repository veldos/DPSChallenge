import { Router } from 'express';
import {
	getReports,
	getReport,
	createReport,
	updateReport,
	deleteReport,
} from '../controllers/reportController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/reports', authenticate, getReports);
router.get('/reports/:id', authenticate, getReport);
router.post('/reports', authenticate, createReport);
router.put('/reports/:id', authenticate, updateReport);
router.delete('/reports/:id', authenticate, deleteReport);

export default router;
