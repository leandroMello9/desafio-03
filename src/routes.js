import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StundentController from './app/controllers/Stuntedent';
import MatriculaController from './app/controllers/MatriculaController';
import auth from './app/middlewares/auth';

const routes = new Router();

routes.get('/teste', (req, res) => {
  return res.json({ msg: true });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/students', auth, StundentController.store);
routes.post('/matricula', auth, MatriculaController.store);

export default routes;
