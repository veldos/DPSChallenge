import { Request, Response } from 'express';
import { runQuery, getQuery, allQuery } from '../services/db.service';

export const getProjects = (req: Request, res: Response) => {
	const projects = allQuery('SELECT * FROM projects');
	res.json(projects);
};

export const getProject = (req: Request, res: Response) => {
	const project = getQuery('SELECT * FROM projects WHERE id = ?', [
		req.params.id,
	]);
	res.json(project);
};

export const createProject = (req: Request, res: Response) => {
	const { name, description } = req.body;
	runQuery('INSERT INTO projects (name, description) VALUES (?, ?)', [
		name,
		description,
	]);
	res.status(201).send('Project created');
};

export const updateProject = (req: Request, res: Response) => {
	const { name, description } = req.body;
	runQuery('UPDATE projects SET name = ?, description = ? WHERE id = ?', [
		name,
		description,
		req.params.id,
	]);
	res.send('Project updated');
};

export const deleteProject = (req: Request, res: Response) => {
	runQuery('DELETE FROM projects WHERE id = ?', [req.params.id]);
	res.send('Project deleted');
};
