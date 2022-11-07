import url from "url";
import path from "path";
import express from "express";
import mainRoutes from "./routes/mainRoutes.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server
const port = process.env.PORT || 3030;
const app = express();
// Server config
app.use(express.static(path.resolve(__dirname, "./public")));
app.set("views", path.resolve(__dirname, "/partials"));
app.set("view engine", "ejs");
app.use("/", mainRoutes);
// Server listening
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

export default app;
