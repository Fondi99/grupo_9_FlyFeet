import url from "url";
import path from "path";
import express from "express";
import methodOverride from "method-override";
// Routers
import indexRouter from "./routes/indexRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server
const port = process.env.PORT || 3030;
const app = express();
// Server config
app.set('views', path.resolve(__dirname, './views'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(methodOverride("_method"));
// Server routes
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/", indexRouter);
app.use((req, res, next) => {
    res.status(404).render("not-found")
})
// Server listening
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port} (http://localhost:${port})`));

export default app;
