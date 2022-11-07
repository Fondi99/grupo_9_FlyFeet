import { Router } from 'express';
import  mainController from '../controllers/mainController.js';
import  adminController from '../controllers/adminController.js';

const router = Router();

router
.get('/', adminController.login)
.get('/*', mainController.err404)

export default router