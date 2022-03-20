import { Router } from 'express';
import { usersRouter } from '../../../modules/user/routes/users.routes';
import '../../infra/database/mongoDB/scripts/Eraser';

const routes = Router();

routes.use('/users', usersRouter);


export default routes;