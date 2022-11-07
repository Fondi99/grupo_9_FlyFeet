import { Router } from 'express';
import  mainController from '../controllers/mainController.js';

const router = Router();

router
.get('/', mainController.home)
.get('/cart', mainController.cart)
.get('/login', mainController.login)
.get('/register', mainController.register)
.get('/product', mainController.product)
.get('/*', mainController.err404)


export default router