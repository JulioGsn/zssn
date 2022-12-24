import { Router } from 'express';
import { SurvivorsController } from './../controllers';

const routes = Router();

// Survivors routes
routes.get('/survivors', SurvivorsController.index);
routes.post('/survivors', SurvivorsController.create);

export default routes;


