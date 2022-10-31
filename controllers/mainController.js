import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controller = {
    home: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '../app/views/home.html'));
    },

    register: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '../app/views/register.html'));
    },

    cart: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '../app/views/cart.html'));
    },

    login: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '../app/views/login.html'));
    },

    product: (req, res) => {
        return res.sendFile(path.resolve(__dirname, `../app/views/product.html`));
    },
}

export default controller;