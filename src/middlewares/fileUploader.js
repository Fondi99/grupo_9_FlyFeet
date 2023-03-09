import url from "url";
import path from "path";
import multer from "multer";
//
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
const storageProduct = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/products/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + ".png");
  },
});

const storageUser = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/users/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + ".png");
  },
});

const upload = {
  product: multer({ storage: storageProduct }),
  user: multer({ storage: storageUser })
};

const uploaders = {
  product: upload.product.single("img"),
  user: upload.user.single("img")
};

export default uploaders;
