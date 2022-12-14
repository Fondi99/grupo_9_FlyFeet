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
.get('/products/:id', adminController.getProduct)
.put('/products/:id', adminController.editProduct)
.delete('/products/:id', adminController.deleteProduct)
.get('/login', adminController.getLogin)

export default router