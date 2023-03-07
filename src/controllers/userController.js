const controller = {
  getProfile: (req, res) => {
    res.render("users/profile", { user: req.session.user });
  },
};

export default controller;
