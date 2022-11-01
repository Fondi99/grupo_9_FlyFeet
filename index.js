import express from "express";
import path from "path";
import mainRoutes from "./routes/mainRoutes.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.resolve(__dirname, "./app/public")));
//Configuración de EJS
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use("/", mainRoutes);

//Abrir servidor en puerto 3030
app.listen(3030, () => console.log("Servidor corriendo en el puerto 3030"));
