import { Router } from 'express';
import  adminController from '../controllers/adminController.js';

const router = Router();

router
.get('/', (req, res) => {
    res.redirect('/admin/products')
})
.get('/products', adminController.getProducts)
.post('/products', adminController.createProduct)
.get('/products/add', adminController.getProductNew)
.get('/products/:id/edit', adminController.getProductEdit)
.put('/products/:id', adminController.editProduct)
.get('/login', adminController.getLogin)

export default router