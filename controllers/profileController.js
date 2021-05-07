exports.profile = (req, res) => {
  const user = req.user;
  console.log(user);
  res.json({
    data: { user: user },
    email: user.email,
    user: user,
  });
};
