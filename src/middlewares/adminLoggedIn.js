import { check } from "express-validator";

const adminLoggedIn = (req, res, next) => {
  let { user } = req.session;
  if (!!user && user.role === "admin") {
      next();
} else {
    res.redirect("/admin/login");
  }
};

export default adminLoggedIn;
