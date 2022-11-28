import { Router } from 'express';
import  mainController from '../controllers/mainController.js';
import  productController from '../controllers/productController.js';

const router = Router();

router
.get('/', mainController.home)
.get('/create', productController.create)
.get('/detail', mainController.product)
export default router