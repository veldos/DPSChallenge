//i find this one simple and more practical 
/* eslint-disable @typescript-eslint/no-explicit-any */
import db from '../model/db';

export const runQuery = (query: string, params: any[] = []) => {
	const statement = db.prepare(query);
	return statement.run(params);
};

export const getQuery = (query: string, params: any[] = []) => {
	const statement = db.prepare(query);
	return statement.get(params);
};

export const allQuery = (query: string, params: any[] = []) => {
	const statement = db.prepare(query);
	return statement.all(params);
};
