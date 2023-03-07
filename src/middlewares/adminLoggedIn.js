import { check } from "express-validator";

const adminLoggedIn = (req, res, next) => {
  let { user } = req.session;
  console.log(user)
  if (!!user && user.role == "1") {
      next();
} else {
    res.redirect("/admin/login");
  }
};

export default adminLoggedIn;
