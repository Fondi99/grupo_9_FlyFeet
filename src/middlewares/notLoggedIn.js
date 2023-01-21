import { check } from "express-validator";

const notLoggedIn = (req, res, next) => {
  let { user } = req.session;
  if (!!user) {
    res.redirect("/");
  } else {
    next();
  }
};

export default notLoggedIn;
