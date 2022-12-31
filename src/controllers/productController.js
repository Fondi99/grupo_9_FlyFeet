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
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
      colors: req.body.colors,
    };
    let { product } = productService.createProduct(productForm);
    res.json({ data: product });
  },
  getProduct: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.json({ data: product });
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
      description: req.body.description,
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
      colors: req.body.colors,
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
