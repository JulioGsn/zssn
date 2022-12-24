import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => 'server running on port 3333');
