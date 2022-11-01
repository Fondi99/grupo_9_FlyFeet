import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controller = {
    home: (req, res) => {
        return res.render(path.resolve(__dirname, '../app/views/home.ejs'));
    },

    register: (req, res) => {
        return res.render(path.resolve(__dirname, '../app/views/register.ejs'));
    },

    cart: (req, res) => {
        return res.render(path.resolve(__dirname, '../app/views/cart.ejs'));
    },

    login: (req, res) => {
        return res.render(path.resolve(__dirname, '../app/views/login.ejs'));
    },

    product: (req, res) => {
        return res.render(path.resolve(__dirname, `../app/views/product.ejs`));
    },
}

export default controller;