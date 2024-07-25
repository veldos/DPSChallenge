//starting with model 
import Database from 'better-sqlite3';
const db = new Database('./db/db.sqlite3');
export default db;
