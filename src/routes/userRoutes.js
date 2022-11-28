import { Router } from 'express';
import  mainController from '../controllers/mainController.js';

const router = Router();

router
.get('/', mainController.home)

export default router