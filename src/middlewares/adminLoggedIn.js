const adminLoggedIn = (req, res, next) => {
  let { user } = req.session;
  if(!user && req.cookies.rememberMe){
    user = req.cookies.rememberMe;
    req.session.user = user;
  }
  if (!!user && user.role == "1") {
    next();
  } else {
    res.redirect("/admin/login");
  }
};

export default adminLoggedIn;
