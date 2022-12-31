import fs from "fs";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productService = {
  getProducts: () => {
    let { products } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/products.json"))
    );
    return { products: products };
  },
  createProduct: (productForm) => {
    let { lastId, products } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/products.json"))
    );
    let product = {
      id: lastId + 1,
      name: productForm.name,
      description: productForm.description,
      brand: productForm.brand,
      category: productForm.category,
      price: productForm.price,
      colors: productForm.colors,
    };
    products.push(product);
    fs.writeFileSync(
      path.join(__dirname, "../../data/products.json"),
      JSON.stringify({ lastId: lastId + 1, products: products })
    );
    return { product: product };
  },
  getProduct: (id) => {
    let product;
    let { lastId, products } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/products.json"))
    );
    if (lastId >= id) {
      product = products.find((product) => product.id == id);
    }
    return { product: product };
  },

  editProduct: (productForm) => {
    let productNew;
    let archivo = fs.readFileSync(path.join(__dirname, "../../data/products.json"))
    let objeto = JSON.parse(archivo)
    let products = objeto.products
    let lastId = objeto.lastId
    products = products.map(function (product) {
      if (product.id == productForm.id) {
        product = {
          id: productForm.id,
          name: productForm.name || "",
          description: productForm.description || "",
          brand: productForm.brad || "",
          category: productForm.category || "",
          price: productForm.price || "",
          img: productForm.img || "",
          colors: productForm.colors || ""
        }
        productNew = product
      }
      return product
    })
    fs.writeFileSync(path.join(__dirname, "../../data/products.json"), JSON.stringify({ lastId: lastId, products: products }))
    return { product: productNew }
  }



};

export default productService;
