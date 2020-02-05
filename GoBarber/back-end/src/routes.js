import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import userController from './app/controllers/UserController';
import fileController from './app/controllers/FileController';
import providerController from './app/controllers/ProviderController';
import sessionController from './app/controllers/SessionController';
import AppointmentController from './app/controllers/AppointmentController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);
routes.use(authMiddleware);
routes.put('/users', userController.update);
routes.post('/files', upload.single('file'), fileController.store);
routes.get('/providers', providerController.index);
routes.post('/appointments', AppointmentController.store);

export default routes;
