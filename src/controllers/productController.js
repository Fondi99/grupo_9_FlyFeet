import { check, validationResult } from "express-validator";
//
import authService from "../services/authService.js";
import userService from "../services/userService.js";
import productService from "../services/productService.js";

const controller = {
  getProducts: (req, res) => {
    let { products } = productService.getProducts();
    res.json({ data: products });
  },
  getProductCreate: (req, res) => {
    res.render("products/create");
  },
  createProduct: (req, res) => {
    let productForm = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    };
    let { product } = productService.createProduct(productForm);
    res.json({ data: product });
  },
  getProduct: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.json({ data: product });
  },
  getProductDetail: async (req, res) => {
    let id = req.params.id;
    let { product } = await productService.getProduct(id);
    res.render("products/detail", { user: req.session.user, product: product });
  },
  getProductEdit: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.json({ data: product });
  },
  editProduct: (req, res) => {
    let { id } = req.params;
    let productForm = {
      id: id,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };
    let { product } = productService.editProduct(productForm);
    res.json({ data: product });
  },
  deleteProduct: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.json({ data: product });
  },
};

export default controller;
