import url from 'url';
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controller = {
    home: (req, res) => {
        return res.render(path.resolve(__dirname, '../views/home'));
    },

    register: (req, res) => {
        return res.render(path.resolve(__dirname, '../views/register'));
    },

    cart: (req, res) => {
        return res.render(path.resolve(__dirname, '../views/cart'));
    },

    login: (req, res) => {
        return res.render(path.resolve(__dirname, '../views/login'));
    },

    product: (req, res) => {
        return res.render(path.resolve(__dirname, `../views/product`));
    },
}

export default controller;