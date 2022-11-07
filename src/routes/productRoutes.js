import { Router } from 'express';
import  mainController from '../controllers/mainController.js';

const router = Router();

router
.get('/', mainController.home)
.get('/*', mainController.err404)
export default router