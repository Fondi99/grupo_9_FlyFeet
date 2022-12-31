import fs from "fs";
import url from "url";
import path from "path";
//
import productService from "../services/productService.js";
//
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
const controller = {
  getLogin: (req, res) => {
    res.render("./admin/login");
  },
  getProducts: (req, res) => {
    let { products } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/products.json"))
    );
    res.render("./admin/products", { products: products });
  },
  getProduct: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.render("./admin/product", { product: product });
  },
  getProductEdit: (req, res) => {
    let { id } = req.params;
    let { products } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/products.json"))
    );
    let product = products.find((product) => product.id == id);
    res.render("./admin/productEdit", { product: product });
  },
  editProduct: (req, res) => {
    let { id } = req.params;
    let { name, description, brand, category, price, colors } = req.body;
    let { lastId, products } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/products.json"))
    );
    let updatedProducts = products.map((product) => {
      if (product.id == id) {
        (product.name = name),
          (product.description = description),
          (product.brand = brand),
          (product.category = category),
          (product.price = price),
          (product.colors = colors);
      }
      return product;
    });
    fs.writeFileSync(
      path.join(__dirname, "../../data/products.json"),
      JSON.stringify({ lastId: lastId, products: updatedProducts })
    );
    res.redirect("/admin/products");
  },
  getProductNew: (req, res) => {
    res.render("./admin/productNew");
  },
  createProduct: (req, res) => {
    let { name, description, brand, category, price, colors } = req.body;
    let { lastId, products } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/products.json"))
    );
    let product = {
      id: lastId + 1,
      name: name,
      description: description,
      brand: brand,
      category: category,
      price: price,
      colors: colors,
    };
    products.push(product);
    fs.writeFileSync(
      path.join(__dirname, "../../data/products.json"),
      JSON.stringify({ lastId: lastId + 1, products: products })
    );
    res.redirect("/admin/products");
  },
  deleteProduct: (req, res) => {
    let { id } = req.params;
    let product = productService.deleteProduct(id);
    res.redirect("/admin/products");
  },
};

export default controller;
