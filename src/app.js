import url from "url";
import path from "path";
import express from "express";
import session from "express-session";
import methodOverride from "method-override";
// Routers
import indexRouter from "./routes/indexRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
// Local variables
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SESSION_SECRET = "It's a secret!";
// Server
const port = process.env.PORT || 3000;
const app = express();
// Server config
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(
  session({ secret: SESSION_SECRET, resave: true, saveUninitialized: true })
);
app.use(methodOverride("_method"));
// Server routes
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/", indexRouter);
app.use((req, res, next) => {
  res.status(404).render("not-found");
});
// Server listening
app.listen(port, () =>
  console.log(
    `Servidor corriendo en el puerto ${port} (http://localhost:${port})`
  )
);

export default app;
