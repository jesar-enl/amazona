export const generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
      expire
  });
};
