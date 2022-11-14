import url from "url";
import path from "path";
import express from "express";
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
app.use(express.static(path.resolve(__dirname, "./public")));
app.set('views', path.resolve(__dirname, './views'));
app.set("view engine", "ejs");
// Server routes
app.use("/admin", adminRouter);
// app.use("/product", productRouter);
// app.use("/user", userRouter);
app.use("/", indexRouter);
// Server listening
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

export default app;
