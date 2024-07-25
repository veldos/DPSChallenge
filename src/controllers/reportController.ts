import { Request, Response } from 'express';
import { runQuery, getQuery, allQuery } from '../services/db.service';

export const getReports = (req: Request, res: Response) => {
	const reports = allQuery('SELECT * FROM reports');
	res.json(reports);
};

export const getReport = (req: Request, res: Response) => {
	const report = getQuery('SELECT * FROM reports WHERE id = ?', [
		req.params.id,
	]);
	res.json(report);
};

export const createReport = (req: Request, res: Response) => {
	const { projectId, content } = req.body;
	runQuery('INSERT INTO reports (projectId, content) VALUES (?, ?)', [
		projectId,
		content,
	]);
	res.status(201).send('Report created');
};

export const updateReport = (req: Request, res: Response) => {
	const { projectId, content } = req.body;
	runQuery('UPDATE reports SET projectId = ?, content = ? WHERE id = ?', [
		projectId,
		content,
		req.params.id,
	]);
	res.send('Report updated');
};

export const deleteReport = (req: Request, res: Response) => {
	runQuery('DELETE FROM reports WHERE id = ?', [req.params.id]);
	res.send('Report deleted');
};
