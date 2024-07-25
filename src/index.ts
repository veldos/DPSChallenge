import express from 'express';
import projectRoutes from './routes/projectRoutes';
import reportRoutes from './routes/reportRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', projectRoutes);
app.use('/api', reportRoutes);

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});

export default app;
